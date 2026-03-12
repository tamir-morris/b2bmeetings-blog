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
    <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-light)] text-[var(--color-steel)]">
      {category.replace(/-/g, " ")}
    </span>
  );
}

export default function BlogHome({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const posts = getAllPosts();
  const categories = getAllCategories();

  // We need to handle async searchParams for Next.js 15
  // But for static generation, we'll show all posts and use client-side filtering
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-navy)] mb-3">
          Outbound Sales Insights
        </h1>
        <p className="text-lg text-[var(--color-steel)] max-w-2xl">
          Practical strategies for MSPs, IT service firms, and cybersecurity companies looking to
          grow through outbound sales and AI-powered lead generation.
        </p>
      </section>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/"
            className="text-sm px-3 py-1.5 rounded-full border border-[var(--color-navy)] text-[var(--color-navy)] font-medium no-underline hover:bg-[var(--color-navy)] hover:text-white transition"
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/?category=${cat}`}
              className="text-sm px-3 py-1.5 rounded-full border border-[var(--color-light)] text-[var(--color-steel)] no-underline hover:border-[var(--color-blue)] hover:text-[var(--color-blue)] transition"
            >
              {cat.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      )}

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-[var(--color-steel)]">
            First blog post coming soon. Stay tuned.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border border-[var(--color-light)] rounded-xl p-6 hover:border-[var(--color-blue)] transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <CategoryBadge category={post.category} />
                <span className="text-xs text-[var(--color-steel)]">{post.readingTime} min read</span>
              </div>
              <Link href={`/${post.slug}`} className="no-underline">
                <h2 className="text-xl font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition mb-2 leading-snug">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-[var(--color-steel)] mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs text-[var(--color-steel)]">
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span>{post.author}</span>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* CTA */}
      <section className="mt-16 bg-[var(--color-navy)] rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Ready to scale your outbound?
        </h2>
        <p className="text-[var(--color-steel)] mb-6 max-w-lg mx-auto">
          Get a free custom outbound prototype — target list, messaging, campaign architecture,
          and ROI projection built for your firm.
        </p>
        <a
          href="https://www.b2bmeetings.com"
          className="inline-block bg-[var(--color-blue)] text-white px-6 py-3 rounded-lg font-medium no-underline hover:opacity-90 transition"
        >
          Get Free Prototype
        </a>
      </section>
    </div>
  );
}
