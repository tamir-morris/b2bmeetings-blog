import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-[var(--color-navy)] mb-4">404</h1>
      <p className="text-lg text-[var(--color-steel)] mb-6">This post doesn&apos;t exist.</p>
      <Link
        href="/"
        className="inline-block bg-[var(--color-blue)] text-white px-5 py-2.5 rounded-lg font-medium text-sm no-underline hover:opacity-90 transition"
      >
        Back to Blog
      </Link>
    </div>
  );
}
