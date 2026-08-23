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
      sameAs: ["https://x.com/gifted_oc"],
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

const facts = [
  { label: "Based in", value: "Nigeria" },
  { label: "Structure", value: "None — no fund, no LPs" },
  { label: "Equity taken", value: "0%" },
  { label: "Pay to GiFTED", value: "$0.00" },
];

const whatItDoes = [
  {
    label: "Micro-funding",
    body: "Small, direct contributions to technology projects, communities and individuals building things worth building in Nigeria.",
  },
  {
    label: "Event partnerships",
    body: "partners",
  },
  {
    label: "Training",
    body: "Funds training for people entering the tech industry in Nigeria — helping newcomers get a foothold, not just funding the founders who already have one.",
  },
  {
    label: "Nigeria, entirely",
    body: "Everything nickels.vc does happens in Nigeria. No fund, no LPs, no fees.",
  },
];

export default function LearnMorePage() {
  return (
    <main className="min-h-screen bg-pure-white" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      {/* Hero: asymmetric two-column, receipt-style fact card */}
      <section className="px-6 pt-28 pb-16 md:pt-36 md:pb-24 border-b border-neutral-gray">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="inline-block px-4 py-2 border border-copper text-copper vc-body text-sm mb-6 md:mb-8">
              THE STORY
            </div>
            <h1 className="vc-headline text-4xl sm:text-5xl md:text-6xl mb-6 md:mb-8 text-pure-black leading-[1.1] tracking-tight break-words">
              What nickels.vc is,
              <br />
              <span className="text-copper">and why it exists.</span>
            </h1>
            <p className="vc-body text-lg md:text-xl text-pure-black/70 leading-relaxed">
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
          <div className="lg:col-span-2">
            <div className="border-2 border-pure-black">
              <div className="border-b-2 border-pure-black px-6 py-4">
                <span className="vc-headline text-sm tracking-wide">
                  NICKELS.VC — AT A GLANCE
                </span>
              </div>
              <dl className="px-6 py-2">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 py-4 border-b border-dashed border-neutral-gray last:border-b-0"
                  >
                    <dt className="vc-body text-sm text-pure-black/60 uppercase tracking-wide">
                      {fact.label}
                    </dt>
                    <dd className="vc-numbers text-lg text-pure-black text-right">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* What it does: spec-sheet list, not a card grid */}
      <section className="py-20 md:py-28 px-6 border-b border-neutral-gray">
        <div className="container mx-auto max-w-4xl">
          <h2 className="vc-headline leading-tight text-3xl md:text-4xl mb-10 md:mb-14 text-pure-black break-words">
            What nickels.vc does
          </h2>
          <div className="divide-y divide-neutral-gray border-t border-b border-neutral-gray">
            {whatItDoes.map((item) => (
              <div
                key={item.label}
                className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-8"
              >
                <h3 className="vc-headline tracking-headline-sm leading-tight text-lg text-pure-black">
                  {item.label}
                </h3>
                {item.body === "partners" ? (
                  <p className="vc-body text-pure-black/70 leading-relaxed">
                    Nickels partners with Nigerian technology events,
                    including{" "}
                    {partners.map((partner, i) => (
                      <span key={partner.name}>
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
                        {i < partners.length - 2
                          ? ", "
                          : i === partners.length - 2
                            ? " and "
                            : "."}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="vc-body text-pure-black/70 leading-relaxed">
                    {item.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why: pull quote */}
      <section className="py-20 md:py-28 px-6 border-b border-neutral-gray">
        <div className="container mx-auto max-w-3xl">
          <span className="vc-body text-sm text-copper uppercase tracking-wide">
            Why
          </span>
          <blockquote className="border-l-4 border-copper pl-6 md:pl-10 mt-4">
            <p className="vc-headline tracking-headline-sm text-2xl md:text-3xl text-pure-black leading-snug break-words">
              Capital constraints breed resourcefulness.
            </p>
            <p className="vc-body text-lg text-pure-black/70 leading-relaxed mt-4">
              In an ecosystem where formal early-stage capital is scarce,
              small and consistent support — a nickel at a time — can matter
              more than a single large check that never comes. Nickels backs
              the people and communities doing the work anyway.
            </p>
          </blockquote>
        </div>
      </section>

      {/* About GiFTED: sidebar bio, not a centered card */}
      <section className="py-20 md:py-28 px-6 border-b border-neutral-gray">
        <div className="container mx-auto max-w-4xl grid md:grid-cols-[220px_1fr] gap-8 md:gap-12">
          <div>
            <span className="vc-body text-sm text-copper uppercase tracking-wide">
              Who's behind it
            </span>
            <h2 className="vc-headline text-3xl md:text-4xl mt-2 text-pure-black leading-tight break-words">
              GiFTED!
            </h2>
            <p className="vc-body text-pure-black/60 mt-1">
              Managing Partner
            </p>
          </div>
          <div>
            <p className="vc-body text-lg text-pure-black/70 leading-relaxed mb-6">
              Puts micro-funding into technology projects, communities and
              individuals in Nigeria. Partners with Nigerian tech events and
              funds training for people entering the industry. Based in
              Nigeria. Unpaid.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://iamgifted.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 bg-pure-black hover:bg-copper text-white px-8 text-base font-medium rounded-none"
              >
                iamgifted.dev
              </a>
              <a
                href="https://x.com/gifted_oc"
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 border-2 border-pure-black hover:bg-pure-black hover:text-white px-8 text-base font-medium rounded-none"
              >
                @gifted_oc
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 bg-pure-black">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="vc-headline text-3xl md:text-4xl text-white mb-3 leading-tight break-words">
              Ready to get funded?
            </h2>
            <p className="vc-body text-white/70 max-w-md">
              Building something worth a nickel? Apply below, or meet the
              events nickels.vc already backs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="https://forms.gle/SN8JYBCkSbBNh3qJA"
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 bg-copper hover:bg-copper/90 text-white px-8 text-base font-medium rounded-none w-full sm:w-auto"
            >
              Apply for Funding
            </a>
            <Link
              href="/#partners"
              className="press inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 border-2 border-white text-white hover:bg-white hover:text-pure-black px-8 text-base font-medium rounded-none w-full sm:w-auto"
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
