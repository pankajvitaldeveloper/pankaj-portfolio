import { motion } from "framer-motion";
import { Globe, Users, Code2, LayoutDashboard, Network, Rocket } from "lucide-react";
import { services } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn, staggerContainer } from "../../animations/variants";

const iconMap = { Globe, Users, Code2, LayoutDashboard, Network, Rocket };

export default function Services() {
  return (
    <section id="services" className="relative section-pad py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title={<>What I <span className="gradient-text">Build</span></>}
          subtitle="End-to-end web development services for businesses and startups."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.title}
                variants={fadeIn("up", 0)}
                whileHover={{ y: -6 }}
                className="glass-card p-6 hover:border-primary-500/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary-500/5 group-hover:bg-primary-500/10 transition-colors" />
                <div className="relative">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-300 inline-block mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">{service.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
