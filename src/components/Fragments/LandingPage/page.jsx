import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero/page";
import ProblemSolution from "./ProblemSolution/page";
import Mitra from "./Mitra/page";
import Benefit from "./Benefit/page";
import CustomerReviews from "./CustomerReviews/page";
import { FaqSection } from "./FAQ/page";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="relative z-10 w-full mx-auto px-6 mt-12 md:mt-20">
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-5xl mx-auto pb-27 md:pb-20"
        >
          <Hero />
        </motion.div>
      </section>

      <Mitra />
      <ProblemSolution />
      <Benefit />
      <CustomerReviews />
      <FaqSection />
    </div>
  );
}
