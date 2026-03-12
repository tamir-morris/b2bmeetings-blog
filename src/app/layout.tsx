import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.b2bmeetings.com"),
  title: {
    default: "B2Bmeetings Blog — Outbound Sales Insights for MSPs & IT Firms",
    template: "%s | B2Bmeetings Blog",
  },
  description:
    "Expert insights on outbound sales, lead generation, and growth strategies for MSPs, IT service firms, and cybersecurity companies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "B2Bmeetings Blog",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

function Header() {
  return (
    <header className="border-b border-[var(--color-light)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="https://www.b2bmeetings.com" className="flex items-center gap-2 no-underline">
          <span className="text-xl font-bold text-[var(--color-navy)]">B2Bmeetings</span>
          <span className="text-sm font-light text-[var(--color-steel)]">/ Blog</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className="text-[var(--color-navy)] hover:text-[var(--color-blue)] no-underline">All Posts</a>
          <a href="https://www.b2bmeetings.com/resources" className="text-[var(--color-navy)] hover:text-[var(--color-blue)] no-underline">Resources</a>
          <a
            href="https://www.b2bmeetings.com"
            className="bg-[var(--color-blue)] text-white px-4 py-2 rounded-lg text-sm font-medium no-underline hover:opacity-90 transition"
          >
            Get Free Prototype
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-light)] mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-[var(--color-navy)] mb-2">B2Bmeetings.com</p>
            <p className="text-sm text-[var(--color-steel)]">
              AI-powered outbound sales for MSPs, IT service firms, and cybersecurity companies.
            </p>
          </div>
          <div>
            <p className="font-bold text-[var(--color-navy)] mb-2">Resources</p>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="text-[var(--color-steel)] hover:text-[var(--color-blue)] no-underline">Blog</a></li>
              <li><a href="https://www.b2bmeetings.com/resources" className="text-[var(--color-steel)] hover:text-[var(--color-blue)] no-underline">Tools & Guides</a></li>
              <li><a href="https://www.b2bmeetings.com/case-studies" className="text-[var(--color-steel)] hover:text-[var(--color-blue)] no-underline">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[var(--color-navy)] mb-2">Company</p>
            <ul className="space-y-1 text-sm">
              <li><a href="https://www.b2bmeetings.com" className="text-[var(--color-steel)] hover:text-[var(--color-blue)] no-underline">Home</a></li>
              <li><a href="https://www.b2bmeetings.com/pricing" className="text-[var(--color-steel)] hover:text-[var(--color-blue)] no-underline">Pricing</a></li>
              <li><a href="https://www.linkedin.com/company/b2bmeetings" className="text-[var(--color-steel)] hover:text-[var(--color-blue)] no-underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--color-light)] text-center text-sm text-[var(--color-steel)]">
          &copy; {new Date().getFullYear()} B2Bmeetings.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
