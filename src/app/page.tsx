import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-pure-white" role="main">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-pure-white/95 backdrop-blur-sm border-b border-neutral-gray z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              className="vc-headline text-2xl text-pure-black hover:text-copper transition-colors"
              href="/"
            >
              nickels.vc
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                className="vc-body text-pure-black/70 hover:text-pure-black transition-colors"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="vc-body text-pure-black/70 hover:text-pure-black transition-colors"
                href="/portfolio"
              >
                Portfolio
              </Link>
              <a
                href="https://forms.gle/SN8JYBCkSbBNh3qJA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-pure-black hover:bg-copper text-white px-6 py-2 rounded-none"
              >
                Apply for Funding
              </a>
            </div>
            <button className="md:hidden w-6 h-6 flex flex-col justify-center items-center">
              <span className="w-full h-0.5 bg-pure-black mt-1 transition-all"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Screen Reader Only Content */}
      <div className="sr-only">
        <h1>nickels.vc - Leading Ultra-Early Stage Venture Capital Firm</h1>
        <p>
          Professional venture capital services specializing in
          micro-investments and ultra-early stage startup funding. We provide
          instant funding solutions with $0.05 average check size, zero equity
          requirements, and immediate Solana USDC deployment for entrepreneurs
          and innovative startups worldwide.
        </p>
      </div>

      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl">
          <div className="mb-6 md:mb-8">
            <div className="inline-block px-4 py-2 border border-copper text-copper vc-body text-sm md:text-sm mb-6 md:mb-8">
              NOW ACCEPTING APPLICATIONS
            </div>
          </div>
          <h1 className="vc-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl mb-10 md:mb-14 text-pure-black leading-[1.1] tracking-tight">
            We back <strong>founders</strong> who think big.
            <br />
            <span className="text-copper">Starting with a nickel.</span>
          </h1>
          <div className="max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="vc-body text-xl md:text-xl lg:text-2xl text-pure-black/70 leading-relaxed mb-6 md:mb-8 px-4">
              <strong>Ultra-early stage venture capital</strong> for visionary{" "}
              <strong>entrepreneurs</strong>. Our proprietary{" "}
              <em>micro-funding approach</em> delivers instant liquidity via{" "}
              <strong>Solana USDC</strong>.
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
                  ∞
                </div>
                <div className="vc-body text-base md:text-base">
                  Portfolio Companies
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
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-pure-black hover:bg-copper text-white px-10 md:px-12 py-5 md:py-6 text-lg md:text-lg font-medium transition-all duration-300 rounded-none w-full sm:w-auto"
            >
              Apply for Funding (Solana USDC Only)
            </a>
            <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background h-11 border-2 border-pure-black hover:bg-pure-black hover:text-white px-10 md:px-12 py-5 md:py-6 text-lg md:text-lg font-medium transition-all duration-300 rounded-none w-full sm:w-auto">
              Learn More
            </button>
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
              className="vc-headline text-5xl md:text-6xl lg:text-7xl text-pure-black mb-8 md:mb-10 leading-tight"
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
                in seconds via <strong>Solana USDC</strong>, not months.
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

      {/* Portfolio Companies Section */}
      <section
        id="portfolio"
        className="py-20 md:py-40 px-4 border-t border-neutral-gray bg-neutral-gray/20"
        aria-labelledby="portfolio-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <h2
              id="portfolio-heading"
              className="vc-headline text-5xl md:text-6xl lg:text-7xl text-pure-black mb-8 md:mb-10 leading-tight"
            >
              Portfolio Companies
            </h2>
            <p className="vc-body text-lg md:text-xl text-pure-black/70 max-w-3xl mx-auto px-4">
              Meet some of the innovative founders we've backed. Each project
              funded with <strong>$0.05</strong> to kickstart their vision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="text-card-foreground shadow-sm border-2 border-pure-black bg-pure-white rounded-none hover:bg-neutral-gray/10 transition-all duration-300 group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-copper text-pure-white text-xs font-medium">
                      FUNDED $0.05
                    </span>
                  </div>
                  <h3 className="vc-headline text-2xl mb-3 text-pure-black group-hover:text-copper transition-colors">
                    quicknote.ai
                  </h3>
                  <div className="flex flex-col space-y-2 mt-auto">
                    <a
                      href="https://quicknote.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-body text-sm text-pure-black/60 hover:text-copper transition-colors"
                    >
                      <span className="truncate">https://quicknote.ai</span>
                    </a>
                    <a
                      href="https://x.com/quicknoteai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-body text-sm text-pure-black/60 hover:text-copper transition-colors"
                    >
                      @quicknoteai
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
                      FUNDED $0.05
                    </span>
                  </div>
                  <h3 className="vc-headline text-2xl mb-3 text-pure-black group-hover:text-copper transition-colors">
                    FlowState
                  </h3>
                  <div className="flex flex-col space-y-2 mt-auto">
                    <a
                      href="https://flowstate.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-body text-sm text-pure-black/60 hover:text-copper transition-colors"
                    >
                      <span className="truncate">https://flowstate.dev</span>
                    </a>
                    <a
                      href="https://x.com/flowstatedev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-body text-sm text-pure-black/60 hover:text-copper transition-colors"
                    >
                      @flowstatedev
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
                      FUNDED $0.05
                    </span>
                  </div>
                  <h3 className="vc-headline text-2xl mb-3 text-pure-black group-hover:text-copper transition-colors">
                    microlaunch
                  </h3>
                  <div className="flex flex-col space-y-2 mt-auto">
                    <a
                      href="https://microlaunch.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-body text-sm text-pure-black/60 hover:text-copper transition-colors"
                    >
                      <span className="truncate">https://microlaunch.co</span>
                    </a>
                    <a
                      href="https://x.com/microlaunchco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vc-body text-sm text-pure-black/60 hover:text-copper transition-colors"
                    >
                      @microlaunchco
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background h-11 border-2 border-pure-black hover:bg-pure-black hover:text-white px-10 py-6 text-lg font-medium transition-all duration-300 rounded-none"
            >
              View All Portfolio Companies →
            </Link>
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
              className="vc-headline text-5xl md:text-6xl lg:text-7xl text-pure-black mb-8 md:mb-10 leading-tight"
            >
              Our Team
            </h2>
            <p className="vc-body text-lg md:text-xl text-pure-black/70 max-w-3xl mx-auto px-4">
              Led by experienced investors who understand the power of starting
              small and thinking big. We bring decades of micro-investment
              expertise.
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
                18 years in micro-investments. Deployed over $237.35 in career.
                Pioneer of the nickel-scale investment thesis.
              </p>
              <div className="text-xs text-pure-black/50">
                <span className="vc-body">Notable Investments:</span>
                <div className="vc-numbers mt-1 md:mt-2">
                  $0.05, $0.05, $0.05
                </div>
              </div>
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
          <h2 className="vc-headline text-5xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-10 leading-tight">
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
            className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-copper hover:bg-copper/90 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-medium transition-all duration-300 rounded-none w-full sm:w-auto max-w-sm"
          >
            Submit Application (Solana USDC Only)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 md:py-24 px-4 border-t border-neutral-gray">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h3 className="vc-headline text-3xl text-pure-black mb-4">
              nickels.vc
            </h3>
            <p className="vc-body text-pure-black/60 max-w-2xl mx-auto">
              Ultra-early stage venture capital. Backing ambition, one nickel at
              a time.
            </p>
          </div>
          <div className="border-t border-neutral-gray pt-8">
            <p className="vc-body text-sm text-pure-black/40 leading-relaxed">
              © 2025 nickels.vc. Past performance is not indicative of future
              nickels.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
