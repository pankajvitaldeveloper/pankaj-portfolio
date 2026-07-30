import { motion } from "framer-motion";
import { ArrowDown, Mail, BriefcaseBusiness } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { profile, stats } from "../../data/portfolio";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import MagneticButton from "../ui/MagneticButton";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Hero() {
  const typed = useTypingEffect(profile.roles, { typeSpeed: 90, deleteSpeed: 45, delay: 1600 });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-pad pt-32 pb-20">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <motion.div
          className="w-[600px] h-[600px] rounded-full blur-[120px] bg-primary-600/20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm rounded-full glass text-white/70"
        >
          <BriefcaseBusiness className="w-4 h-4 text-green-400" />
          Available for Full-Time Software Engineer Roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-tight"
        >
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-xl md:text-2xl lg:text-3xl font-medium text-white/80 h-9"
        >
          <span className="gradient-text">{typed}</span>
          <span className="animate-pulse text-primary-400">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* <MagneticButton href="#projects" className="btn-primary">
            View My Work
          </MagneticButton>
          <MagneticButton href="#contact" className="btn-ghost">
            Get In Touch
          </MagneticButton> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl glass hover:border-primary-500/50 transition-colors" aria-label="GitHub">
            <SiGithub className="w-5 h-5 text-white/70" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl glass hover:border-primary-500/50 transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5 text-white/70" />
          </a>
          <a href={`mailto:${profile.email}`} className="p-3 rounded-xl glass hover:border-primary-500/50 transition-colors" aria-label="Email">
            <Mail className="w-5 h-5 text-white/70" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-display gradient-text">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-white/50 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
