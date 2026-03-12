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
  openGraph: { type: "website", locale: "en_US", siteName: "B2Bmeetings Blog" },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

/* ─── Announcement Bar — exact copy from b2bmeetings.com source ─── */
function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-[#1A2B4A] text-white py-2.5 px-4 text-center text-sm font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF7F] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF7F]" />
        </span>
        <span className="hidden sm:inline">
          Q1 2026 — Only <span className="text-[#00FF7F] font-bold">2</span> of 3 Spots Remaining
        </span>
        <span className="sm:hidden">
          Only <span className="text-[#00FF7F] font-bold">2</span> spots left
        </span>
        <span className="mx-1.5 text-white/30 hidden sm:inline">—</span>
        <a
          className="hidden sm:inline-flex items-center gap-1 text-[#00C2FF] hover:text-white font-semibold transition-colors no-underline"
          href="https://www.b2bmeetings.com/free"
        >
          Check Territory Availability
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  );
}

/* Chevron icon matching main site */
function ChevronDown({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${className}`} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
  );
}

/* Arrow right icon matching main site */
function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
  );
}

/* ─── Header — exact copy from b2bmeetings.com source ─── */
function Header() {
  return (
    <>
      <AnnouncementBar />
      <nav className="sticky top-0 z-40 transition-all duration-300 bg-white border-b border-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a className="flex items-center shrink-0 no-underline" href="https://www.b2bmeetings.com">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/brand/logo-secondary-light.png" alt="B2Bmeetings.com" className="h-8 w-auto hidden sm:block" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/brand/icon-light.png" alt="B2Bmeetings.com" className="h-8 w-auto sm:hidden" />
            </a>

            {/* Desktop Nav — exact classes from source */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="https://www.b2bmeetings.com/platform" className="flex items-center gap-1 text-sm font-medium text-[#4A5568] hover:text-[#1A2B4A] transition-colors py-2 no-underline">
                Platform <ChevronDown />
              </a>
              <a href="https://www.b2bmeetings.com/solutions" className="flex items-center gap-1 text-sm font-medium text-[#4A5568] hover:text-[#1A2B4A] transition-colors py-2 no-underline">
                Solutions <ChevronDown />
              </a>
              <a className="text-sm font-medium text-[#4A5568] hover:text-[#1A2B4A] transition-colors no-underline" href="https://www.b2bmeetings.com/pricing">Pricing</a>
              <a className="text-sm font-medium text-[#4A5568] hover:text-[#1A2B4A] transition-colors no-underline" href="https://www.b2bmeetings.com/case-studies">Case Studies</a>
              <a href="https://www.b2bmeetings.com/resources" className="flex items-center gap-1 text-sm font-medium text-[#4A5568] hover:text-[#1A2B4A] transition-colors py-2 no-underline">
                Resources <ChevronDown className="h-3 w-3" />
              </a>
              <a className="text-sm font-medium text-[#4A5568] hover:text-[#1A2B4A] transition-colors no-underline" href="https://www.b2bmeetings.com/about">About</a>
            </div>

            {/* CTA Button — exact classes from source */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-[#00A8E0] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md no-underline"
                href="https://www.b2bmeetings.com/free"
              >
                Get Free Prototype
                <ArrowRight />
              </a>
            </div>

            {/* Mobile menu button */}
            <a href="https://www.b2bmeetings.com" className="lg:hidden text-[#1A2B4A] p-2 no-underline" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

/* ─── Footer — exact copy from b2bmeetings.com source ─── */
function Footer() {
  return (
    <footer className="relative bg-[#0A0F1A] text-white overflow-hidden">
      {/* CTA Banner — exact layout: flex row on desktop, left-aligned text + right CTA */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Ready for 15-20+ qualified meetings every month?</h3>
            <p className="text-white/50 text-sm mt-1">See your free pipeline prototype in 72 hours. No commitment.</p>
          </div>
          <a
            className="inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-[#00A8E0] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg whitespace-nowrap no-underline"
            href="https://www.b2bmeetings.com/free"
          >
            Get Your Free Prototype
            <ArrowRight />
          </a>
        </div>
      </div>

      {/* Link Columns — exact structure from source */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <a className="inline-block mb-4" href="https://www.b2bmeetings.com">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/brand/logo-secondary-dark.png" alt="B2Bmeetings.com" className="h-7 w-auto" />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Your fractional sales team. 15-20+ qualified meetings per month for IT service companies.
            </p>
            <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Stay in touch</p>
            <div className="flex items-center gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-[#00C2FF] hover:border-[#00C2FF]/30 transition-colors no-underline" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-[#00C2FF] hover:border-[#00C2FF]/30 transition-colors no-underline" aria-label="X / Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-[#00C2FF] hover:border-[#00C2FF]/30 transition-colors no-underline" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Platform</h4>
            <ul className="space-y-2.5 list-none p-0">
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/platform">Platform Overview</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/platform/ai-sdr">AI SDR</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/platform/list-building">List Building &amp; Intent Data</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/platform/messaging">Messaging &amp; Copywriting</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/platform/email-infrastructure">Email Infrastructure</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/platform/pre-call-nurturing">Pre-Call Nurturing &amp; CRM</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/platform/linkedin-outbound">LinkedIn Outbound</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/platform/integrations">CRM Integration</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/platform/dashboard">KPI Dashboard</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 list-none p-0">
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/about">About Us</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/case-studies">Case Studies</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/pricing">Pricing</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/resources/outbound-roi-calculator">ROI Calculator</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/about#careers">Careers</a></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Resources &amp; Legal</h4>
            <ul className="space-y-2.5 list-none p-0">
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/resources">Resource Library</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/free">Free Pipeline Prototype</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="/">Blog</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/privacy">Privacy Policy</a></li>
              <li><a className="text-sm text-white/50 hover:text-[#00C2FF] transition-colors no-underline" href="https://www.b2bmeetings.com/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar — exact layout from source */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; 2026 Morris Enterprises Group Inc. d/b/a B2Bmeetings.com | All Rights Reserved</p>
          <div className="text-xs text-white/30 flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
            <span>7901 4th St N, STE 300, St. Petersburg, FL</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span>King George St 20, Jerusalem</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span>Yigal Alon St 114, Tel Aviv-Yafo</span>
          </div>
        </div>
      </div>

      {/* Watermark text — exact from source */}
      <div className="absolute bottom-0 left-0 right-0 z-0 flex items-end justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span
          className="font-sans font-bold text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] leading-none whitespace-nowrap"
          style={{
            background: "linear-gradient(180deg, rgba(0,194,255,0.12) 0%, rgba(0,194,255,0.03) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transform: "translateY(30%)",
          }}
        >
          B2Bmeetings
        </span>
      </div>
      <div className="h-16 sm:h-20 md:h-24 relative z-0" />
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "B2Bmeetings.com",
    url: "https://www.b2bmeetings.com",
    logo: "https://www.b2bmeetings.com/images/brand/logo-secondary-light.png",
    description: "B2B appointment setting and outbound sales agency for MSPs, IT service firms, and cybersecurity companies.",
    founder: {
      "@type": "Person",
      name: "Tamir Morris",
      jobTitle: "CEO",
      url: "https://www.linkedin.com/in/tamir-morris/",
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "7901 4th St N, STE 300",
        addressLocality: "St. Petersburg",
        addressRegion: "FL",
        postalCode: "33702",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "King George St 20",
        addressLocality: "Jerusalem",
        addressCountry: "IL",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/b2bmeetings",
      "https://twitter.com/b2bmeetings",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-941-229-5983",
      contactType: "sales",
    },
  };

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
