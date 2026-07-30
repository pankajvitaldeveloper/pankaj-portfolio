import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiPhp, SiLaravel,
  SiTailwindcss, SiBootstrap, SiMysql, SiRedux, SiGit, SiGithub, SiVercel,
  SiPostman, SiHtml5, SiCss, SiCloudinary,
} from "react-icons/si";
import { techStack } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn, staggerContainer } from "../../animations/variants";

const iconMap = {
  SiReact, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiPhp, SiLaravel,
  SiTailwindcss, SiBootstrap, SiMysql, SiRedux, SiGit, SiGithub, SiVercel,
  SiPostman, SiHtml5, SiCss, SiCloudinary,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative section-pad py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Tech Stack"
          title={<>Tools I <span className="gradient-text">Work With</span></>}
          subtitle="The technologies that power my development workflow."
        />

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techStack.map((tech) => {
            const Icon = iconMap[tech.icon];
            return (
              <motion.div
                key={tech.name}
                variants={fadeIn("up", 0)}
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl glass-card hover:border-primary-500/30 transition-colors w-28"
              >
                {Icon && <Icon className="text-3xl" style={{ color: tech.color }} />}
                <span className="text-xs font-medium text-white/70">{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
