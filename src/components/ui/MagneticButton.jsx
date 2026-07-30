import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function MagneticButton({ children, className, as = "button", href, onClick, ...props }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  const Comp = motion[as] || motion.button;

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={cn("inline-flex", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
