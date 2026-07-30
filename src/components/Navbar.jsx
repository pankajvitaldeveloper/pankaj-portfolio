import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || open ? "glass py-3" : "py-5 bg-transparent"
      )}
    >
      <nav className="section-pad flex items-center justify-between relative z-50">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="text-lg font-bold font-display gradient-text"
        >
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  active === link.href
                    ? "text-white bg-white/5"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex btn-primary text-sm py-2 px-4"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-white relative z-50"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel – solid background so content doesn't show through */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute left-4 right-4 top-full mt-2 z-50 lg:hidden"
            >
              <div className="rounded-2xl border border-white/10 bg-[#0b1220]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                <ul className="flex flex-col p-3 gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={cn(
                          "block px-4 py-3.5 text-sm font-medium rounded-xl transition-colors",
                          active === link.href
                            ? "text-white bg-white/10"
                            : "text-white/70 hover:text-white hover:bg-white/5 active:bg-white/10"
                        )}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}

                  <li className="pt-1">
                    <a
                      href="#contact"
                      onClick={() => handleNavClick("#contact")}
                      className="btn-primary text-sm w-full justify-center py-3"
                    >
                      Hire Me
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}