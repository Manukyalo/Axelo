import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novatechafrica.com"),
  title: {
    default: "Nova Tech Africa | Software Engineering & AI Company Nairobi Kenya",
    template: "%s | Nova Tech Africa",
  },
  description:
    "Nova Tech Africa is a premium software engineering studio in Nairobi, Kenya. We build web applications, AI pipelines, SaaS platforms, and mobile apps for enterprises across Africa and globally.",
  keywords: [
    "software engineering company Nairobi",
    "AI development Kenya",
    "SaaS platform development Africa",
    "web development company Nairobi",
    "machine learning Africa",
    "mobile app development Kenya",
    "tech company East Africa",
    "custom software Kenya",
    "enterprise software Africa",
    "React Next.js developer Kenya",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://novatechafrica.com",
    siteName: "Nova Tech Africa",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Nova Tech Africa Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@novatechafrica",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://novatechafrica.com",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://novatechafrica.com/#organization",
      name: "Nova Tech Africa",
      url: "https://novatechafrica.com",
      logo: "https://novatechafrica.com/logo.png",
      description: "Premium software engineering studio in Nairobi, Kenya",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@novatechafrica.com",
        contactType: "sales",
      },
      sameAs: [
        "https://twitter.com/novatechafrica",
        "https://linkedin.com/company/novatechafrica",
      ],
    },
    {
      "@type": "WebSite",
      name: "Nova Tech Africa",
      url: "https://novatechafrica.com",
    },
    {
      "@type": "Service",
      name: "Web Application Development",
      provider: { "@id": "https://novatechafrica.com/#organization" },
      description: "Lightning-fast, SEO-optimized web systems built with React, Next.js, and TypeScript for global scalability.",
      url: "https://novatechafrica.com/services/web-application-development",
      areaServed: "Africa",
    },
    {
      "@type": "Service",
      name: "AI & Machine Learning Development",
      provider: { "@id": "https://novatechafrica.com/#organization" },
      description: "Custom AI models for predictive analytics, NLP, and computer vision tailored for the African data context.",
      url: "https://novatechafrica.com/services/ai-machine-learning-africa",
      areaServed: "Africa",
    },
    {
      "@type": "Service",
      name: "SaaS Platform Development",
      provider: { "@id": "https://novatechafrica.com/#organization" },
      description: "Complete multi-tenant platform engineering covering billing, analytics, and global edge deployment.",
      url: "https://novatechafrica.com/services/saas-platform-development",
      areaServed: "Africa",
    },
    {
      "@type": "Service",
      name: "ERP & CRM Systems",
      provider: { "@id": "https://novatechafrica.com/#organization" },
      description: "Bespoke enterprise systems to automate workflows, inventory, and finances with absolute precision.",
      url: "https://novatechafrica.com/services/erp-crm-systems",
      areaServed: "Africa",
    },
    {
      "@type": "Service",
      name: "Mobile App Development",
      provider: { "@id": "https://novatechafrica.com/#organization" },
      description: "High-performance iOS and Android apps using Flutter, engineered for connectivity in low-bandwidth regions.",
      url: "https://novatechafrica.com/services/mobile-app-development",
      areaServed: "Africa",
    },
    {
      "@type": "Service",
      name: "Brand & Motion Design",
      provider: { "@id": "https://novatechafrica.com/#organization" },
      description: "Premium visual identities and 3D motion graphics that position your tech as a market leader.",
      url: "https://novatechafrica.com/services/brand-motion-design",
      areaServed: "Africa",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#03000A] text-[#F0F0FF]">
        {children}
        <WhatsAppCTA />
      </body>
    </html>
  );
}
