import { motion } from "framer-motion";
import { Layout, Server, Database, ShieldCheck, Wrench } from "lucide-react";
import { skillCategories } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn, staggerContainer } from "../../animations/variants";

const iconMap = { Layout, Server, Database, ShieldCheck, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title={<>My <span className="gradient-text">Tech Arsenal</span></>}
          subtitle="Tools and technologies I use to build modern web applications."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Layout;
            return (
              <motion.div
                key={cat.name}
                variants={fadeIn("up", 0)}
                whileHover={{ y: -6 }}
                className="glass-card p-6 hover:border-primary-500/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 text-white/70 border border-white/10 hover:border-primary-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
