import { motion } from "framer-motion";
import { Star, GitFork, Code2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn, staggerContainer } from "../../animations/variants";

const githubStats = [
  { label: "Public Repos", value: "20+", icon: GitFork },
  { label: "Contributions", value: "500+", icon: Code2 },
  { label: "Stars Earned", value: "30+", icon: Star },
  { label: "Languages", value: "JS • PHP • TS", icon: SiGithub },
];

export default function GitHubStats() {
  return (
    <section className="relative section-pad py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="GitHub Stats"
          title={<>Coding <span className="gradient-text">Activity</span></>}
          subtitle="A snapshot of my open-source and project activity."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {githubStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeIn("up", 0)}
              className="glass-card p-6 text-center hover:border-primary-500/30 transition-colors group"
            >
              <stat.icon className="w-7 h-7 mx-auto text-primary-300 group-hover:scale-110 transition-transform" />
              <div className="mt-3 text-2xl font-bold font-display gradient-text">{stat.value}</div>
              <div className="mt-1 text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 glass-card p-6 overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-4">
            <SiGithub className="w-5 h-5 text-primary-300" />
            <h3 className="font-bold">Contribution Activity</h3>
          </div>
          <div className="grid grid-cols-12 sm:grid-cols-24 gap-1.5">
            {Array.from({ length: 168 }).map((_, i) => {
              const intensity = Math.random();
              const bg = intensity > 0.8 ? "bg-primary-500" :
                         intensity > 0.6 ? "bg-primary-600/60" :
                         intensity > 0.4 ? "bg-primary-700/40" :
                         intensity > 0.2 ? "bg-primary-800/30" : "bg-white/5";
              return <div key={i} className={`w-full aspect-square rounded-sm ${bg}`} />;
            })}
          </div>
          <div className="flex items-center justify-end gap-2 mt-3 text-xs text-white/40">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-white/5" />
            <div className="w-3 h-3 rounded-sm bg-primary-800/30" />
            <div className="w-3 h-3 rounded-sm bg-primary-700/40" />
            <div className="w-3 h-3 rounded-sm bg-primary-600/60" />
            <div className="w-3 h-3 rounded-sm bg-primary-500" />
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
