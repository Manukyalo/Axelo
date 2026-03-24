import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  excerpt: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      author: data.author ?? "Nova Tech Africa Team",
      date: data.date ?? "",
      readTime: data.readTime ?? rt.text,
      category: data.category ?? "Engineering",
      keywords: data.keywords ?? [],
      excerpt: data.excerpt ?? content.slice(0, 160).replace(/[#*`]/g, ""),
    } satisfies PostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const contentDir = path.join(process.cwd(), "content/blog");
  const filePath =
    path.join(contentDir, `${slug}.mdx`).replace(/\\/g, "/") ||
    path.join(contentDir, `${slug}.md`).replace(/\\/g, "/");

  const mdxPath = path.join(contentDir, `${slug}.mdx`);
  const mdPath = path.join(contentDir, `${slug}.md`);
  const resolvedPath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!resolvedPath) return null;

  const raw = fs.readFileSync(resolvedPath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  void filePath; // suppress unused warning

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    author: data.author ?? "Nova Tech Africa Team",
    date: data.date ?? "",
    readTime: data.readTime ?? rt.text,
    category: data.category ?? "Engineering",
    keywords: data.keywords ?? [],
    excerpt: data.excerpt ?? content.slice(0, 160).replace(/[#*`]/g, ""),
    content,
  };
}

export function getRelatedPosts(currentSlug: string, count = 2): PostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, count);
}
