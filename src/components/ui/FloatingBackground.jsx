import { motion } from "framer-motion";

export default function FloatingBackground() {
  const orbs = [
    { size: 500, top: "-10%", left: "-5%", color: "rgba(37,99,235,0.18)", delay: 0 },
    { size: 400, top: "20%", right: "-8%", color: "rgba(34,211,238,0.12)", delay: 2 },
    { size: 450, bottom: "-10%", left: "30%", color: "rgba(59,130,246,0.10)", delay: 4 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            background: orb.color,
          }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}
    </div>
  );
}
