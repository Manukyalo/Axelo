"use client";

import { memo } from "react";

const companies = [
  "Safaricom",
  "Equity Bank",
  "Kenya Airways",
  "Microsoft Africa",
  "Google Kenya",
  "MTN",
  "Stanbic Bank",
  "Nation Media Group",
  "Safaricom",
  "Equity Bank",
  "Kenya Airways",
  "Microsoft Africa",
  "Google Kenya",
  "MTN",
  "Stanbic Bank",
  "Nation Media Group",
];

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex items-center gap-3 flex-shrink-0 group cursor-default">
    {/* Icon placeholder — unique shape per company via hash */}
    <div className="w-7 h-7 rounded-md bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#00FFB2]/10 group-hover:border-[#00FFB2]/20 transition-all duration-300">
      <span className="text-[9px] font-bold text-[#8888AA] group-hover:text-[#00FFB2] transition-colors duration-300 font-mono">
        {name.slice(0, 2).toUpperCase()}
      </span>
    </div>
    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#8888AA] group-hover:text-[#F0F0FF] transition-colors duration-300 whitespace-nowrap">
      {name}
    </span>
  </div>
);

export const TrustBar = memo(() => (
  <section
    id="trust-bar"
    className="relative z-10 w-full py-8 bg-[#0D0D1A] border-y border-white/[0.05] overflow-hidden"
    aria-label="Trusted by leading organisations"
  >
    {/* Fade masks */}
    <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#0D0D1A] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#0D0D1A] to-transparent z-10 pointer-events-none" />

    {/* Label */}
    <p className="absolute left-1/2 -translate-x-1/2 -top-3.5 bg-[#0D0D1A] px-4 font-mono text-[9px] tracking-[0.3em] uppercase text-[#8888AA]/60 whitespace-nowrap z-20">
      Trusted by teams at
    </p>

    {/* Marquee — always moving, no pause on hover */}
    <div className="flex overflow-hidden">
      <div
        className="flex items-center gap-12 animate-marquee"
        style={{ animationDuration: "32s", animationTimingFunction: "linear" }}
      >
        {companies.map((name, i) => (
          <LogoPlaceholder key={`${name}-${i}`} name={name} />
        ))}
        {/* Separator dots */}
        {Array.from({ length: companies.length }).map((_, i) => (
          <span key={`dot-${i}`} className="text-[#00FFB2]/30 text-xs flex-shrink-0">
            ·
          </span>
        ))}
      </div>
    </div>
  </section>
));
TrustBar.displayName = "TrustBar";
