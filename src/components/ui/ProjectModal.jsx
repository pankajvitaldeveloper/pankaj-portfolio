import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-white/60" />
            </button>

            <div className="overflow-hidden rounded-xl mb-6 border border-white/10">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-primary-300">
              {project.category}
            </span>
            <h3 className="mt-2 text-2xl font-bold font-display">{project.name}</h3>
            <p className="mt-3 text-white/70 leading-relaxed">{project.description}</p>

            <div className="grid gap-4 mt-6 sm:grid-cols-2">
              <InfoBlock label="My Role" value={project.role} />
              <InfoBlock label="Challenges" value={project.challenges} />
              <InfoBlock label="Solution" value={project.solution} />
              <div>
                <h4 className="text-sm font-semibold text-white/80 mb-2">Features</h4>
                <ul className="space-y-1">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-white/60 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white/80 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary text-sm">
                Live Demo
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InfoBlock({ label, value }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white/80 mb-1">{label}</h4>
      <p className="text-sm text-white/60 leading-relaxed">{value}</p>
    </div>
  );
}
