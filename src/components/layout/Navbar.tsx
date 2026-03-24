"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const desktopLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const socials = [
  { icon: Twitter, href: "https://twitter.com/axeloHQ", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/axelo", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/axelo", label: "GitHub" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Escape key closes menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#03000A]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Axelo Home"
          >
            <div className="relative w-9 h-9 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="nav-lg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6366F1"/>
                    <stop offset="100%" stopColor="#7B61FF"/>
                  </linearGradient>
                </defs>
                <rect width="36" height="36" rx="9" fill="url(#nav-lg)" fillOpacity="0.15"/>
                <path d="M18 9L27 25H9L18 9Z" fill="url(#nav-lg)"/>
                <rect x="13" y="20" width="10" height="2" rx="1" fill="#03000A" fillOpacity="0.85"/>
              </svg>
              <div className="absolute inset-0 bg-[#6366F1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-xl font-bold tracking-[0.1em] uppercase text-[#F0F0FF] leading-tight">
              Axelo
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {desktopLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative text-sm font-medium tracking-wide text-[#8888AA] hover:text-[#F0F0FF] transition-colors duration-300 group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-px bg-[#6366F1] w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#6366F1] via-[#4F46E5] to-[#7B61FF] opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
              <Link
                href="/contact"
                className="relative px-6 py-2.5 rounded-full bg-[#03000A] text-sm font-semibold text-[#F0F0FF] hover:text-[#6366F1] transition-colors duration-300 tracking-wide block"
              >
                Start a Project →
              </Link>
            </div>
          </div>

          {/* Hamburger → X */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[60] relative"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-6 h-0.5 bg-[#F0F0FF] block origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-[#F0F0FF] block"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-6 h-0.5 bg-[#F0F0FF] block origin-center"
            />
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop (click-outside to close) */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={close}
              aria-hidden="true"
            />

            {/* Overlay panel */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 bg-[#03000A] border-l border-white/[0.06] flex flex-col px-8 pt-24 pb-10 md:hidden"
            >
              {/* Ambient glows */}
              <div className="absolute top-1/4 -left-16 w-48 h-48 rounded-full bg-[#6366F1]/8 blur-3xl pointer-events-none" />
              <div className="absolute bottom-1/4 -right-8 w-48 h-48 rounded-full bg-[#7B61FF]/8 blur-3xl pointer-events-none" />

              {/* Nav links */}
              <ul className="flex flex-col gap-2 flex-grow" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className="text-4xl font-bold text-[#F0F0FF] hover:text-[#6366F1] transition-colors duration-300 tracking-tight py-2 block"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Contact info + socials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="border-t border-white/[0.06] pt-8 space-y-5"
              >
                <div className="space-y-1">
                  <a
                    href="mailto:hello@axelo.io"
                    className="flex items-center gap-2 text-[13px] font-mono text-[#8888AA] hover:text-[#6366F1] transition-colors duration-300"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    hello@axelo.io
                  </a>
                  <a
                    href="tel:+254700000000"
                    className="text-[13px] font-mono text-[#8888AA] hover:text-[#6366F1] transition-colors duration-300 block"
                  >
                    +254 700 000 000
                  </a>
                </div>

                <div className="flex gap-3">
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

                <Link
                  href="/contact"
                  onClick={close}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white font-bold text-[13px] tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
                >
                  Start a Project →
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
