import { getAllPosts } from "@/lib/blog";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://blog.b2bmeetings.com/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://blog.b2bmeetings.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...postEntries,
  ];
}
