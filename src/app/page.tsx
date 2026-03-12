import { getAllPosts, getAllCategories } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2Bmeetings Blog — Outbound Sales Insights for MSPs & IT Firms",
  description:
    "Expert articles on outbound sales, lead generation, cold email, and growth strategies for MSPs, IT service firms, and cybersecurity companies.",
  alternates: { canonical: "https://blog.b2bmeetings.com" },
};

export default async function BlogHome({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allPosts = getAllPosts();
  const posts = category
    ? allPosts.filter((p) => p.category === category)
    : allPosts;
  const categories = getAllCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
          Outbound Sales Insights
        </h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl">
          Practical strategies for MSPs, IT service firms, and cybersecurity companies looking to
          grow through outbound sales and AI-powered lead generation.
        </p>
      </section>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/"
            className={`text-sm px-3 py-1.5 rounded-full no-underline transition ${
              !category
                ? "bg-[var(--color-text)] text-white font-medium"
                : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/?category=${cat}`}
              className={`text-sm px-3 py-1.5 rounded-full no-underline transition capitalize ${
                category === cat
                  ? "bg-[var(--color-text)] text-white font-medium"
                  : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
              }`}
            >
              {cat.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      )}

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-[var(--color-text-muted)]">First blog post coming soon.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-cyan)] hover:shadow-sm transition bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-surface)] text-[var(--color-text-muted)] capitalize">
                  {post.category.replace(/-/g, " ")}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">{post.readingTime} min read</span>
              </div>
              <Link href={`/${post.slug}`} className="no-underline">
                <h2 className="text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-cyan)] transition mb-2 leading-snug">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span>{post.author}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
