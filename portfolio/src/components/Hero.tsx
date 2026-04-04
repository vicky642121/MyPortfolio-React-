"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const techStack = [
  "Node.js", "Laravel", "React", "Next.js", "PostgreSQL",
  "Express.js", "TypeScript", "PHP", "MySQL", "Redis",
  "Node.js", "Laravel", "React", "Next.js", "PostgreSQL",
  "Express.js", "TypeScript", "PHP", "MySQL", "Redis",
];

function FloatingOrb({ className }: { className: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,99,255,${p.alpha})`;
        ctx.fill();
      });

      // connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

      {/* Background orbs */}
      <FloatingOrb className="w-[500px] h-[500px] bg-accent/10 top-[-100px] left-[-100px] animate-float-slow" />
      <FloatingOrb className="w-[400px] h-[400px] bg-cyan/8 top-[20%] right-[-80px] animate-float" />
      <FloatingOrb className="w-[300px] h-[300px] bg-pink/8 bottom-[10%] left-[20%] animate-float-slow" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">

          {/* Status badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-green/10 border border-green/20 text-green text-xs font-medium px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-glow" />
              Open to opportunities · All Over India
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-display font-900 leading-[1.0] tracking-tight mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            <span className="block text-text-primary">Full Stack</span>
            <span className="block text-gradient">Engineer.</span>
          </motion.h1>

          {/* Sub heading */}
          <motion.p
            variants={item}
            className="font-display text-lg sm:text-2xl text-text-secondary font-400 mb-6 leading-relaxed"
          >
            Vignesh Pandian ·{" "}
            <span className="text-text-primary font-500">4+ years</span> building backends that scale,{" "}
            <br className="hidden sm:block" />
            APIs that integrate, and products that ship.
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-text-secondary text-base font-300 leading-relaxed mb-8 max-w-2xl"
          >
            Specialized in{" "}
            <span className="text-accent font-500">Node.js</span>,{" "}
            <span className="text-cyan font-500">Laravel</span>, and{" "}
            <span className="text-pink font-500">React</span> — shipping fintech platforms, gaming systems,
            and on-demand applications across India, South Africa, Canada, and the USA.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
            <a
              href="mailto:msvickypandian@gmail.com"
              className="group relative inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-medium text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-glow-purple hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
                Let&apos;s work together
              </span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-text-primary text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              View my work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
            {[
              { num: "4+", label: "Years of Experience", color: "text-accent" },
              { num: "9+", label: "Projects Delivered", color: "text-cyan" },
              { num: "3", label: "Countries Served", color: "text-pink" },
              { num: "2", label: "Companies", color: "text-green" },
            ].map((s) => (
              <div key={s.label}>
                <div className={`font-display text-3xl font-800 ${s.color} leading-none`}>{s.num}</div>
                <div className="text-text-muted text-xs mt-1 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-y border-white/5 bg-white/[0.02] py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {techStack.map((t, i) => (
            <span key={i} className="mx-6 text-text-muted text-sm font-mono uppercase tracking-widest">
              {t}
              <span className="mx-6 text-accent/40">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
