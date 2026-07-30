import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Download, Send, CheckCircle2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn } from "../../animations/variants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: FaLinkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin },
    { icon: SiGithub, label: "GitHub", value: "View my code", href: profile.github },
  ];

  return (
    <section id="contact" className="relative section-pad py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="gradient-text">Work Together</span></>}
          subtitle="Have a project in mind or a role to fill? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("left", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 glass-card p-4 hover:border-primary-500/30 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-300 group-hover:scale-110 transition-transform">
                  <link.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">{link.label}</p>
                  <p className="text-sm font-medium text-white/80">{link.value}</p>
                </div>
              </a>
            ))}

            {/* <a href={profile.resume} className="btn-primary w-full">
              <Download className="w-4 h-4" /> Download Resume
            </a> */}
          </motion.div>

          <motion.form
            variants={fadeIn("right", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-6 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500/50 focus:outline-none text-white placeholder-white/30 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500/50 focus:outline-none text-white placeholder-white/30 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500/50 focus:outline-none text-white placeholder-white/30 transition-colors resize-none"
                placeholder="Tell me about your project or role..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
