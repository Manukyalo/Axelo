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
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "", label: "Continents" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 2, suffix: "M+", label: "Value Created" },
];

const words = ["We", "Engineer", "Digital", "Products", "That", "Dominate."];

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#00FFB2]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-[#7B61FF]/5 blur-[100px] pointer-events-none" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div variants={itemVars} className="mb-8">
          <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00FFB2]/25 bg-[#00FFB2]/5 backdrop-blur-sm">
            <span className="text-base">🌍</span>
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#00FFB2] font-mono">
              Africa&apos;s Premier Engineering Studio
            </span>
            {/* Pulse dot */}
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFB2] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFB2]" />
            </span>
          </div>
        </motion.div>

        {/* Headline — word by word */}
        <h1
          id="hero-headline"
          className="font-bold leading-[1.0] tracking-tighter mb-8 overflow-hidden"
          style={{ fontSize: "clamp(52px, 8vw, 112px)" }}
        >
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-[0.25em]"
            style={{ perspective: "800px" }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVars}
                className={`inline-block ${
                  word === "Dominate."
                    ? "text-gradient-full"
                    : "text-[#F0F0FF]"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </h1>

        {/* Subheading */}
        <motion.p
          variants={itemVars}
          className="text-base sm:text-lg md:text-xl text-[#8888AA] mb-12 max-w-2xl leading-[1.75] font-light"
        >
          From AI-powered SaaS platforms to immersive web experiences —
          Nova Tech Africa transforms ambitious ideas into market-leading products
          that scale across Africa and beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVars}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative group px-8 py-[14px] rounded-full font-semibold text-base tracking-wide text-[#03000A] bg-gradient-to-r from-[#00FFB2] to-[#7B61FF] hover:shadow-[0_0_40px_rgba(0,255,178,0.4)] transition-all duration-500"
          >
            <span className="relative z-10">Start Your Project</span>
            {/* Shimmer */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
            </span>
          </a>

          {/* Ghost CTA */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-[14px] rounded-full font-semibold text-base tracking-wide text-[#F0F0FF] border border-white/15 hover:border-[#00FFB2]/40 hover:bg-[#00FFB2]/5 transition-all duration-500 flex items-center gap-2"
          >
            View Our Work
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVars}
          className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4 bg-[#03000A] hover:bg-[#0D0D1A] transition-colors duration-300"
            >
              <span className="text-2xl sm:text-3xl font-bold font-mono mb-1">
                <Counter to={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-[#8888AA] tracking-widest uppercase font-medium text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
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
                stroke="#00FFB2"
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
