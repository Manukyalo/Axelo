import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = {
  "car-clan": {
    title: "Car Clan",
    category: "Automotive & E-commerce",
    overview: "Car Clan is a premier vehicle rental platform serving the Kenyan market, focusing on high-end luxury vehicles and seamless user experience.",
    challenge: "The client needed a platform that could handle high-resolution vehicle galleries, complex booking schedules, and secure payment processing while maintaining a 'luxury' aesthetic that builds trust with high-net-worth individuals.",
    solution: "We built a high-performance Next.js application with a customized Firebase backend for real-time availability. The UI features cinematic transitions, glassmorphism elements, and an intuitive booking funnel designed to convert visitors into clients.",
    results: ["45% Increase in Bookings", "Zero Double-Booking Errors", "Premium Brand Positioning"],
    stack: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion", "Vercel"],
    accent: "#00FFB2",
    liveUrl: "https://car-clan.vercel.app/",
  },
  "hope-counseling": {
    title: "Hope Counseling",
    category: "Mental Health & Branding",
    overview: "Hope Counseling & Support Services is a personal practice dedicated to supporting university students. The founder — a university student herself — approached Nova Tech Africa to create a digital home that felt safe, professional, and accessible to her peers.",
    challenge: "The client needed a website that resonated with students while maintaining clinical professionalism. The challenge was to balance empathy with authority, ensuring the site was both welcoming and trustworthy.",
    solution: "We designed a 'serenity-first' interface using soft gradients and subtle animations. We implemented a streamlined contact system and resource hub to help students find immediate support. The project was delivered as a high-impact personal brand site that scales with her practice.",
    results: ["Direct Student Outreach Tool", "100% Mobile Responsive", "Launched in 2 Weeks"],
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "React Hook Form"],
    accent: "#7B61FF",
    liveUrl: "https://hope-counseling-support-services.vercel.app/",
  },
  "eastern-vacations-ems": {
    title: "Eastern Vacations EMS",
    category: "TravelTech",
    overview: "Eastern Vacations & Safaris Kenya — a Mombasa-based tour and safari operator — needed to replace their manual, spreadsheet-driven workflow with a centralised digital management system capable of handling reservations, scheduling, and admin operations across their entire business.",
    challenge: "Their reservations team and admin department were working in silos: booking data was scattered across spreadsheets and WhatsApp messages, leading to double-bookings, missed follow-ups, and slow client response times — a serious problem in hospitality where speed of response directly impacts revenue.",
    solution: "We built a full Enterprise Management System with two purpose-built portal experiences: a Reservations Portal for the bookings team (safari scheduling, client itinerary generation, payment tracking) and a secure Admin Portal (operational reporting, user management, fleet visibility). The system is a Progressive Web App — installable on any device — with dark mode, role-based access control, and a branded UI in Eastern Vacations' signature safari gold palette.",
    results: ["Booking Errors Eliminated", "Admin & Reservations Unified", "PWA — Works on Any Device"],
    stack: ["React", "Vite", "Firebase", "Tailwind CSS", "Vercel"],
    accent: "#F5A623",
    liveUrl: "https://eastern-vacations-system.vercel.app/",
  },
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

  if (!study) return (
    <main className="min-h-screen pt-40 pb-20 px-6 bg-[#03000A] flex flex-col items-center justify-center text-center">
      <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#8888AA] mb-4 block">404</span>
      <h1 className="text-5xl font-bold text-[#F0F0FF] tracking-tighter mb-4">Case Study Not Found</h1>
      <p className="text-[#8888AA] mb-10">This project may be under NDA or the link is incorrect.</p>
      <Link href="/#work" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/[0.12] text-[#8888AA] hover:text-[#00FFB2] hover:border-[#00FFB2]/30 transition-all duration-300">
        ← Back to Work
      </Link>
    </main>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#03000A]">
      <div className="max-w-4xl mx-auto">
        <Link href="/#work" className="inline-flex items-center gap-2 text-[#8888AA] hover:text-[#00FFB2] transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Work
        </Link>

        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#8888AA] mb-6 inline-block">
            {study.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#F0F0FF] tracking-tighter mb-8">
            {study.title}
          </h1>
          <div className="aspect-video w-full rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br opacity-20" style={{ backgroundImage: `linear-gradient(to bottom right, ${study.accent}, transparent)` }} />
            <span className="text-3xl font-bold text-white/20 select-none">Project Mockup</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#00FFB2] mb-6">Overview</h2>
              <p className="text-[#CCCCEE] text-xl leading-relaxed font-light">{study.overview}</p>
            </section>

            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#7B61FF] mb-6">The Challenge</h2>
              <p className="text-[#8888AA] text-lg leading-relaxed">{study.challenge}</p>
            </section>

            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#FF6B35] mb-6">The Solution</h2>
              <p className="text-[#8888AA] text-lg leading-relaxed">{study.solution}</p>
            </section>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#00FFB2] mb-6">Results</h2>
              <div className="space-y-6">
                {study.results.map((res, i) => (
                  <div key={i} className="glass p-5 rounded-2xl border border-white/[0.08]">
                    <p className="text-2xl font-bold text-[#F0F0FF] tracking-tight">{res}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#8888AA] mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {study.stack.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-[#CCCCEE]">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-white/[0.05] text-center">
          <h3 className="text-3xl font-bold text-[#F0F0FF] mb-8">Ready for similar results?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#00FFB2] to-[#7B61FF] text-[#03000A] font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,255,178,0.3)] transition-all duration-500"
            >
              Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
            </Link>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full border text-sm font-bold tracking-widest uppercase transition-all duration-300"
                style={{ borderColor: `${study.accent}50`, color: study.accent }}
              >
                View Live Site <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
