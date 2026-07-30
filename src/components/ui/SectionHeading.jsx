import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className }) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full glass text-primary-300"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-white/60 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
