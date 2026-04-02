import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";

export const ScrollingColumn = ({ testimonials, duration = 40 }) => {
  return (
    <div className="w-full flex flex-col gap-6 relative">
      <motion.div
        className="flex flex-col gap-6 w-full"
        animate={{ y: ["-50%", "0%"] }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
      >
        {/* Set 1 */}
        {testimonials.map((t, i) => (
          <TestimonialCard key={`set1-${i}`} {...t} />
        ))}
        {/* Set 2 (Duplikasi animasi infinite loop tanpa jeda) */}
        {testimonials.map((t, i) => (
          <TestimonialCard key={`set2-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  );
};
