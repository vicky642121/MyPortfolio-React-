"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-px bg-green" />
            <span className="text-green text-xs font-500 uppercase tracking-widest">Background</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-text-primary leading-tight">
            About{" "}
            <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-text-secondary font-300 leading-relaxed text-base">
              I&apos;m a <span className="text-text-primary font-500">Full Stack Engineer</span> based in{" "}
              <span className="text-text-primary font-500">Chennai, India</span>, with 4+ years of hands-on experience
              delivering production-grade web applications across fintech, gaming, healthcare, and on-demand logistics.
            </p>
            <p className="text-text-secondary font-300 leading-relaxed text-base">
              My strength is in{" "}
              <span className="text-accent font-500">backend engineering</span> — designing APIs that are secure,
              performant, and maintainable at scale. I care about{" "}
              <span className="text-text-primary font-500">clean architecture</span>, meaningful code reviews, and
              systems that just work.
            </p>
            <p className="text-text-secondary font-300 leading-relaxed text-base">
              I&apos;ve shipped products used across{" "}
              <span className="text-cyan font-500">India, South Africa, Canada, and the USA</span> — collaborating with
              cross-functional teams in fast-paced Agile environments.
            </p>
            <p className="text-text-secondary font-300 leading-relaxed text-base">
              My B.E. in Mechanical Engineering gives me a strong analytical foundation. I approach software problems
              with the same systems-thinking mindset — breaking complexity down into clean, solvable components.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
          >
            {[
              {
                label: "Education",
                icon: "🎓",
                content: "B.E. Mechanical Engineering\nPandian Saraswathi Yadav Engineering College\n2015 – 2019",
              },
              {
                label: "Current Role",
                icon: "💼",
                content: "Software Engineer\nCloudrevel Innovations, Chennai\nJul 2024 – Present",
              },
              {
                label: "Location",
                icon: "📍",
                content: "Chennai, Tamil Nadu\nIndia · Open to Remote",
              },
              {
                label: "Interests",
                icon: "⚡",
                content: "System Design · API Architecture\nProduct Thinking · Performance Optimization",
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-base p-4 flex gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                  {card.icon}
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">{card.label}</p>
                  {card.content.split("\n").map((line, j) => (
                    <p key={j} className={`text-sm leading-snug ${j === 0 ? "text-text-primary font-500" : "text-text-muted font-300"}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
