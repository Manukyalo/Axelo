import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogIndexClient } from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog — Insights & Engineering Perspectives",
  description:
    "Practical thinking on software engineering, AI development in Africa, SaaS platforms, and building products for Africa's digital economy. By Nova Tech Africa.",
  openGraph: {
    title: "Insights & Engineering Perspectives | Nova Tech Africa",
    description:
      "Practical thinking on software, AI, and building products for Africa's digital economy.",
    url: "https://novatechafrica.com/blog",
  },
  alternates: { canonical: "https://novatechafrica.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="bg-[#03000A] min-h-screen">
      <Navbar />
      <BlogIndexClient posts={posts} />
      <Footer />
    </div>
  );
}
