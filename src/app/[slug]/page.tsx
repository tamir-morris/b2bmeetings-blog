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

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author, url: "https://www.b2bmeetings.com" },
    publisher: {
      "@type": "Organization",
      name: "B2Bmeetings.com",
      url: "https://www.b2bmeetings.com",
    },
    mainEntityOfPage: `https://blog.b2bmeetings.com/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--color-steel)] mb-8">
          <Link href="/" className="hover:text-[var(--color-blue)] no-underline">Blog</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{post.category.replace(/-/g, " ")}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-light)] text-[var(--color-steel)]">
              {post.category.replace(/-/g, " ")}
            </span>
            <span className="text-xs text-[var(--color-steel)]">{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--color-steel)]">{post.description}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-[var(--color-steel)]">
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>&middot;</span>
            <span>{post.author}</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />

        {/* CTA */}
        <section className="mt-14 bg-[var(--color-navy)] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Want results like these for your firm?
          </h2>
          <p className="text-[var(--color-steel)] mb-5 text-sm max-w-md mx-auto">
            Get a free custom outbound prototype — target list, messaging, campaign architecture, and ROI projection.
          </p>
          <a
            href="https://www.b2bmeetings.com"
            className="inline-block bg-[var(--color-blue)] text-white px-5 py-2.5 rounded-lg font-medium text-sm no-underline hover:opacity-90 transition"
          >
            Get Free Prototype
          </a>
        </section>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/" className="text-[var(--color-blue)] text-sm no-underline hover:underline">
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </>
  );
}
