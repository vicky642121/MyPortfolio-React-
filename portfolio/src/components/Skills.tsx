"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type SkillCategory = {
  label: string;
  icon: string;
  color: "purple" | "cyan" | "pink" | "green" | "amber" | "blue";
  featured?: boolean;
  skills: { name: string; level: "expert" | "strong" | "good" }[];
};

const categories: SkillCategory[] = [
  {
    label: "Backend Engineering",
    icon: "⚙️",
    color: "purple",
    featured: true,
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "PHP (Laravel)", level: "expert" },
      { name: "REST API Design", level: "expert" },
      { name: "Python", level: "strong" },
      { name: "Microservices", level: "strong" },
      { name: "WebSockets", level: "good" },
    ],
  },
  {
    label: "Frontend",
    icon: "🎨",
    color: "cyan",
    featured: true,
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "strong" },
      { name: "Tailwind CSS", level: "strong" },
      { name: "Redux", level: "strong" },
      { name: "TypeScript", level: "strong" },
      { name: "jQuery / AJAX", level: "expert" },
      { name: "GSAP", level: "good" },
    ],
  },
  {
    label: "Databases",
    icon: "🗄️",
    color: "green",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "MySQL", level: "expert" },
      { name: "SQL Optimization", level: "strong" },
      { name: "Firebase", level: "strong" },
      { name: "Redis", level: "good" },
    ],
  },
  {
    label: "Architecture",
    icon: "🏗️",
    color: "pink",
    skills: [
      { name: "System Design", level: "strong" },
      { name: "API Architecture", level: "expert" },
      { name: "Auth & Security", level: "strong" },
      { name: "Payment APIs", level: "strong" },
      { name: "3rd Party Integration", level: "expert" },
    ],
  },
  {
    label: "DevOps & Tools",
    icon: "🔧",
    color: "amber",
    skills: [
      { name: "GitHub / GitLab", level: "expert" },
      { name: "Bitbucket", level: "expert" },
      { name: "CI/CD Pipelines", level: "good" },
      { name: "Docker (basics)", level: "good" },
      { name: "Linux / NGINX", level: "strong" },
    ],
  },
  {
    label: "Process",
    icon: "📋",
    color: "blue",
    skills: [
      { name: "Agile / Scrum", level: "expert" },
      { name: "Code Reviews", level: "strong" },
      { name: "Technical Docs", level: "strong" },
      { name: "Jira / Trello", level: "expert" },
      { name: "TDD Principles", level: "good" },
    ],
  },
];

const colorMap = {
  purple: { bg: "bg-accent/10", border: "border-accent/20", text: "text-accent", glow: "hover:shadow-glow-purple", badge: "bg-accent/15 border-accent/30 text-accent" },
  cyan: { bg: "bg-cyan/10", border: "border-cyan/20", text: "text-cyan", glow: "hover:shadow-glow-cyan", badge: "bg-cyan/15 border-cyan/30 text-cyan" },
  pink: { bg: "bg-pink/10", border: "border-pink/20", text: "text-pink", glow: "hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]", badge: "bg-pink/15 border-pink/30 text-pink" },
  green: { bg: "bg-green/10", border: "border-green/20", text: "text-green", glow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]", badge: "bg-green/15 border-green/30 text-green" },
  amber: { bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400", glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]", badge: "bg-yellow-500/15 border-yellow-500/30 text-yellow-400" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]", badge: "bg-blue-500/15 border-blue-500/30 text-blue-400" },
};

const levelConfig = {
  expert: { label: "Expert", bars: 3, color: "bg-green" },
  strong: { label: "Strong", bars: 2, color: "bg-accent" },
  good: { label: "Good", bars: 1, color: "bg-text-muted" },
};

function SkillCard({ cat, index }: { cat: SkillCategory; index: number }) {
  const c = colorMap[cat.color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`card-base p-6 relative group ${cat.featured ? "ring-1 ring-accent/20" : ""}`}
    >
      {cat.featured && (
        <div className="absolute -top-2.5 left-4">
          <span className="bg-accent text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest">
            Top Skill
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-lg transition-transform group-hover:scale-110 duration-300`}>
          {cat.icon}
        </div>
        <h3 className={`font-display font-600 text-sm ${c.text}`}>{cat.label}</h3>
      </div>

      {/* Skills list */}
      <div className="space-y-2.5">
        {cat.skills.map((skill) => {
          const lc = levelConfig[skill.level];
          return (
            <div key={skill.name} className="flex items-center justify-between group/skill">
              <span className="text-text-secondary text-sm font-400 group-hover/skill:text-text-primary transition-colors duration-200">
                {skill.name}
              </span>
              <div className="flex gap-1 items-center">
                {[0, 1, 2].map((bar) => (
                  <div
                    key={bar}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      bar < lc.bars ? lc.color : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-px bg-accent" />
            <span className="text-accent text-xs font-500 uppercase tracking-widest">Technical Arsenal</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-text-primary leading-tight">
            Skills &{" "}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl font-300">
            4+ years of hands-on production experience across the full stack.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          {Object.entries(levelConfig).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2 text-xs text-text-muted">
              <div className="flex gap-1">
                {[0, 1, 2].map((bar) => (
                  <div key={bar} className={`w-1.5 h-1.5 rounded-full ${bar < val.bars ? val.color : "bg-white/10"}`} />
                ))}
              </div>
              <span className="uppercase tracking-wider">{val.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <SkillCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>

        {/* Skill pill showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
        >
          <p className="text-xs text-text-muted uppercase tracking-widest mb-5">Quick Reference · All Technologies</p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Node.js", color: "bg-green/10 border-green/20 text-green" },
              { name: "Laravel", color: "bg-red-500/10 border-red-500/20 text-red-400" },
              { name: "React.js", color: "bg-cyan/10 border-cyan/20 text-cyan" },
              { name: "Next.js", color: "bg-white/10 border-white/20 text-text-primary" },
              { name: "TypeScript", color: "bg-blue-500/10 border-blue-500/20 text-blue-400" },
              { name: "PostgreSQL", color: "bg-blue-400/10 border-blue-400/20 text-blue-300" },
              { name: "MySQL", color: "bg-orange-400/10 border-orange-400/20 text-orange-300" },
              { name: "Redis", color: "bg-red-400/10 border-red-400/20 text-red-400" },
              { name: "Firebase", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400" },
              { name: "Express.js", color: "bg-text-muted/10 border-text-muted/20 text-text-secondary" },
              { name: "PHP", color: "bg-purple-500/10 border-purple-500/20 text-purple-400" },
              { name: "Python", color: "bg-yellow-400/10 border-yellow-400/20 text-yellow-300" },
              { name: "Redux", color: "bg-accent/10 border-accent/20 text-accent" },
              { name: "Tailwind CSS", color: "bg-cyan/10 border-cyan/20 text-cyan" },
              { name: "Stripe API", color: "bg-accent/10 border-accent/20 text-accent-light" },
              { name: "Twilio", color: "bg-red-500/10 border-red-500/20 text-red-300" },
              { name: "Docker", color: "bg-blue-600/10 border-blue-600/20 text-blue-400" },
              { name: "CI/CD", color: "bg-green/10 border-green/20 text-green" },
              { name: "Agile/Scrum", color: "bg-pink/10 border-pink/20 text-pink" },
              { name: "System Design", color: "bg-accent/10 border-accent/20 text-accent" },
              { name: "GSAP", color: "bg-green/10 border-green/20 text-green" },
              { name: "WebSockets", color: "bg-pink/10 border-pink/20 text-pink" },
            ].map((skill) => (
              <span
                key={skill.name}
                className={`skill-pill ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
