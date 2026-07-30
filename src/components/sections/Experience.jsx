import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn, staggerContainer } from "../../animations/variants";

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title={<>Where I've <span className="gradient-text">Worked</span></>}
          subtitle="Professional roles that shaped my skills across the full stack."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0)}
              className="glass-card p-6 hover:border-primary-500/30 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-300 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-primary-300 text-sm font-medium">{exp.company}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-white/50 px-3 py-1 rounded-full bg-white/5 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="mt-4 text-sm text-white/60 leading-relaxed">{exp.description}</p>

              <ul className="mt-4 space-y-1.5">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-white/60 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
