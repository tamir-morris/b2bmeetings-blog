import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">404</h1>
      <p className="text-lg text-[var(--color-text-muted)] mb-6">This post doesn&apos;t exist.</p>
      <Link
        href="/"
        className="inline-block bg-[var(--color-cyan)] hover:bg-[var(--color-cyan-hover)] text-[var(--color-bg)] px-5 py-2.5 rounded-lg font-medium text-sm no-underline transition"
      >
        Back to Blog
      </Link>
    </div>
  );
}
