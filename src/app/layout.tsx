import type { Metadata } from "next";
import Image from "next/image";
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
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

function Header() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="https://www.b2bmeetings.com" className="flex items-center no-underline">
          <Image
            src="/images/brand/logo-secondary-light.png"
            alt="B2Bmeetings.com"
            width={180}
            height={36}
            className="hidden md:block"
            priority
          />
          <Image
            src="/images/brand/icon-light.png"
            alt="B2Bmeetings.com"
            width={32}
            height={32}
            className="block md:hidden"
            priority
          />
        </a>

        <nav className="flex items-center gap-6 text-sm">
          <a href="https://www.b2bmeetings.com/platform" className="hidden md:block text-[var(--color-text-muted)] hover:text-white no-underline transition">Platform</a>
          <a href="https://www.b2bmeetings.com/solutions" className="hidden md:block text-[var(--color-text-muted)] hover:text-white no-underline transition">Solutions</a>
          <a href="https://www.b2bmeetings.com/pricing" className="hidden md:block text-[var(--color-text-muted)] hover:text-white no-underline transition">Pricing</a>
          <a href="https://www.b2bmeetings.com/case-studies" className="hidden md:block text-[var(--color-text-muted)] hover:text-white no-underline transition">Case Studies</a>
          <a href="/" className="text-[var(--color-cyan)] hover:text-white no-underline transition font-medium">Blog</a>
          <a href="https://www.b2bmeetings.com/resources" className="hidden md:block text-[var(--color-text-muted)] hover:text-white no-underline transition">Resources</a>
          <a
            href="https://www.b2bmeetings.com/free"
            className="bg-[var(--color-cyan)] hover:bg-[var(--color-cyan-hover)] text-[var(--color-bg)] px-4 py-2 rounded-lg text-sm font-medium no-underline transition"
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
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      {/* CTA Banner */}
      <div className="border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready for 15-20+ qualified meetings every month?
          </h3>
          <p className="text-[var(--color-text-muted)] mb-6 max-w-lg mx-auto">
            See your free pipeline prototype in 72 hours. No commitment.
          </p>
          <a
            href="https://www.b2bmeetings.com/free"
            className="inline-flex items-center gap-2 bg-[var(--color-cyan)] hover:bg-[var(--color-cyan-hover)] text-[var(--color-bg)] px-6 py-3 rounded-lg font-medium no-underline transition"
          >
            Get Your Free Prototype
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="https://www.b2bmeetings.com">
              <Image
                src="/images/brand/logo-secondary-dark.png"
                alt="B2Bmeetings.com"
                width={160}
                height={32}
              />
            </a>
            <p className="text-sm text-[var(--color-text-muted)] mt-4 leading-relaxed">
              Your fractional sales team. AI-powered outbound for MSPs, IT service firms, and cybersecurity companies.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.linkedin.com/company/b2bmeetings" className="w-8 h-8 rounded border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] hover:border-[var(--color-border-hover)] transition no-underline" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
              </a>
              <a href="https://twitter.com/b2bmeetings" className="w-8 h-8 rounded border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] hover:border-[var(--color-border-hover)] transition no-underline" aria-label="Twitter">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.youtube.com/@b2bmeetings" className="w-8 h-8 rounded border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] hover:border-[var(--color-border-hover)] transition no-underline" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.b2bmeetings.com/platform" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">Platform Overview</a></li>
              <li><a href="https://www.b2bmeetings.com/platform/ai-sdr" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">AI SDR</a></li>
              <li><a href="https://www.b2bmeetings.com/pricing" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.b2bmeetings.com/about" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">About Us</a></li>
              <li><a href="https://www.b2bmeetings.com/case-studies" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">Case Studies</a></li>
              <li><a href="/" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Resources & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.b2bmeetings.com/resources" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">Resource Library</a></li>
              <li><a href="https://www.b2bmeetings.com/free" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">Free Pipeline Prototype</a></li>
              <li><a href="https://www.b2bmeetings.com/privacy" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">Privacy Policy</a></li>
              <li><a href="https://www.b2bmeetings.com/terms" className="text-[var(--color-text-muted)] hover:text-white no-underline transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-[var(--color-text-dim)] space-y-1">
          <p>&copy; {new Date().getFullYear()} Morris Enterprises Group Inc. d/b/a B2Bmeetings.com. All rights reserved.</p>
          <p>7901 4th St N, STE 300, St. Petersburg, FL | King George St 20, Jerusalem | Yigal Alon St 114, Tel Aviv-Yafo</p>
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
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
