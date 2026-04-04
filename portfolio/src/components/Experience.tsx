"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cloudrevel Innovations",
    location: "Chennai, India",
    period: "Jul 2024 — Present",
    current: true,
    color: "accent",
    bullets: [
      "Architected and maintained high-traffic backend services using Node.js, Laravel, and Express — improving data retrieval performance for gaming and banking platforms.",
      "Built Immevault — a full-stack internal tool for employee onboarding and project tracking, streamlining resource management across teams.",
      "Engineered Petty Audit, a secure financial audit module with complex relational data modeling in PostgreSQL and tamper-proof transaction logging.",
      "Implemented secure API integrations for core banking features, ensuring compliance with financial data security standards.",
      "Developed third-party gaming API integrations with custom data transformation logic to meet project-specific requirements at scale.",
    ],
    tags: ["Node.js", "Laravel", "Express", "PostgreSQL", "PHP", "React"],
  },
  {
    role: "Full Stack Developer",
    company: "Uplogic Technology",
    location: "Madurai, India",
    period: "Jul 2022 — Jun 2024",
    current: false,
    color: "cyan",
    bullets: [
      "Led design and implementation of key features for on-demand platforms Shesha-E-Hailing and Spotnrides Elite, serving users across South Africa, Canada, and India.",
      "Built and maintained the full React frontend and PHP Laravel backend for taxi, towing, and healthcare booking applications.",
      "Integrated high-impact third-party APIs — Stripe (payments), Twilio (SMS/OTP), Abenity (membership), and Bitventure.",
      "Managed Admin panel development and driver/rider-facing APIs, conducting code reviews to uphold quality across the engineering team.",
      "Collaborated closely with UI/UX designers to ship polished, user-centric interfaces within Agile sprint cycles.",
    ],
    tags: ["React", "Laravel", "Stripe", "Twilio", "MySQL", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-px bg-cyan" />
            <span className="text-cyan text-xs font-500 uppercase tracking-widest">Career</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-text-primary leading-tight">
            Work{" "}
            <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-cyan/20 to-transparent hidden md:block ml-4" />

          <div className="space-y-8 md:pl-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-[52px] top-5 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center ${
                  exp.current
                    ? "border-accent bg-accent/30 shadow-glow-purple"
                    : "border-cyan bg-cyan/20"
                }`}>
                  {exp.current && (
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
                  )}
                </div>

                <div className="card-base p-7 group">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-700 text-text-primary">{exp.role}</h3>
                        {exp.current && (
                          <span className="bg-green/15 border border-green/25 text-green text-[10px] font-600 px-2 py-0.5 rounded-full uppercase tracking-widest">
                            Current
                          </span>
                        )}
                      </div>
                      <p className={`text-sm font-500 ${exp.current ? "text-accent" : "text-cyan"}`}>
                        {exp.company}
                      </p>
                      <p className="text-text-muted text-xs mt-0.5">{exp.location}</p>
                    </div>
                    <span className="text-text-muted text-xs font-mono bg-white/5 px-3 py-1.5 rounded-lg whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                        <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${exp.current ? "bg-accent" : "bg-cyan"}`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-text-muted bg-white/5 border border-white/8 px-2.5 py-1 rounded-md hover:text-text-secondary hover:border-white/15 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
