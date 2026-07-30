import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn, staggerContainer } from "../../animations/variants";

export default function Testimonials() {
  return (
    <section className="relative section-pad py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What Clients <span className="gradient-text">Say</span></>}
          subtitle="Feedback from clients I've worked with."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeIn("up", 0)}
              whileHover={{ y: -6 }}
              className="glass-card p-6 hover:border-primary-500/30 transition-colors flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary-500/30 mb-3" />
              <p className="text-sm text-white/70 leading-relaxed flex-1">"{t.content}"</p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
                <img src={t.avatar} alt={t.name} loading="lazy" className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="text-sm font-bold">{t.name}</h4>
                  <p className="text-xs text-primary-300">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary-400 text-primary-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
