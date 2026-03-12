import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDir = path.join(process.cwd(), "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  keywords: string[];
  category: string;
  content: string;
  readingTime: number;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "unknown",
      author: data.author || "B2Bmeetings.com",
      description: data.description || "",
      keywords: data.keywords || [],
      category: data.category || "uncategorized",
      content,
      readingTime,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return Array.from(cats).sort();
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}
