import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { featuredProjects, clientWork } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import ProjectModal from "../ui/ProjectModal";
import { fadeIn, staggerContainer } from "../../animations/variants";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (project) => {
    setSelected(project);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="relative section-pad py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>Things I've <span className="gradient-text">Built</span></>}
          subtitle="A selection of MERN applications, e-commerce platforms, and tools I've developed."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeIn("up", 0)}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden hover:border-primary-500/30 transition-colors group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full glass text-primary-300">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold font-display">{project.name}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-primary-500/10 text-primary-300 border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-5">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg btn-primary"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                 {project.github !== "#" && (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg btn-ghost"
  >
    <SiGithub className="w-4 h-4" /> Code
  </a>
)}
                  <button
                    onClick={() => openModal(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-white/10 hover:border-primary-500/50 hover:bg-white/5 text-white/70 hover:text-white transition-all"
                  >
                    <FileText className="w-4 h-4" /> Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Professional Work"
            title={<>Client <span className="gradient-text">Projects</span></>}
            subtitle="Real businesses I've worked with as a freelancer."
            align="center"
          />

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
           {clientWork.map((client) => (
  <a
    key={client.name}
    href={client.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <motion.div
      variants={fadeIn("up", 0)}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass-card p-5 h-full hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
    >
      <h4 className="font-bold text-white/90">
        {client.name}
      </h4>

      <p className="text-xs text-primary-300 font-medium mt-1">
        {client.type}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {client.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  </a>
))}
          </motion.div>
        </div>
      </div>

      <ProjectModal project={selected} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
