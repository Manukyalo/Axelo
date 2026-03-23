"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

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

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
            aria-label="Nova Tech Africa Home"
          >
            {/* Hexagon SVG Icon */}
            <div className="relative w-9 h-9 flex-shrink-0">
              <svg viewBox="0 0 40 46" fill="none" className="w-full h-full">
                <path
                  d="M20 1L38.66 11.5V32.5L20 43L1.34 32.5V11.5L20 1Z"
                  stroke="url(#hex-grad)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M20 10L30.39 16V28L20 34L9.61 28V16L20 10Z"
                  fill="url(#hex-grad)"
                  opacity="0.3"
                />
                <circle cx="20" cy="23" r="3" fill="#00FFB2" />
                <defs>
                  <linearGradient id="hex-grad" x1="0" y1="0" x2="40" y2="46">
                    <stop stopColor="#00FFB2" />
                    <stop offset="1" stopColor="#7B61FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 rounded-full bg-[#00FFB2]/10 blur-md group-hover:bg-[#00FFB2]/20 transition-all duration-500" />
            </div>
            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#F0F0FF] leading-tight">
              Nova Tech<br />
              <span className="text-[#00FFB2]">Africa</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group py-1 ${
                    activeLink === link.href
                      ? "text-[#00FFB2]"
                      : "text-[#8888AA] hover:text-[#F0F0FF]"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#00FFB2] to-[#7B61FF] transition-all duration-300 ${
                      activeLink === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              {/* Gradient border via wrapper */}
              <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#00FFB2] via-[#7B61FF] to-[#FF6B35] opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
              <button
                onClick={() => handleNavClick("#contact")}
                className="relative px-6 py-2.5 rounded-full bg-[#03000A] text-sm font-semibold text-[#F0F0FF] hover:text-[#00FFB2] transition-colors duration-300 tracking-wide"
              >
                Start a Project →
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-[#F0F0FF] block origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-[#F0F0FF] block"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-[#F0F0FF] block origin-center"
            />
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#03000A] flex flex-col items-center justify-center gap-12"
          >
            {/* Background glow */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00FFB2]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#7B61FF]/5 blur-3xl pointer-events-none" />

            <ul className="flex flex-col items-center gap-8" role="list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-5xl font-bold text-[#F0F0FF] hover:text-[#00FFB2] transition-colors duration-300 tracking-tight"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              onClick={() => handleNavClick("#contact")}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#00FFB2] to-[#7B61FF] text-[#03000A] font-bold text-lg tracking-wide"
            >
              Start a Project →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
