"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

/* ─── Animated number counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = to / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-mono text-[#00FFB2]">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 47, suffix: "+", label: "Projects Shipped" },
  { value: 3, suffix: "", label: "Continents" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 2, suffix: "M+", label: "Value Delivered" },
];

const headlineWords = [
  { text: "Accelerating", className: "text-[#6366F1]" },
  { text: "What's", className: "text-[#F0F0FF]" },
  { text: "Next.", className: "text-gradient-full" },
];

const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVars: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const wordVars: Variants = {
  hidden: { opacity: 0, y: 80, rotateX: -30 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroContent() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
      aria-labelledby="hero-headline"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid opacity-100 pointer-events-none" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#6366F1]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-[#6366F1]/5 blur-[100px] pointer-events-none" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto flex flex-col items-center pt-20"
      >
        {/* Badge */}
        <motion.div variants={itemVars} className="mb-10">
          <div className="relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
             {/* Pulse dot */}
             <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6366F1]" />
            </span>
            <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#F0F0FF]/80 font-mono">
              Axelo — High Performance Software Studio
            </span>
          </div>
        </motion.div>

        {/* Headline — word by word */}
        <h1
          id="hero-headline"
          className="font-bold leading-[1.0] tracking-tighter mb-8 overflow-hidden"
          style={{ fontSize: "clamp(52px, 9.5vw, 140px)" }}
        >
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-[0.25em]"
            style={{ perspective: "800px" }}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVars}
                className={`inline-block ${word.className}`}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.div>
        </h1>

        {/* Subheading */}
        <motion.p
          variants={itemVars}
          className="text-base sm:text-lg md:text-xl text-[#8888AA] mb-12 max-w-3xl leading-[1.65] font-light"
        >
          Axelo builds the high-performance software systems that power the next <br className="hidden md:block" />
          generation of digital giants. From AI pipelines to SaaS architecture, <br className="hidden md:block" />
          we engineer for speed, scale, and absolute precision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVars}
          className="flex flex-col sm:flex-row gap-5 mb-24"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="relative h-[52px] px-10 flex items-center justify-center rounded-full font-bold text-sm tracking-[0.15em] uppercase text-[#03000A] bg-gradient-to-r from-[#00FFB2] via-[#7B61FF] to-[#FF6B35] group transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,178,0.4)]"
          >
            <span className="relative z-10">Start a Project</span>
          </a>

          {/* Ghost CTA */}
          <a
            href="#work"
            className="h-[52px] px-10 flex items-center justify-center rounded-full font-bold text-sm tracking-[0.15em] uppercase text-[#F0F0FF] border border-white/15 hover:border-[#00FFB2]/40 hover:bg-[#00FFB2]/5 transition-all duration-500 flex gap-2"
          >
            View Our Work <span className="text-[#8888AA] transition-transform group-hover:translate-y-1">↓</span>
          </a>
        </motion.div>

        {/* Stats & Pricing */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            variants={itemVars}
            className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/[0.06]"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-6 px-4 bg-[#03000A] hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span className="text-2xl sm:text-3xl font-bold font-mono mb-1">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] text-[#8888AA] tracking-[0.2em] uppercase font-medium text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
          
          <motion.p 
            variants={itemVars}
            className="text-[11px] font-mono tracking-widest text-[#8888AA] uppercase opacity-70"
          >
            Our engagements start from $8,000. Enterprise projects from $25,000.
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator — animated chevron */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        onClick={() =>
          document.querySelector("#trust-bar")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 group cursor-pointer"
      >
        <span className="text-[10px] text-[#8888AA] tracking-[0.25em] uppercase font-mono group-hover:text-[#00FFB2] transition-colors duration-300">
          Scroll
        </span>
        <div className="flex flex-col items-center gap-0.5">
          {[0, 1].map((i) => (
            <motion.svg
              key={i}
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              animate={{ y: [0, 4, 0], opacity: [0.4 + i * 0.3, 1, 0.4 + i * 0.3] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.18,
              }}
            >
              <path
                d="M1 1L8 8L15 1"
                stroke="#6366F1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          ))}
        </div>
      </motion.button>
    </section>
  );
}
