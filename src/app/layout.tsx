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
  openGraph: { type: "website", locale: "en_US", siteName: "B2Bmeetings Blog" },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

/* ─── Announcement Bar ─── */
function AnnouncementBar() {
  return (
    <div className="bg-[#0F1729] text-center py-2.5 px-4 text-sm">
      <span className="inline-flex items-center gap-2 text-white/90">
        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
        Q1 2026 — Only 2 of 3 Spots Remaining
        <span className="text-white/40 mx-1">—</span>
        <a href="https://www.b2bmeetings.com/free" className="text-[#00C2FF] hover:underline no-underline font-medium">
          Check Territory Availability &rarr;
        </a>
      </span>
    </div>
  );
}

/* ─── Header — white bg, dark text, matching b2bmeetings.com ─── */
function Header() {
  return (
    <>
      <AnnouncementBar />
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="https://www.b2bmeetings.com" className="flex items-center no-underline">
            <Image
              src="/images/brand/logo-secondary-dark.png"
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

          <nav className="flex items-center gap-7 text-sm">
            <a href="https://www.b2bmeetings.com/platform" className="hidden lg:inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 no-underline transition font-medium">
              Platform <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <a href="https://www.b2bmeetings.com/solutions" className="hidden lg:inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 no-underline transition font-medium">
              Solutions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <a href="https://www.b2bmeetings.com/pricing" className="hidden lg:block text-gray-600 hover:text-gray-900 no-underline transition font-medium">Pricing</a>
            <a href="https://www.b2bmeetings.com/case-studies" className="hidden md:block text-gray-600 hover:text-gray-900 no-underline transition font-medium">Case Studies</a>
            <a href="https://www.b2bmeetings.com/resources" className="hidden md:inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 no-underline transition font-medium">
              Resources <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <a href="https://www.b2bmeetings.com/about" className="hidden md:block text-gray-600 hover:text-gray-900 no-underline transition font-medium">About</a>
            <a
              href="https://www.b2bmeetings.com/free"
              className="bg-[#0F1729] hover:bg-[#1a2540] text-white px-5 py-2.5 rounded-full text-sm font-medium no-underline transition inline-flex items-center gap-2"
            >
              Get Free Prototype
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

/* ─── Footer — dark bg matching b2bmeetings.com ─── */
function Footer() {
  return (
    <footer className="bg-[#0A0F1A] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready for 15-20+ qualified meetings every month?
          </h3>
          <p className="text-white/50 mb-6 max-w-lg mx-auto">
            See your free pipeline prototype in 72 hours. No commitment.
          </p>
          <a
            href="https://www.b2bmeetings.com/free"
            className="inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-[#00A8E0] text-white px-6 py-3 rounded-lg font-medium no-underline transition"
          >
            Get Your Free Prototype
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* Link Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <a href="https://www.b2bmeetings.com" className="inline-block mb-4">
              <Image src="/images/brand/logo-secondary-light.png" alt="B2Bmeetings.com" width={160} height={32} />
            </a>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Your fractional sales team. 15-20+ qualified meetings per month for IT service companies.
            </p>
            <p className="text-xs text-white/30 mb-3">Stay in touch</p>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/b2bmeetings" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/30 hover:text-[#00C2FF] hover:border-[#00C2FF]/30 transition no-underline" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
              </a>
              <a href="https://twitter.com/b2bmeetings" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/30 hover:text-[#00C2FF] hover:border-[#00C2FF]/30 transition no-underline" aria-label="Twitter">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.youtube.com/@b2bmeetings" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/30 hover:text-[#00C2FF] hover:border-[#00C2FF]/30 transition no-underline" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/></svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm list-none p-0">
              <li><a href="https://www.b2bmeetings.com/platform" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Platform Overview</a></li>
              <li><a href="https://www.b2bmeetings.com/platform/ai-sdr" className="text-white/50 hover:text-[#00C2FF] no-underline transition">AI SDR</a></li>
              <li><a href="https://www.b2bmeetings.com/platform/list-building" className="text-white/50 hover:text-[#00C2FF] no-underline transition">List Building & Intent Data</a></li>
              <li><a href="https://www.b2bmeetings.com/platform/messaging" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Messaging & Copywriting</a></li>
              <li><a href="https://www.b2bmeetings.com/platform/email-infrastructure" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Email Infrastructure</a></li>
              <li><a href="https://www.b2bmeetings.com/platform/pre-call-nurturing" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Pre-Call Nurturing & CRM</a></li>
              <li><a href="https://www.b2bmeetings.com/platform/linkedin" className="text-white/50 hover:text-[#00C2FF] no-underline transition">LinkedIn Outbound</a></li>
              <li><a href="https://www.b2bmeetings.com/platform/crm" className="text-white/50 hover:text-[#00C2FF] no-underline transition">CRM Integration</a></li>
              <li><a href="https://www.b2bmeetings.com/platform/dashboard" className="text-white/50 hover:text-[#00C2FF] no-underline transition">KPI Dashboard</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm list-none p-0">
              <li><a href="https://www.b2bmeetings.com/about" className="text-white/50 hover:text-[#00C2FF] no-underline transition">About Us</a></li>
              <li><a href="https://www.b2bmeetings.com/case-studies" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Case Studies</a></li>
              <li><a href="https://www.b2bmeetings.com/pricing" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Pricing</a></li>
              <li><a href="https://www.b2bmeetings.com/roi-calculator" className="text-white/50 hover:text-[#00C2FF] no-underline transition">ROI Calculator</a></li>
              <li><a href="https://www.b2bmeetings.com/careers" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Careers</a></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Resources & Legal</h4>
            <ul className="space-y-2.5 text-sm list-none p-0">
              <li><a href="https://www.b2bmeetings.com/resources" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Resource Library</a></li>
              <li><a href="https://www.b2bmeetings.com/free" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Free Pipeline Prototype</a></li>
              <li><a href="/" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Blog</a></li>
              <li><a href="https://www.b2bmeetings.com/privacy" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Privacy Policy</a></li>
              <li><a href="https://www.b2bmeetings.com/terms" className="text-white/50 hover:text-[#00C2FF] no-underline transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-white/30 space-y-1">
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
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
