"use client";

import Link from "next/link";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#03000A] border-t border-white/[0.05] pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00FFB2] to-[#7B61FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,178,0.2)] group-hover:shadow-[0_0_30px_rgba(0,255,178,0.4)] transition-all duration-500">
                <div className="w-5 h-5 bg-[#03000A] rounded-lg rotate-45 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#00FFB2] to-[#7B61FF] opacity-80" />
                </div>
              </div>
              <span className="text-xl font-bold text-[#F0F0FF] tracking-tighter uppercase whitespace-nowrap">
                Nova Tech <span className="text-[#00FFB2]">Africa</span>
              </span>
            </Link>
            <p className="text-[#8888AA] text-sm leading-relaxed mb-8 max-w-sm">
              We are an engineering studio obsessed with the craft of building products that matter. Founded in Nairobi, built for the world — combining Silicon Valley-level engineering with deep African insights.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "mailto:hello@novatechafrica.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#8888AA] hover:text-[#00FFB2] hover:border-[#00FFB2]/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#F0F0FF] mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Services", "Work", "About", "Blog", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-sm text-[#8888AA] hover:text-[#00FFB2] transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#F0F0FF] mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                "Web Apps",
                "AI / ML",
                "SaaS Platforms",
                "ERP / CRM",
                "Mobile Apps",
                "Brand Design",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-[#8888AA] hover:text-[#00FFB2] transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#F0F0FF] mb-6">Legal</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((legal) => (
                <li key={legal}>
                  <Link
                    href="/legal"
                    className="text-sm text-[#8888AA] hover:text-[#00FFB2] transition-colors duration-300"
                  >
                    {legal}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#8888AA]/60">
            © 2026 Nova Tech Africa. All Rights Reserved.
          </p>
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#8888AA]/60">
            Engineered in <span className="text-[#00FFB2]">Nairobi, Kenya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
