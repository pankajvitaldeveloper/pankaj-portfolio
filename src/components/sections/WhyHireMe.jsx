import { motion } from "framer-motion";
import {
  Code2, Blocks, Network, ShieldCheck, Smartphone, Gauge, Users, Lightbulb, GraduationCap,
} from "lucide-react";
import { whyHireMe } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn, staggerContainer } from "../../animations/variants";

const iconMap = {
  Code2, Blocks, Network, ShieldCheck, Smartphone, Gauge, Users, Lightbulb, GraduationCap,
};

export default function WhyHireMe() {
  return (
    <section className="relative section-pad py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Why Hire Me?"
          title={<>What I <span className="gradient-text">Bring to the Table</span></>}
          subtitle="Beyond code — the qualities that make me a reliable engineer."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {whyHireMe.map((item) => {
            const Icon = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.title}
                variants={fadeIn("up", 0)}
                whileHover={{ y: -4 }}
                className="glass-card p-5 hover:border-primary-500/30 transition-colors group flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-300 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-white/55 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
