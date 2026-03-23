"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to build a web application in Kenya?",
    a: "Web application costs vary based on complexity, features, and timeline. Simple apps typically start from $5,000–$15,000, while enterprise-grade platforms with custom backends, AI features, and multi-tenant architecture range from $30,000–$150,000+. We always provide a detailed, transparent quote after a free discovery call — no hidden costs.",
  },
  {
    q: "How long does it take to develop a SaaS platform?",
    a: "A minimum viable SaaS product typically takes 3–5 months from discovery to launch. A full-featured platform with billing, analytics, user management, and custom integrations can take 6–12 months. We use agile two-week sprints, so you see working software every two weeks and can provide continuous feedback throughout the build.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "We work with both — from seed-stage startups building their first MVP to large enterprises modernizing legacy systems. Our engagement models are flexible: fixed-scope projects, time-and-materials retainers, or dedicated team augmentation. We've helped early-stage startups raise funding rounds using platforms we built for them.",
  },
  {
    q: "What technologies does Nova Tech Africa use?",
    a: "Our core stack includes Next.js, React, TypeScript, and Python for application development; PostgreSQL, Redis, and Firebase for data; TensorFlow, PyTorch, and LangChain for AI/ML; and AWS, GCP, and Kubernetes for cloud infrastructure. We recommend the right tools for your specific needs — not a one-size-fits-all template.",
  },
  {
    q: "Can you integrate AI into our existing system?",
    a: "Absolutely. We specialize in AI integration for existing platforms — adding intelligent features like natural language interfaces, predictive analytics, document processing, fraud detection, and recommendation engines. We audit your current stack, identify the highest-impact AI use cases, and build integrations that work with your existing data and infrastructure.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. All projects include a 30-day post-launch warranty covering bug fixes and critical issues. Beyond that, we offer flexible retainer plans covering ongoing maintenance, feature development, performance monitoring, security updates, and priority technical support — typically from $1,500/month depending on scope.",
  },
  {
    q: "Are you able to work with international clients?",
    a: "Yes — we work with clients across Africa, the UK, the United States, and beyond. We're fully remote-capable with experience collaborating across time zones. Project management is handled through modern async tools (Notion, Linear, Slack) and we hold regular video syncs at times convenient for your team, wherever you are.",
  },
  {
    q: "How do I start a project with Nova Tech Africa?",
    a: "Simply fill out our contact form or email hello@novatechafrica.com. We'll respond within 24 hours to schedule a free 45-minute discovery call where we learn about your vision, technical requirements, and goals. After the call, we prepare a detailed proposal, timeline, and fixed-price quote — no obligation, no pressure.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="border-b border-white/[0.07] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[15px] font-medium text-[#F0F0FF] group-hover:text-[#00FFB2] transition-colors duration-300 leading-snug">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-[#8888AA] group-hover:text-[#00FFB2] transition-colors duration-300" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
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
  );
}

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
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#00FFB2] mb-4 block">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="font-bold text-[#F0F0FF] tracking-tighter mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
          >
            Frequently Asked <span className="text-gradient-mint">Questions</span>
          </h2>
          <p className="text-[#8888AA] text-[14px] leading-[1.8]">
            Everything you need to know about working with Nova Tech Africa.
          </p>
        </motion.div>

        <div className="glass rounded-2xl border border-white/[0.07] px-6 md:px-10">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
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
            href="mailto:hello@novatechafrica.com"
            className="text-[#00FFB2] hover:underline"
          >
            Email us directly →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
