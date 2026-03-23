import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SERVICES_DATA = {
  "web-application-development": {
    title: "Web Application Development",
    description: "High-performance, scalable web systems built with modern stacks (Next.js, React, Node.js) for the African and global market.",
    challenge: "Fragmented digital experiences often lead to high churn and lost revenue. African enterprises need systems that work offline-first, load instantly on 3G/4G, and scale to millions.",
    approach: "We use a modular architecture that prioritizes Core Web Vitals and edge caching. Our engineering focus is on speed, security, and extreme reliability.",
    deliverables: [
      "Custom React/Next.js Interface",
      "Scalable Node.js/Python API",
      "Real-time Dashboard Analytics",
      "Cloud Architecture (AWS/GCP)",
      "SEO & Performance Optimization",
      "End-to-end Security Audit"
    ],
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker", "Redis"],
    faq: [
      { q: "How long does a custom web app take?", a: "Most enterprise-grade web applications take 12-16 weeks from discovery to launch." },
      { q: "Do you handle hosting and maintenance?", a: "Yes, we provide fully managed AWS/GCP cloud hosting and 24/7 maintenance SLA." },
      { q: "Can we migrate our legacy data?", a: "Absolutely. We specialize in complex data migrations from legacy SQL/Sheet systems." },
      { q: "Is the code proprietary to us?", a: "Yes, once the project is completed, you own 100% of the IP and source code." }
    ]
  },
  "ai-machine-learning-africa": {
    title: "AI & Machine Learning",
    description: "Custom AI solutions for the African market, from fraud detection to predictive supply chain analytics and NLP.",
    challenge: "Most AI models are trained on Western data, leading to bias and failure in African contexts. We build models that understand local nuances.",
    approach: "We leverage localized datasets to train high-accuracy models. Our focus is on practical AI that solves real-world business bottlenecks.",
    deliverables: [
      "Custom ML Model Training",
      "Data Pipeline Engineering",
      "NLP for African Languages",
      "Computer Vision Systems",
      "Predictive Analytics Dashboard",
      "AI Strategy & Ethics Consulting"
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "Pandas", "AWS SageMaker", "OpenCV"],
    faq: [
      { q: "Do I need a huge dataset to start?", a: "Not necessarily. We can use transfer learning and synthetic data to jumpstart your AI project." },
      { q: "How accurate are your models?", a: "Our models typically achieve 95%+ accuracy before deployment, depending on data quality." },
      { q: "Can AI integrate with my existing ERP?", a: "Yes, we build AI layers that sit on top of your existing data infrastructure via REST/GraphQL APIs." },
      { q: "What is the typical ROI for AI?", a: "Our clients usually see a 20-40% increase in operational efficiency within the first 6 months." }
    ]
  },
  "saas-platform-development": {
    title: "SaaS Platform Development",
    description: "End-to-end multi-tenant platform engineering for startups and enterprises looking to launch global software products.",
    challenge: "Building a SaaS is more than just code — it's about handling subscriptions, multi-tenancy, security, and scalability from day one.",
    approach: "We use a 'Scale-First' architecture, ensuring your platform can grow from 100 to 100,000 users without a complete rewrite.",
    deliverables: [
      "Multi-tenant Database Design",
      "Subscription & Billing (Stripe/Paystack)",
      "User Permission & Role Management",
      "Global Content Delivery (CDN)",
      "Automated Deployment Pipeline",
      "White-label Capability"
    ],
    tech: ["Next.js", "Node.js", "Prisma", "AWS", "Stripe", "Redis"],
    faq: [
      { q: "Can you help with MVP launch?", a: "Yes, we have a specialized fast-track program to get your MVP live in 8 weeks." },
      { q: "How do you handle multi-tenancy?", a: "We use isolated schema or row-level security (RLS) depending on your industry's compliance needs." },
      { q: "Is the platform scalable globally?", a: "Yes, we architect using global cloud clusters to ensure low latency in any continent." },
      { q: "Do you integrate with local payments?", a: "Yes, we have deep integrations with M-Pesa, Flutterwave, and Paystack." }
    ]
  },
  "erp-crm-systems": {
    title: "ERP & CRM Systems",
    description: "Tailored enterprise resource planning systems built for the unique operational challenges of African businesses.",
    challenge: "Off-the-shelf ERPs like SAP or Oracle are often too rigid and expensive for growing African enterprises.",
    approach: "We build modular systems that map perfectly to your specific workflows, from inventory management to automated payroll.",
    deliverables: [
      "Custom Workflow Automation",
      "Inventory & Asset Tracking",
      "Financial Reporting Engines",
      "HR & Payroll Integration",
      "API Connectors for Third-party Apps",
      "On-premise or Cloud Deployment"
    ],
    tech: ["PostgreSQL", "Node.js", "React", "Docker", "GraphQL", "Python"],
    faq: [
      { q: "Can this replace our current Excel sheets?", a: "Yes, we specialize in migrating complex Excel-based workflows into secure, cloud-based ERPs." },
      { q: "Is the system mobile-friendly?", a: "Absolutely. Every ERP we build comes with a responsive interface for field operators." },
      { q: "Can we add new modules later?", a: "Yes, our modular design allows you to add features (HR, Sales, etc.) as your business grows." },
      { q: "How secure is our data?", a: "We implement bank-grade encryption and granular role-based access control (RBAC)." }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications engineered for performance and user delight in low-connectivity areas.",
    challenge: "Mobile apps in Africa must be lightweight, battery-efficient, and capable of working offline in rural settings.",
    approach: "We prioritize Flutter for its performance and cost-efficiency. Our apps feature aggressive caching and smart data synchronization.",
    deliverables: [
      "iOS & Android Native Performance",
      "Offline-first Sync Engine",
      "Biometric & Secure Payment Flow",
      "In-app Messaging & Notifications",
      "Store Optimization (ASO)",
      "Analytics & User Behavior Tracking"
    ],
    tech: ["Flutter", "Dart", "Firebase", "SQLite", "GraphQL", "Node.js"],
    faq: [
      { q: "iOS or Android first?", a: "We typically recommend Flutter (cross-platform) to launch on both simultaneously with one codebase." },
      { q: "How do you handle offline sync?", a: "We use an 'Optimistic UI' pattern so users feel the app is always live, even without data." },
      { q: "What is the cost of app maintenance?", a: "We offer monthly maintenance packages at 10-15% of the initial build cost per year." },
      { q: "Do you help with App Store reviews?", a: "Yes, we handle the entire submission and approval process for both Apple and Google." }
    ]
  },
  "brand-motion-design": {
    title: "Brand & Motion Design",
    description: "Cinematic visual identities and high-conversion motion graphics for tech-forward companies in Africa.",
    challenge: "In a crowded market, your brand needs to look 'world-class' to attract premium global partners.",
    approach: "We mix high-end typography with custom 3D motion graphics to create an identity that feels dangerous and elite.",
    deliverables: [
      "Visual Identity & Logomark",
      "3D Product Renderings",
      "Motion Identity System",
      "UI/UX Design Language",
      "Marketing Asset Suite",
      "Brand Guidelines (The Bible)"
    ],
    tech: ["Figma", "AfterEffects", "Spline", "Three.js", "Cinema4D", "Adobe CC"],
    faq: [
      { q: "Do you do logos only?", a: "We prefer building full visual identities to ensure consistency across all touchpoints." },
      { q: "Can you create 3D website assets?", a: "Yes, we specialize in high-performance Three.js and Spline assets for web." },
      { q: "How long is the design process?", a: "A full brand identity typically takes 4-6 weeks of collaborative iteration." },
      { q: "Do we get the source files?", a: "Yes, Figma and high-res source files are delivered upon project completion." }
    ]
  }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = SERVICES_DATA[slug as keyof typeof SERVICES_DATA];

  if (!service) return <div>Not Found</div>;

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#03000A]">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center gap-2 text-[#8888AA] hover:text-[#00FFB2] transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
        </Link>

        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#00FFB2] mb-6 block">
            {service.title} in Africa
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#F0F0FF] tracking-tighter mb-8 leading-[1.1]">
            {service.title}
          </h1>
          <p className="text-[#8888AA] text-xl max-w-2xl leading-relaxed mb-10">
            {service.description}
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#00FFB2] to-[#7B61FF] text-[#03000A] font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,255,178,0.3)] transition-all duration-500"
          >
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Problem/Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="glass p-10 rounded-[2.5rem] border border-white/[0.08]">
            <h3 className="text-[#F0F0FF] text-xl font-bold mb-6">The Challenge</h3>
            <p className="text-[#8888AA] leading-relaxed italic">&ldquo;{service.challenge}&rdquo;</p>
          </div>
          <div className="glass p-10 rounded-[2.5rem] border border-[#00FFB2]/20 bg-[#00FFB2]/5">
            <h3 className="text-[#00FFB2] text-xl font-bold mb-6">Our Approach</h3>
            <p className="text-[#CCCCEE] leading-relaxed">{service.approach}</p>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-[#F0F0FF] mb-12 text-center">Key Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map(item => (
              <div key={item} className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-[#00FFB2] mt-1 flex-shrink-0" />
                <span className="text-[#CCCCEE] text-[15px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-32 text-center">
          <h2 className="text-3xl font-bold text-[#F0F0FF] mb-12">Engineered With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.tech.map(t => (
              <span key={t} className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-sm font-mono text-[#8888AA] hover:text-[#F0F0FF] hover:border-[#00FFB2]/30 hover:bg-[#00FFB2]/5 transition-all duration-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-[#F0F0FF] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <details key={i} className="glass rounded-2xl border border-white/[0.08] group transition-all duration-300">
                <summary className="p-6 cursor-pointer list-none flex items-center justify-between text-[#F0F0FF] font-medium text-lg">
                  {item.q}
                  <span className="text-[#00FFB2] transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="px-6 pb-6 text-[#8888AA] leading-relaxed border-t border-white/[0.05] pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass p-12 rounded-[3rem] border border-[#7B61FF]/30 bg-gradient-to-br from-[#7B61FF]/10 to-transparent text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-20" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F0FF] mb-8 relative z-10 tracking-tighter">
            Ready to get started?
          </h2>
          <p className="text-[#8888AA] text-lg mb-10 relative z-10">Book a free 30-min consultation to discuss your project scope.</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-[#03000A] font-bold text-sm tracking-widest uppercase hover:bg-[#00FFB2] transition-all duration-500 relative z-10"
          >
            Schedule Call <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
