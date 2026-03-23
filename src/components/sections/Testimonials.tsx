"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const variants: Variants = {
  enter: (d: number) => ({ opacity: 0, x: (d > 0 ? 60 : -60), filter: "blur(8px)" }),
  center: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: "easeOut" as any } },
  exit: (d: number) => ({ opacity: 0, x: (d > 0 ? -60 : 60), filter: "blur(8px)", transition: { duration: 0.35, ease: "easeIn" as any } }),
};

const testimonials = [
  {
    id: 1,
    quote:
      "Nova Tech Africa didn't just build our ERP — they rebuilt how our entire operation runs. We went from managing spreadsheets across 6 countries to a single real-time dashboard. The ROI within the first 6 months was undeniable.",
    name: "James Odhiambo",
    role: "CTO",
    company: "FreightLink East Africa",
    country: "Kenya 🇰🇪",
    initials: "JO",
    accent: "#00FFB2",
    gradient: "from-[#00FFB2] to-[#7B61FF]",
  },
  {
    id: 2,
    quote:
      "We'd worked with agencies in London and Dubai before. Nova Tech Africa matched that quality at a fraction of the cost, and they actually understood our African market context. The Aura Pay platform has processed over $12M in its first quarter.",
    name: "Amara Diallo",
    role: "CEO",
    company: "Aura Financial Technologies",
    country: "Nigeria 🇳🇬",
    initials: "AD",
    accent: "#7B61FF",
    gradient: "from-[#7B61FF] to-[#FF6B35]",
  },
  {
    id: 3,
    quote:
      "The Lumina Health platform connected our 10,000+ provider network seamlessly. What impressed us most was how the team handled offline-first architecture for clinics in rural areas — something no other vendor had even considered.",
    name: "Dr. Priya Mehta",
    role: "Product Lead",
    company: "Lumina Health",
    country: "South Africa 🇿🇦",
    initials: "PM",
    accent: "#FF6B35",
    gradient: "from-[#FF6B35] to-[#00FFB2]",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const advance = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  // Auto-advance every 5 seconds
  useEffect(() => {
    timerRef.current = setTimeout(() => advance(1), 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, advance]);

  const t = testimonials[current];

  return (
    <section
      className="py-32 px-6 relative z-10 w-full bg-[#0D0D1A] border-t border-white/[0.04]"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#7B61FF]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#00FFB2] mb-4 block">
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="font-bold text-[#F0F0FF] tracking-tighter"
            style={{ fontSize: "clamp(30px, 4.5vw, 60px)" }}
          >
            What Our <span className="text-gradient-mint">Clients Say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass rounded-2xl p-8 md:p-12 border border-white/[0.08] relative overflow-hidden"
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-8 text-[120px] leading-none font-serif opacity-[0.06] select-none"
                style={{ color: t.accent }}
              >
                "
              </div>

              {/* Top accent line */}
              <div
                className="absolute top-0 left-10 right-10 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${t.accent}50, transparent)`,
                }}
              />

              <p className="text-[#CCCCEE] text-lg md:text-xl leading-[1.75] mb-8 relative z-10 font-light">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border border-white/20 bg-gradient-to-br ${t.gradient} text-white shadow-[0_4px_15px_rgba(0,0,0,0.3)]`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#F0F0FF] font-semibold text-[15px]">{t.name}</p>
                  <p className="text-[#8888AA] text-[13px] font-mono">
                    {t.role} · {t.company} · {t.country}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows & Disclaimer */}
          <div className="mt-12 flex flex-col items-center gap-8">
            <div className="flex items-center justify-between w-full">
              <button
                onClick={() => advance(-1)}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full glass border border-white/[0.08] flex items-center justify-center text-[#8888AA] hover:text-[#00FFB2] hover:border-[#00FFB2]/30 transition-all duration-300"
              >
                ←
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((t2, i) => (
                  <button
                    key={t2.id}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="transition-all duration-300"
                  >
                    <span
                      className="block rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? 24 : 6,
                        height: 6,
                        background: i === current ? t.accent : "rgba(255,255,255,0.15)",
                      }}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => advance(1)}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full glass border border-white/[0.08] flex items-center justify-center text-[#8888AA] hover:text-[#00FFB2] hover:border-[#00FFB2]/30 transition-all duration-300"
              >
                →
              </button>
            </div>

            <p className="text-[11px] text-[#8888AA] italic opacity-60 font-mono text-center">
              All client details used with permission. Some project details withheld under NDA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
