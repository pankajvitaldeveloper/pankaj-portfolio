import { motion } from "framer-motion";
import { Trophy, Users, Rocket, Cpu } from "lucide-react";
import { achievements } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn, staggerContainer } from "../../animations/variants";

const iconMap = { Trophy, Users, Rocket, Cpu };

export default function Achievements() {
  return (
    <section className="relative section-pad py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Milestones & <span className="gradient-text">Wins</span></>}
          subtitle="Key accomplishments from my journey so far."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {achievements.map((item) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.title}
                variants={fadeIn("up", 0)}
                whileHover={{ y: -6 }}
                className="glass-card p-6 hover:border-primary-500/30 transition-colors group text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary-500/10 text-primary-300 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold font-display text-sm">{item.title}</h3>
                <p className="mt-2 text-xs text-white/55 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
