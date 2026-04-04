"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Immevault",
    category: "Internal Tool · Fintech",
    desc: "Centralized employee onboarding and project-tracking platform. Streamlined internal workflows, resource allocation, and team visibility across the organization.",
    tags: ["Node.js", "Laravel", "PostgreSQL", "React"],
    color: "accent",
    icon: "🏛️",
    featured: true,
  },
  {
    name: "Core Banking Web App",
    category: "Fintech · Security",
    desc: "High-security banking module with encrypted API integrations, financial data management, and compliance-ready transaction architecture.",
    tags: ["Node.js", "PostgreSQL", "Security", "REST API"],
    color: "cyan",
    icon: "🏦",
    featured: true,
  },
  {
    name: "Shesha-E-Hailing",
    category: "On-Demand · South Africa",
    desc: "Customized taxi booking platform with identity verification, real-time driver dispatch, and rider-facing mobile APIs — deployed for the South African market.",
    tags: ["Laravel", "React", "MySQL", "Maps API"],
    color: "pink",
    icon: "🚖",
    featured: true,
  },
  {
    name: "Petty Audit",
    category: "Finance · Audit",
    desc: "Secure financial auditing system with PostgreSQL-backed transaction logging, role-based access, and real-time audit trail reporting.",
    tags: ["PostgreSQL", "Laravel", "Security"],
    color: "green",
    icon: "📊",
  },
  {
    name: "Gaming Web Platform",
    category: "Gaming · API Integration",
    desc: "Third-party game data integration hub with custom transformation logic to normalize and serve game data per project-specific requirements.",
    tags: ["Node.js", "Express", "3rd Party APIs"],
    color: "purple",
    icon: "🎮",
  },
  {
    name: "Doctor Always",
    category: "Healthcare · USA",
    desc: "Healthcare appointment booking platform with React-based patient verification, doctor scheduling, and secure health record management.",
    tags: ["React", "Laravel", "MySQL"],
    color: "blue",
    icon: "🏥",
  },
  {
    name: "Road-Aider Towing",
    category: "On-Demand · Canada",
    desc: "Tow service platform integrating Abenity membership API for Canadian users — discount coordination and real-time service dispatch.",
    tags: ["Laravel", "Abenity API", "React"],
    color: "amber",
    icon: "🚛",
  },
  {
    name: "Jeleso",
    category: "E-Commerce · India",
    desc: "Jewellery e-commerce platform for gold and silver trading with real-time price tracking, secure checkout, and user-centric product discovery.",
    tags: ["Laravel", "React", "Stripe", "MySQL"],
    color: "yellow",
    icon: "💍",
  },
  {
    name: "Spotnrides Elite",
    category: "On-Demand · Multi-market",
    desc: "Full-featured on-demand taxi and towing service with comprehensive REST API layer, admin panel, and cross-platform driver applications.",
    tags: ["Laravel", "React", "REST API", "Twilio"],
    color: "red",
    icon: "🗺️",
  },
];

const colorMap: Record<string, string> = {
  accent: "group-hover:border-accent/40 group-hover:shadow-[0_0_25px_rgba(108,99,255,0.15)]",
  cyan: "group-hover:border-cyan/40 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
  pink: "group-hover:border-pink/40 group-hover:shadow-[0_0_25px_rgba(244,114,182,0.15)]",
  green: "group-hover:border-green/40 group-hover:shadow-[0_0_25px_rgba(74,222,128,0.15)]",
  purple: "group-hover:border-purple-400/40 group-hover:shadow-[0_0_25px_rgba(192,132,252,0.15)]",
  blue: "group-hover:border-blue-400/40 group-hover:shadow-[0_0_25px_rgba(96,165,250,0.15)]",
  amber: "group-hover:border-amber-400/40 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.15)]",
  yellow: "group-hover:border-yellow-400/40 group-hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]",
  red: "group-hover:border-red-400/40 group-hover:shadow-[0_0_25px_rgba(248,113,113,0.15)]",
};

const iconBgMap: Record<string, string> = {
  accent: "bg-accent/10 border-accent/20",
  cyan: "bg-cyan/10 border-cyan/20",
  pink: "bg-pink/10 border-pink/20",
  green: "bg-green/10 border-green/20",
  purple: "bg-purple-400/10 border-purple-400/20",
  blue: "bg-blue-400/10 border-blue-400/20",
  amber: "bg-amber-400/10 border-amber-400/20",
  yellow: "bg-yellow-400/10 border-yellow-400/20",
  red: "bg-red-400/10 border-red-400/20",
};

const catColorMap: Record<string, string> = {
  accent: "text-accent",
  cyan: "text-cyan",
  pink: "text-pink",
  green: "text-green",
  purple: "text-purple-400",
  blue: "text-blue-400",
  amber: "text-amber-400",
  yellow: "text-yellow-400",
  red: "text-red-400",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-pink/3 via-transparent to-transparent pointer-events-none" />

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
            <div className="w-5 h-px bg-pink" />
            <span className="text-pink text-xs font-500 uppercase tracking-widest">Selected Work</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-800 text-text-primary leading-tight">
            Key{" "}
            <span className="text-gradient-warm">Projects</span>
          </h2>
          <p className="text-text-secondary mt-3 font-300">
            9 projects shipped · 3 countries · fintech, gaming, healthcare & logistics
          </p>
        </motion.div>

        {/* Featured 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {featured.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group card-base p-6 relative overflow-hidden transition-all duration-300 ${colorMap[p.color]}`}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg ${iconBgMap[p.color]} transition-transform group-hover:scale-110 duration-300`}>
                  {p.icon}
                </div>
                <span className="text-[10px] font-700 uppercase tracking-widest bg-accent/15 border border-accent/25 text-accent px-2 py-0.5 rounded-full">
                  Featured
                </span>
              </div>

              <p className={`text-[11px] font-500 uppercase tracking-widest mb-1.5 ${catColorMap[p.color]}`}>{p.category}</p>
              <h3 className="font-display font-700 text-text-primary text-base mb-2 leading-snug">{p.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4 font-300">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono text-text-muted bg-white/5 border border-white/8 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`group card-base p-5 relative overflow-hidden transition-all duration-300 ${colorMap[p.color]}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm ${iconBgMap[p.color]} transition-transform group-hover:scale-110 duration-300`}>
                  {p.icon}
                </div>
                <div>
                  <p className={`text-[10px] font-500 uppercase tracking-wider ${catColorMap[p.color]}`}>{p.category}</p>
                  <h3 className="font-display font-600 text-text-primary text-sm leading-tight">{p.name}</h3>
                </div>
              </div>
              <p className="text-text-muted text-xs leading-relaxed mb-3 font-300">{p.desc}</p>
              <div className="flex flex-wrap gap-1">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-text-muted bg-white/5 border border-white/8 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
