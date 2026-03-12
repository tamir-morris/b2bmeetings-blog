import { getAllPosts, getAllCategories } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2Bmeetings Blog — Outbound Sales Insights for MSPs & IT Firms",
  description:
    "Expert articles on outbound sales, lead generation, cold email, and growth strategies for MSPs, IT service firms, and cybersecurity companies.",
  alternates: { canonical: "https://blog.b2bmeetings.com" },
};

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-cyan)]/10 text-[var(--color-cyan)]">
      {category.replace(/-/g, " ")}
    </span>
  );
}

export default function BlogHome() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
            className="text-sm px-3 py-1.5 rounded-full border border-[var(--color-cyan)] text-[var(--color-cyan)] font-medium no-underline hover:bg-[var(--color-cyan)] hover:text-[var(--color-bg)] transition"
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/?category=${cat}`}
              className="text-sm px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] no-underline hover:border-[var(--color-border-hover)] hover:text-[var(--color-cyan)] transition capitalize"
            >
              {cat.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      )}

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-[var(--color-text-muted)]">
            First blog post coming soon. Stay tuned.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-border-hover)] bg-[var(--color-bg-card)] transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <CategoryBadge category={post.category} />
                <span className="text-xs text-[var(--color-text-dim)]">{post.readingTime} min read</span>
              </div>
              <Link href={`/${post.slug}`} className="no-underline">
                <h2 className="text-lg font-bold text-white group-hover:text-[var(--color-cyan)] transition mb-2 leading-snug">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs text-[var(--color-text-dim)]">
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
