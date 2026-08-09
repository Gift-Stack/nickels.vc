import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-pure-white" role="main">
      <SiteNav />

      {/* Screen Reader Only Content */}
      <div className="sr-only">
        <h1>nickels.vc - Ultra-Early Stage Micro-Funding</h1>
        <p>
          nickels.vc is a small venture backing early-stage builders,
          communities and technology events in Nigeria with micro-funding,
          $0.05 at a time.
        </p>
      </div>

      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl w-full">
          <div className="mb-6 md:mb-8">
            <div className="inline-block px-4 py-2 border border-copper text-copper vc-body text-sm md:text-sm mb-6 md:mb-8">
              NOW ACCEPTING APPLICATIONS
            </div>
          </div>
          <h1 className="vc-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl mb-10 md:mb-14 text-pure-black leading-[1.1] tracking-tight break-words">
            We back <strong>founders</strong> who think big.
            <br />
            <span className="text-copper">Starting with a nickel.</span>
          </h1>
          <div className="max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="vc-body text-xl md:text-xl lg:text-2xl text-pure-black/70 leading-relaxed mb-6 md:mb-8 px-4">
              <strong>Ultra-early stage venture capital</strong> for visionary{" "}
              <strong>entrepreneurs</strong>. Our proprietary{" "}
              <em>micro-funding approach</em> delivers instant liquidity via{" "}
              <strong>Solana and Sui USDC</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8 text-pure-black/50">
              <div className="text-center">
                <div className="vc-numbers text-4xl md:text-4xl font-bold text-copper">
                  $0.05
                </div>
                <div className="vc-body text-base md:text-base">
                  Average Check
                </div>
              </div>
              <div className="text-center">
                <div className="vc-numbers text-4xl md:text-4xl font-bold text-pure-black">
                  None
                </div>
                <div className="vc-body text-base md:text-base">
                  Fund Structure
                </div>
              </div>
              <div className="text-center">
                <div className="vc-numbers text-4xl md:text-4xl font-bold text-pure-black">
                  0%
                </div>
                <div className="vc-body text-base md:text-base">
                  Equity Taken
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-6 px-4 mb-16 md:mb-24">
            <a
              href="https://forms.gle/SN8JYBCkSbBNh3qJA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center text-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-auto min-h-11 bg-pure-black hover:bg-copper text-white px-10 md:px-12 py-5 md:py-6 text-lg md:text-lg font-medium transition-all duration-300 rounded-none w-full sm:w-auto sm:flex-row sm:gap-1.5"
            >
              <span>Apply for Funding</span>
              <span>(Solana &amp; Sui USDC Only)</span>
            </a>
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background h-11 border-2 border-pure-black hover:bg-pure-black hover:text-white px-10 md:px-12 py-5 md:py-6 text-lg md:text-lg font-medium transition-all duration-300 rounded-none w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section
        id="thesis"
        className="py-20 md:py-40 px-4 border-t border-neutral-gray"
        aria-labelledby="investment-thesis-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2
              id="investment-thesis-heading"
              className="vc-headline text-5xl md:text-6xl lg:text-7xl text-pure-black mb-8 md:mb-10 leading-tight break-words"
            >
              Investment Thesis
            </h2>
            <p className="vc-body text-lg md:text-xl text-pure-black/70 max-w-3xl mx-auto px-4">
              We believe the future belongs to <strong>entrepreneurs</strong>{" "}
              who can do more with less. Our <em>micro-funding model</em>{" "}
              identifies and supports the most{" "}
              <strong>capital-efficient founders</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 border-2 border-pure-black flex items-center justify-center">
                <div className="vc-numbers text-xl md:text-2xl font-bold">
                  01
                </div>
              </div>
              <h3 className="vc-headline text-xl md:text-2xl mb-4 md:mb-6 text-pure-black">
                Micro-Capital Efficiency
              </h3>
              <p className="vc-body text-sm md:text-base text-pure-black/70 leading-relaxed px-2">
                We invest in <strong>founders</strong> who can bootstrap empires
                from nickels.
                <em>Capital constraints</em> breed <strong>innovation</strong>{" "}
                and resourcefulness.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 border-2 border-pure-black flex items-center justify-center">
                <div className="vc-numbers text-xl md:text-2xl font-bold">
                  02
                </div>
              </div>
              <h3 className="vc-headline text-xl md:text-2xl mb-4 md:mb-6 text-pure-black">
                Instant Deployment
              </h3>
              <p className="vc-body text-sm md:text-base text-pure-black/70 leading-relaxed px-2">
                Traditional <strong>VC</strong> moves slowly. We deploy capital
                in seconds via <strong>Solana and Sui USDC</strong>, not months.
                <em>Speed</em> is the ultimate competitive advantage.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 border-2 border-pure-black flex items-center justify-center">
                <div className="vc-numbers text-xl md:text-2xl font-bold">
                  03
                </div>
              </div>
              <h3 className="vc-headline text-xl md:text-2xl mb-4 md:mb-6 text-pure-black">
                Zero Dilution
              </h3>
              <p className="vc-body text-sm md:text-base text-pure-black/70 leading-relaxed px-2">
                Keep 100% of your company. Our <em>investment philosophy</em>{" "}
                prioritizes
                <strong> founder ownership</strong> and long-term value
                creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="py-20 md:py-40 px-4 border-t border-neutral-gray bg-neutral-gray/20"
        aria-labelledby="partners-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2
              id="partners-heading"
              className="vc-headline text-5xl md:text-6xl lg:text-7xl text-pure-black mb-8 md:mb-10 leading-tight break-words"
            >
              Partners
            </h2>
            <p className="vc-body text-lg md:text-xl text-pure-black/70 max-w-3xl mx-auto px-4">
              Nickels partners with Nigerian technology events and communities,
              and funds training for people entering the industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="text-card-foreground shadow-sm border-2 border-pure-black bg-pure-white rounded-none hover:bg-neutral-gray/10 transition-all duration-300 group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-copper text-pure-white text-xs font-medium">
                      EVENT PARTNER
                    </span>
                  </div>
                  <h3 className="vc-headline text-2xl mb-3 text-pure-black group-hover:text-copper transition-colors">
                    Techfiesta 2.0
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-card-foreground shadow-sm border-2 border-pure-black bg-pure-white rounded-none hover:bg-neutral-gray/10 transition-all duration-300 group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-copper text-pure-white text-xs font-medium">
                      EVENT PARTNER
                    </span>
                  </div>
                  <h3 className="vc-headline text-2xl mb-3 text-pure-black group-hover:text-copper transition-colors">
                    Suinami Lagos
                  </h3>
                  <div className="flex flex-col space-y-2 mt-auto">
                    <a
                      href="https://x.com/SuiNetworkNG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-body text-sm text-pure-black/60 hover:text-copper transition-colors"
                    >
                      @SuiNetworkNG
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-card-foreground shadow-sm border-2 border-pure-black bg-pure-white rounded-none hover:bg-neutral-gray/10 transition-all duration-300 group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-copper text-pure-white text-xs font-medium">
                      EVENT PARTNER
                    </span>
                  </div>
                  <h3 className="vc-headline text-2xl mb-3 text-pure-black group-hover:text-copper transition-colors">
                    Entrypoint Labs
                  </h3>
                  <div className="flex flex-col space-y-2 mt-auto">
                    <a
                      href="https://entrypointlabs.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-body text-sm text-pure-black/60 hover:text-copper transition-colors"
                    >
                      <span className="truncate">
                        https://entrypointlabs.xyz
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-card-foreground shadow-sm border-2 border-pure-black bg-pure-white rounded-none hover:bg-neutral-gray/10 transition-all duration-300 group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-copper text-pure-white text-xs font-medium">
                      EVENT PARTNER
                    </span>
                  </div>
                  <h3 className="vc-headline text-2xl mb-3 text-pure-black group-hover:text-copper transition-colors">
                    Xend Global
                  </h3>
                  <div className="flex flex-col space-y-2 mt-auto">
                    <a
                      href="https://xend.global"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-body text-sm text-pure-black/60 hover:text-copper transition-colors"
                    >
                      <span className="truncate">https://xend.global</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section
        id="team"
        className="py-20 md:py-40 px-4 border-t border-neutral-gray"
        aria-labelledby="team-heading"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-20">
            <h2
              id="team-heading"
              className="vc-headline text-5xl md:text-6xl lg:text-7xl text-pure-black mb-8 md:mb-10 leading-tight break-words"
            >
              Our Team
            </h2>
            <p className="vc-body text-lg md:text-xl text-pure-black/70 max-w-3xl mx-auto px-4">
              Led by a Managing Partner who believes in starting small and
              thinking big. Nickels backs technology projects, communities and
              individuals in Nigeria with micro-funding.
            </p>
          </div>
          <div className="grid justify-items-center grid-cols-1 gap-12 md:gap-16 max-w-4xl mx-auto rounded-none ">
            <a
              href="https://x.com/_0xgifted"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group cursor-pointer hover:opacity-80 transition-opacity duration-300 border border-transparent hover:border-copper p-6 md:p-8"
            >
              <h3 className="vc-headline text-2xl md:text-3xl mb-2 md:mb-3 text-pure-black">
                GiFTED!
              </h3>
              <p className="vc-body text-copper font-medium mb-2 text-base md:text-lg">
                Managing Partner
              </p>
              <p className="inline-block mb-4 md:mb-6 text-sm text-pure-black/60 group-hover:text-copper transition-colors">
                @_0xgifted
              </p>
              <p className="vc-body text-sm text-pure-black/70 mb-4 md:mb-6 leading-relaxed max-w-sm mx-auto px-2">
                Puts micro-funding into technology projects, communities and
                individuals in Nigeria. Partners with Nigerian tech events and
                funds training for people entering the industry. Unpaid.
              </p>
            </a>
            {/* <div className="text-center">
              <h3 className="vc-headline text-2xl md:text-3xl mb-2 md:mb-3 text-pure-black">
                coinflip
              </h3>
              <p className="vc-body text-copper font-medium mb-2 text-base md:text-lg">
                Investment Partner
              </p>
              <a
                href="https://x.com/coinflipvc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 md:mb-6 text-sm text-pure-black/60 hover:text-copper transition-colors"
              >
                @coinflipvc
              </a>
              <p className="vc-body text-sm text-pure-black/70 mb-4 md:mb-6 leading-relaxed max-w-sm mx-auto px-2">
                Specialized in pre-seed nano-rounds. Track record of 0.05x
                returns. Expert in ultra-early stage due diligence.
              </p>
              <div className="text-xs text-pure-black/50">
                <span className="vc-body">Notable Investments:</span>
                <div className="vc-numbers mt-1 md:mt-2">
                  $0.05, $0.05, $0.05
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Ready to Get Funded Section */}
      <section className="py-20 md:py-40 px-4 border-t border-neutral-gray bg-pure-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="vc-headline text-5xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-10 leading-tight break-words">
            Ready to Get Funded?
          </h2>
          <p className="vc-body text-lg md:text-xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Join the ranks of visionary entrepreneurs who started with a single
            nickel. Your empire begins here.
          </p>
          <a
            href="https://forms.gle/SN8JYBCkSbBNh3qJA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center justify-center text-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-auto min-h-11 bg-copper hover:bg-copper/90 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-medium transition-all duration-300 rounded-none w-full sm:w-auto max-w-sm sm:flex-row sm:gap-1.5"
          >
            <span>Submit Application</span>
            <span>(Solana &amp; Sui USDC Only)</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
