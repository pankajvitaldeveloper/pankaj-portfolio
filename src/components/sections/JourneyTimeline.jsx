import { motion } from "framer-motion";
import { journey } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";

export default function JourneyTimeline() {
  return (
    <section id="journey" className="relative section-pad py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="My Journey"
          title={<>The <span className="gradient-text">Road So Far</span></>}
          subtitle="From intern to full-stack developer — every step shaped my craft."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-cyan/50 to-transparent md:-translate-x-1/2" />

          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="glass-card p-5 hover:border-primary-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-primary-500/15 text-primary-300">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display">{item.title}</h3>
                  <p className="text-sm text-primary-300 font-medium">{item.company}</p>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 md:-translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 + 0.2 }}
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan ring-4 ring-background"
                />
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
