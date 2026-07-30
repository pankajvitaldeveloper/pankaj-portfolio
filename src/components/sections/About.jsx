import { motion } from "framer-motion";
import { profile } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import { fadeIn, staggerContainer } from "../../animations/variants";

export default function About() {
  return (
    <section id="about" className="relative section-pad py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title={<>Who is <span className="gradient-text">Pankaj Kumar Mahto?</span></>}
          subtitle="From web design intern to full-stack developer — a journey of continuous learning and building real products."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <motion.div
            variants={fadeIn("left", 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600/20 to-accent-cyan/10 rounded-3xl blur-2xl" />
              <div className="relative glass-card p-8">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-primary-600 to-accent-cyan flex items-center justify-center text-4xl font-bold font-display text-white mb-6">
                  PM
                </div>
                <h3 className="text-xl font-bold">{profile.name}</h3>
                <p className="text-primary-300 text-sm font-medium">{profile.role}</p>
                <p className="text-white/40 text-sm mt-1">{profile.tagline}</p>

                <div className="mt-6 space-y-3 text-sm">
  <Row label="Location" value={profile.location} />
  <Row label="Experience" value="4+ Years" />
  <Row label="Focus" value="MERN • React • Laravel" />
  <Row label="Status" value="Open to Full-Time Roles" />
  <Row label="Email" value={profile.email} />
  <Row label="Phone" value={profile.phone} />
  <Row label="DOB" value={profile.dob} />

  <div className="flex items-start justify-between gap-6 py-3 border-b border-white/10">
    <span className="text-gray-400 shrink-0">Address</span>
    <span className="text-right text-gray-300 leading-6">
      {profile.address}
    </span>
  </div>
</div>

                {/* <a href={profile.resume} className="btn-primary w-full mt-6 text-sm">
                  Download Resume
                </a> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            <motion.p variants={fadeIn("up", 0)} className="text-lg text-white/70 leading-relaxed">
              {profile.summary}
            </motion.p>
            <motion.p variants={fadeIn("up", 0.1)} className="text-white/60 leading-relaxed">
              I started as a Web Designer Intern at Digilinkers in 2022, mastering HTML, CSS, and
              JavaScript. I then moved into backend development with PHP and Laravel at E-Global
              Soft Solutions and Web Vyapar India. Later, I transitioned to the MERN stack at
              Farehold & ZusTravel, building full-stack applications with React, Node.js, Express,
              and MongoDB.
            </motion.p>
            <motion.p variants={fadeIn("up", 0.2)} className="text-white/60 leading-relaxed">
              As a freelancer, I've worked with real clients including Nature Hygiene India, Probe
              Partners, TeamVizory, EditsByDelreen, and EarlyBirdMatrix — delivering CRMs, admin
              panels, landing pages, and business websites. I take full ownership from design to
              deployment.
            </motion.p>

            <motion.div variants={fadeIn("up", 0.3)} className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {[
                "Business Websites",
                "CRM Systems",
                "Landing Pages",
                "Admin Panels",
                "MERN Applications",
                "Authentication Systems",
                "REST APIs",
                "Responsive Design",
                "Deployment",
              ].map((item) => (
                <div key={item} className="px-3 py-2 text-sm rounded-lg glass text-white/70 text-center">
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-2">
      <span className="text-white/40">{label}</span>
      <span className="text-white/80 font-medium">{value}</span>
    </div>
  );
}
