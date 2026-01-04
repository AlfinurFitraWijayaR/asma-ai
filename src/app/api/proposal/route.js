import { NextResponse } from "next/server";
import { proposalSchema } from "@/schema/zodSchema";
import { promptSmartProposal } from "@/utils/prompt";
import { checkDailyLimit, generateProposal } from "@/services/modelService";
import { createClientForServer } from "@/lib/supabase/server";
import { timeNow } from "@/utils/generate";
import { saveUsersLimitToDatabase } from "@/services/authService";

export async function POST(req) {
  const supabase = await createClientForServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { allowed } = await checkDailyLimit(user.id, "smart-proposal");
  if (!allowed) {
    return NextResponse.json(
      {
        error: `Kamu telah mencapai batas limit, silahkan coba lagi besok jam ${timeNow}`,
      },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const validationResult = proposalSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Data tidak valid",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const prompt = promptSmartProposal(validationResult.data);
    const result = await generateProposal(prompt);
    if (!result) {
      return NextResponse.json(
        { error: "AI gagal menghasilkan data analisis bisnis yang valid" },
        { status: 500 }
      );
    }

    const saveUsersLimit = await saveUsersLimitToDatabase({
      feature_name: "smart-proposal",
    });
    if (!saveUsersLimit.success) {
      return NextResponse.json(
        {
          error:
            "Gagal menyimpan hasil limit smart proposal ke DB: " +
            saveUsersLimit.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result,
      fileName: `Proposal_${validationResult.data.namaUsaha.replace(
        /\s+/g,
        "_"
      )}by ASMA AI.pdf`,
    });
  } catch (error) {
    console.error("Error generating proposal:", error);
    return NextResponse.json(
      { success: false, error: "Error generating proposal: " + error.message },
      { status: 500 }
    );
  }
}
