import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About nickels.vc — Micro-Funding for Builders in Nigeria",
  description:
    "nickels.vc is a small, self-funded venture backing technology projects, communities and individuals in Nigeria with micro-funding. Run by Managing Partner GiFTED, unpaid. Learn what it does, why, and who's behind it.",
  keywords: [
    "nickels.vc",
    "GiFTED",
    "iamgifted.dev",
    "Nigeria tech funding",
    "micro-funding Nigeria",
    "Nigerian tech ecosystem",
    "Techfiesta",
    "Suinami Lagos",
    "Entrypoint Labs",
    "Xend Global",
    "Managing Partner",
  ],
  authors: [
    {
      name: "GiFTED",
      url: "https://iamgifted.dev",
    },
  ],
  creator: "GiFTED",
  openGraph: {
    type: "website",
    url: "https://nickels.vc/learn-more",
    title: "About nickels.vc — Micro-Funding for Builders in Nigeria",
    description:
      "A small, self-funded venture backing technology projects, communities and individuals in Nigeria with micro-funding. Learn what it does, why, and who's behind it.",
    siteName: "nickels.vc",
    images: [
      {
        url: "https://nickels.vc/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About nickels.vc",
    description:
      "A small, self-funded venture backing technology projects, communities and individuals in Nigeria with micro-funding.",
    images: "https://nickels.vc/og-image.png",
  },
  alternates: {
    canonical: "https://nickels.vc/learn-more",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nickels.vc/#organization",
      name: "nickels.vc",
      url: "https://nickels.vc",
      description:
        "A small, self-funded venture that puts micro-funding into technology projects, communities and individuals in Nigeria.",
      areaServed: {
        "@type": "Country",
        name: "Nigeria",
      },
      founder: {
        "@id": "https://iamgifted.dev/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://iamgifted.dev/#person",
      name: "GiFTED",
      alternateName: "Gift",
      url: "https://iamgifted.dev",
      jobTitle: "Managing Partner",
      sameAs: ["https://x.com/_0xgifted"],
      worksFor: {
        "@id": "https://nickels.vc/#organization",
      },
    },
  ],
};

const partners = [
  { name: "Techfiesta 2.0", href: null },
  { name: "Suinami Lagos", href: "https://x.com/SuiNetworkNG" },
  { name: "Entrypoint Labs", href: "https://entrypointlabs.xyz" },
  { name: "Xend Global", href: "https://xend.global" },
];

export default function LearnMorePage() {
  return (
    <main className="min-h-screen bg-pure-white" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      {/* Hero */}
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-neutral-gray">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-4 py-2 border border-copper text-copper vc-body text-sm mb-6 md:mb-8">
            THE STORY
          </div>
          <h1 className="vc-headline text-5xl sm:text-6xl md:text-7xl mb-8 md:mb-10 text-pure-black leading-tight tracking-tight break-words">
            What nickels.vc is,
            <br />
            <span className="text-copper">and why it exists.</span>
          </h1>
          <p className="vc-body text-lg md:text-xl text-pure-black/70 leading-relaxed max-w-2xl mx-auto">
            A small, self-funded venture through which{" "}
            <a
              href="https://iamgifted.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              GiFTED
            </a>{" "}
            puts micro-funding into technology projects, communities and
            individuals in Nigeria.
          </p>
        </div>
      </section>

      {/* What it does */}
      <section className="py-20 md:py-32 px-4 border-b border-neutral-gray">
        <div className="container mx-auto max-w-4xl">
          <h2 className="vc-headline text-4xl md:text-5xl mb-8 md:mb-10 text-pure-black leading-tight break-words">
            What nickels.vc does
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="border-2 border-pure-black p-6 md:p-8">
              <h3 className="vc-headline text-xl mb-3 text-pure-black">
                Micro-funding
              </h3>
              <p className="vc-body text-pure-black/70 leading-relaxed">
                Small, direct contributions to technology projects,
                communities and individuals building things worth building
                in Nigeria.
              </p>
            </div>
            <div className="border-2 border-pure-black p-6 md:p-8">
              <h3 className="vc-headline text-xl mb-3 text-pure-black">
                Event partnerships
              </h3>
              <p className="vc-body text-pure-black/70 leading-relaxed mb-4">
                Nickels partners with Nigerian technology events, including:
              </p>
              <ul className="vc-body text-pure-black/70 space-y-1">
                {partners.map((partner) => (
                  <li key={partner.name}>
                    {partner.href ? (
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-copper hover:underline"
                      >
                        {partner.name}
                      </a>
                    ) : (
                      partner.name
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-pure-black p-6 md:p-8">
              <h3 className="vc-headline text-xl mb-3 text-pure-black">
                Training
              </h3>
              <p className="vc-body text-pure-black/70 leading-relaxed">
                Funds training for people entering the tech industry in
                Nigeria — helping newcomers get a foothold, not just funding
                the founders who already have one.
              </p>
            </div>
            <div className="border-2 border-pure-black p-6 md:p-8">
              <h3 className="vc-headline text-xl mb-3 text-pure-black">
                Nigeria, entirely
              </h3>
              <p className="vc-body text-pure-black/70 leading-relaxed">
                Everything nickels.vc does happens in Nigeria. No fund, no
                LPs, no fees — and it pays GiFTED nothing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-32 px-4 border-b border-neutral-gray bg-neutral-gray/20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="vc-headline text-4xl md:text-5xl mb-8 text-pure-black leading-tight break-words">
            Why
          </h2>
          <p className="vc-body text-lg md:text-xl text-pure-black/70 leading-relaxed">
            Capital constraints breed resourcefulness. In an ecosystem where
            formal early-stage capital is scarce, small and consistent
            support — a nickel at a time — can matter more than a single
            large check that never comes. Nickels backs the people and
            communities doing the work anyway.
          </p>
        </div>
      </section>

      {/* About GiFTED */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="vc-headline text-4xl md:text-5xl mb-10 text-pure-black leading-tight break-words">
            About GiFTED!
          </h2>
          <div className="border-2 border-pure-black p-8 md:p-10 max-w-xl mx-auto">
            <h3 className="vc-headline text-2xl md:text-3xl mb-2 text-pure-black">
              GiFTED!
            </h3>
            <p className="vc-body text-copper font-medium mb-6">
              Managing Partner, nickels.vc
            </p>
            <p className="vc-body text-pure-black/70 leading-relaxed mb-6">
              Puts micro-funding into technology projects, communities and
              individuals in Nigeria. Partners with Nigerian tech events and
              funds training for people entering the industry. Based in
              Nigeria. Unpaid.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://iamgifted.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 bg-pure-black hover:bg-copper text-white px-8 text-base font-medium transition-all duration-300 rounded-none w-full sm:w-auto"
              >
                iamgifted.dev
              </a>
              <a
                href="https://x.com/_0xgifted"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 border-2 border-pure-black hover:bg-pure-black hover:text-white px-8 text-base font-medium transition-all duration-300 rounded-none w-full sm:w-auto"
              >
                @_0xgifted
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 border-t border-neutral-gray bg-pure-black">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="vc-headline text-4xl md:text-5xl text-white mb-6 leading-tight break-words">
            Ready to get funded?
          </h2>
          <p className="vc-body text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Building something worth a nickel? Apply below, or meet the
            events and communities nickels.vc already backs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.gle/SN8JYBCkSbBNh3qJA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 bg-copper hover:bg-copper/90 text-white px-8 text-base font-medium transition-all duration-300 rounded-none w-full sm:w-auto"
            >
              Apply for Funding
            </a>
            <Link
              href="/#partners"
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 border-2 border-white text-white hover:bg-white hover:text-pure-black px-8 text-base font-medium transition-all duration-300 rounded-none w-full sm:w-auto"
            >
              See Our Partners
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
