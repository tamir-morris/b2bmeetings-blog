import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://blog.b2bmeetings.com/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = await markdownToHtml(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author, url: "https://www.b2bmeetings.com" },
    publisher: { "@type": "Organization", name: "B2Bmeetings.com", url: "https://www.b2bmeetings.com" },
    mainEntityOfPage: `https://blog.b2bmeetings.com/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--color-text-dim)] mb-8">
          <Link href="/" className="hover:text-[var(--color-cyan)] no-underline transition">Blog</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{post.category.replace(/-/g, " ")}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-cyan)]/10 text-[var(--color-cyan)]">
              {post.category.replace(/-/g, " ")}
            </span>
            <span className="text-xs text-[var(--color-text-dim)]">{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--color-text-muted)]">{post.description}</p>
          <div className="flex items-center gap-4 mt-5 text-sm text-[var(--color-text-dim)]">
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>&middot;</span>
            <span>{post.author}</span>
          </div>
          <div className="h-px bg-[var(--color-border)] mt-8" />
        </header>

        {/* Content */}
        <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />

        {/* Inline CTA */}
        <section className="mt-14 border border-[var(--color-border)] rounded-2xl p-8 text-center bg-[var(--color-bg-card)]">
          <h2 className="text-xl font-bold text-white mb-2">
            Want results like these for your firm?
          </h2>
          <p className="text-[var(--color-text-muted)] mb-5 text-sm max-w-md mx-auto">
            Get a free custom outbound prototype — target list, messaging, campaign architecture, and ROI projection.
          </p>
          <a
            href="https://www.b2bmeetings.com/free"
            className="inline-flex items-center gap-2 bg-[var(--color-cyan)] hover:bg-[var(--color-cyan-hover)] text-[var(--color-bg)] px-5 py-2.5 rounded-lg font-medium text-sm no-underline transition"
          >
            Get Free Prototype
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </section>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/" className="text-[var(--color-cyan)] text-sm no-underline hover:underline transition">
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </>
  );
}
