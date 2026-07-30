import { Mail, ArrowUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { profile, navLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative section-pad py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="text-xl font-bold font-display gradient-text">
              {profile.name}
            </a>
            <p className="mt-1 text-sm text-white/40">{profile.role} — {profile.tagline}</p>
          </div>

          <ul className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl glass hover:border-primary-500/50 transition-colors" aria-label="GitHub">
              <SiGithub className="w-4 h-4 text-white/70" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl glass hover:border-primary-500/50 transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="w-4 h-4 text-white/70" />
            </a>
            <a href={`mailto:${profile.email}`} className="p-2.5 rounded-xl glass hover:border-primary-500/50 transition-colors" aria-label="Email">
              <Mail className="w-4 h-4 text-white/70" />
            </a>
            <a href="#home" className="p-2.5 rounded-xl glass hover:border-primary-500/50 transition-colors" aria-label="Back to top">
              <ArrowUp className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
