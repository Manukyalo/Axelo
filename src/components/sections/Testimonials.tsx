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
      "Nova Tech Africa didn't just build our platform — they transformed how we operate. The ERP system they delivered handles our entire supply chain across 6 countries with zero disruption. The quality and speed were unlike anything we'd seen from any vendor before.",
    name: "James Odhiambo",
    role: "CTO",
    company: "FreightLink East Africa",
    country: "Kenya 🇰🇪",
    initials: "JO",
    accent: "#00FFB2",
  },
  {
    id: 2,
    quote:
      "We came to Nova Tech with an idea on a napkin — six months later we had a fully functional FinTech platform processing real transactions. Their ML fraud detection has saved us over $180,000 in chargebacks in the first year alone. Absolutely elite team.",
    name: "Amara Diallo",
    role: "CEO",
    company: "Aura Financial Technologies",
    country: "Nigeria 🇳🇬",
    initials: "AD",
    accent: "#7B61FF",
  },
  {
    id: 3,
    quote:
      "As a health-tech company, we needed a partner who understood both technical excellence and regulatory nuance. Nova Tech Africa delivered a platform that's now used by 10,000+ clinicians daily. They're not a vendor — they're a true engineering partner.",
    name: "Dr. Sarah Kimani",
    role: "Founder & CEO",
    company: "Lumina Health Systems",
    country: "Kenya 🇰🇪",
    initials: "SK",
    accent: "#FF6B35",
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
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border"
                  style={{
                    background: `${t.accent}18`,
                    borderColor: `${t.accent}35`,
                    color: t.accent,
                  }}
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

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mt-8">
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
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
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
        </div>
      </div>
    </section>
  );
}
