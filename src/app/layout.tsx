import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "Nova Tech Africa | AI & Software Engineering Company in Nairobi",
    template: "%s | Nova Tech Africa",
  },
  description:
    "Nova Tech Africa builds high-performance web applications, AI pipelines, and SaaS platforms for ambitious enterprises across Africa and globally. Based in Nairobi, Kenya.",
  keywords: [
    "software engineering company Africa",
    "AI development Nairobi Kenya",
    "SaaS platform development Africa",
    "enterprise software company Nairobi",
    "web development company Kenya",
    "machine learning Africa",
    "React Next.js developer Nairobi",
    "tech company East Africa",
    "software agency Kenya",
    "custom ERP development Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://novatechafrica.com",
    siteName: "Nova Tech Africa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@novatechafrica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@novatechafrica.com",
      },
      sameAs: [
        "https://twitter.com/novatechafrica",
        "https://linkedin.com/company/novatechafrica",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://novatechafrica.com/#website",
      url: "https://novatechafrica.com",
      name: "Nova Tech Africa",
      publisher: { "@id": "https://novatechafrica.com/#organization" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#03000A] text-[#F0F0FF]">
        {children}
      </body>
    </html>
  );
}
