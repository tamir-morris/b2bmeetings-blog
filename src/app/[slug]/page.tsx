import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://blog.b2bmeetings.com/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date, authors: [post.author], tags: post.keywords },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = await markdownToHtml(post.content);

  // Enhanced JSON-LD: BlogPosting with Person author
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Tamir Morris",
      jobTitle: "CEO, B2Bmeetings.com",
      url: "https://www.linkedin.com/in/tamir-morris/",
    },
    publisher: {
      "@type": "Organization",
      name: "B2Bmeetings.com",
      url: "https://www.b2bmeetings.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.b2bmeetings.com/images/brand/logo-secondary-light.png",
      },
    },
    mainEntityOfPage: `https://blog.b2bmeetings.com/${post.slug}`,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };

  // BreadcrumbList schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: "https://blog.b2bmeetings.com" },
      { "@type": "ListItem", position: 2, name: post.category.replace(/-/g, " "), item: `https://blog.b2bmeetings.com?category=${post.category}` },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://blog.b2bmeetings.com/${post.slug}` },
    ],
  };

  // Conditional FAQPage schema
  const faqJsonLd = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-cyan)] no-underline transition">Blog</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{post.category.replace(/-/g, " ")}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-surface)] text-[var(--color-text-muted)] capitalize">
              {post.category.replace(/-/g, " ")}
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">{post.description}</p>
          <div className="flex items-center gap-4 mt-5 text-sm text-[var(--color-text-muted)]">
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>&middot;</span>
            <span>{post.author}</span>
          </div>
          <div className="h-px bg-[var(--color-border)] mt-8" />
        </header>

        {/* Content */}
        <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />

        {/* Inline CTA */}
        <section className="mt-14 bg-[var(--color-bg-dark)] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Want results like these for your firm?
          </h2>
          <p className="text-white/50 mb-5 text-sm max-w-md mx-auto">
            Get a free custom outbound prototype — target list, messaging, campaign architecture, and ROI projection.
          </p>
          <a
            href="https://www.b2bmeetings.com/free"
            className="inline-flex items-center gap-2 bg-[var(--color-cyan)] hover:bg-[var(--color-cyan-hover)] text-white px-5 py-2.5 rounded-lg font-medium text-sm no-underline transition"
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
