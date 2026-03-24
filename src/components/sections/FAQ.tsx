"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to build a web application in Africa?",
    a: "Our web application projects typically range from $8,000 for lean MVPs to $50,000+ for enterprise-grade platforms. Pricing depends on complexity, integrations, and timeline. We offer a free consultation to give you an accurate scoped estimate before any commitment.",
  },
  {
    q: "How long does it take to develop a SaaS platform?",
    a: "A well-scoped SaaS MVP typically takes 8–14 weeks from kickoff to launch. Full-featured enterprise platforms can take 4–9 months. We use agile 2-week sprints so you see working software every two weeks, not just at the end.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. We work with funded startups building their first product and established enterprises modernizing legacy systems. Our minimum engagement is $8,000, which makes us a fit for serious founders and growing companies.",
  },
  {
    q: "Can you integrate AI into our existing system?",
    a: "Yes — AI integration and augmentation of existing platforms is one of our core services. We've integrated LLMs, computer vision models, and predictive analytics engines into platforms built on various tech stacks.",
  },
  {
    q: "Do you work with international clients outside Africa?",
    a: "Absolutely. While we're based in Nairobi, we've delivered projects for clients in the UK, USA, UAE, and across Africa. We operate in UTC+3 and work asynchronously to accommodate any timezone.",
  },
  {
    q: "What happens after the project launches?",
    a: "We offer retainer-based maintenance packages covering bug fixes, performance monitoring, security patches, and feature iterations. Most clients stay on a monthly retainer post-launch.",
  },
  {
    q: "How do I start a project with Axelo?",
    a: "Fill out our project intake form on the contact page. We respond within 24 hours to schedule a free 30-minute discovery call where we learn about your goals and propose an approach.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Every Axelo project begins with a 1-week deep dive discovery session where we map your business logic, technical requirements, and ROI goals. We sign mutual NDAs before any sensitive business information is shared. Client confidentiality is a core part of how we operate.",
  },
];

// FAQ JSON-LD structured data
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="py-32 px-6 relative z-10 w-full bg-[#03000A] border-t border-white/[0.04]"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#6366F1] mb-4 block">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="font-bold text-[#F0F0FF] tracking-tighter mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
          >
            Frequently Asked{" "}
            <span className="text-gradient-indigo
">Questions</span>
          </h2>
          <p className="text-[#8888AA] text-[14px] leading-[1.8]">
            Everything you need to know before starting a project with us.
          </p>
        </motion.div>

        <div className="glass rounded-2xl border border-white/[0.07] px-6 md:px-10">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="border-b border-white/[0.07] last:border-0"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="text-[15px] font-medium text-[#F0F0FF] group-hover:text-[#6366F1] transition-colors duration-300 leading-snug">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 text-[#8888AA] group-hover:text-[#6366F1] transition-colors duration-300" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[#8888AA] text-[14px] leading-[1.85] max-w-3xl">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#8888AA] text-[13px] mt-8"
        >
          Still have questions?{" "}
          <a
            href="mailto:emmanuelkyalo91@gmail.com"
            className="text-[#6366F1] hover:underline"
          >
            Email us directly →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
