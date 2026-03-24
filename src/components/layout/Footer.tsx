"use client";

import { useState } from "react";
import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Applications", href: "/services/web-application-development" },
  { label: "AI / Machine Learning", href: "/services/ai-machine-learning-africa" },
  { label: "SaaS Platforms", href: "/services/saas-platform-development" },
  { label: "ERP & CRM", href: "/services/erp-crm-systems" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "Brand & Motion", href: "/services/brand-motion-design" },
];

const socials = [
  {
    icon: Twitter,
    href: "https://twitter.com/axeloHQ",
    label: "Twitter / X",
    hoverColor: "#1DA1F2",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/axelo",
    label: "LinkedIn",
    hoverColor: "#0A66C2",
  },
  {
    icon: Github,
    href: "https://github.com/axelo",
    label: "GitHub",
    hoverColor: "#F0F0FF",
  },
  {
    icon: Mail,
    href: "mailto:hello@axelo.io",
    label: "Email",
    hoverColor: "#6366F1",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#03000A] border-t border-white/[0.05] pt-20 pb-10 px-6 relative z-10">
      {/* Subtle top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group" aria-label="Axelo Home">
              <div className="relative w-9 h-9 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M18 4L32 30H4L18 4Z" stroke="#6366F1" strokeWidth="2.5" fill="none"/>
                  <path d="M11 21H25" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <div className="absolute inset-0 bg-[#6366F1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-xl font-bold tracking-[0.1em] uppercase text-[#F0F0FF] leading-tight">
                Axelo
              </span>
            </Link>

            <p className="text-[#8888AA] text-[13px] leading-relaxed mb-6 max-w-[240px]">
              Accelerating What&apos;s Next — Engineering high-performance digital infrastructure for the global stage.
            </p>

            <div className="flex gap-3 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#8888AA] hover:text-[#6366F1] hover:border-[#6366F1]/30 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <a
              href="mailto:hello@axelo.io"
              className="text-[12px] font-mono text-[#8888AA] hover:text-[#6366F1] transition-colors duration-300 flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3" />
              hello@axelo.io
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#F0F0FF] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#8888AA] hover:text-[#6366F1] transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-[#6366F1]">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#F0F0FF] mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc.label}>
                  <Link
                    href={svc.href}
                    className="text-[13px] text-[#8888AA] hover:text-[#6366F1] transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-[#6366F1]">→</span>
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#F0F0FF] mb-2">
              Newsletter
            </h4>
            <p className="text-lg font-bold text-[#F0F0FF] mb-2 leading-snug">
              Stay ahead of the curve.
            </p>
            <p className="text-[13px] text-[#8888AA] mb-5 leading-relaxed">
              Monthly insights on software, AI, and building in Africa.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-xl p-4 border border-[#6366F1]/20 text-center"
              >
                <span className="text-[13px] text-[#6366F1] font-medium">
                  ✓ You&apos;re subscribed!
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                {/* Honeypot */}
                <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.1] focus:border-[#6366F1]/40 rounded-xl px-4 py-3 text-[13px] text-[#F0F0FF] placeholder:text-[#8888AA] outline-none transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#6366F1] text-white font-bold text-[12px] tracking-widest uppercase rounded-xl hover:bg-[#F0F0FF] hover:text-[#03000A] transition-all duration-300"
                >
                  Subscribe <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] font-mono text-[#8888AA]/60 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-mono text-[#8888AA]/60">
            © 2026 Axelo Ltd. Registered in Nairobi, Kenya.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((l, i) => (
              <span key={l.label} className="flex items-center gap-4">
                <Link
                  href={l.href}
                  className="text-[11px] font-mono text-[#8888AA]/60 hover:text-[#6366F1] transition-colors duration-300"
                >
                  {l.label}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span className="text-[#8888AA]/20">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
