"use server";
import Link from "next/link";
import { createClientForServer } from "@/lib/supabase/server";
import { LoginUser } from "./Fragments/Auth/LoginUser";
import AuthModal from "./Fragments/Auth/AuthModal";
import { Activity } from "lucide-react";
import DropdownHover from "./ui/dropdown-hover";

export const Navbar = async () => {
  const supabase = await createClientForServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="relative z-50 mx-3">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-purple-600 rounded-lg shadow-purple-200 shadow-md">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <h1 className="font-semibold text-gray-900 leading-tight text-sm md:text-md">
              ASMA AI
            </h1>
          </div>
        </Link>

        <div className="flex items-center md:gap-3">
          <DropdownHover />
          {user ? <LoginUser user={user} /> : <AuthModal />}
        </div>
      </div>
    </nav>
  );
};
