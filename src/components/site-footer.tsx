export function SiteFooter() {
  return (
    <footer className="py-20 md:py-24 px-4 border-t border-neutral-gray">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <h3 className="vc-headline tracking-headline-sm leading-tight text-3xl text-pure-black mb-4">
            nickels.vc
          </h3>
          <p className="vc-body text-pure-black/60 max-w-2xl mx-auto">
            Ultra-early stage micro-funding. Backing ambition, one nickel at
            a time.
          </p>
        </div>
        <div className="border-t border-neutral-gray pt-8">
          <p className="vc-body text-sm text-pure-black/40 leading-relaxed">
            © {new Date().getFullYear()} nickels.vc. Past performance is not
            indicative of future nickels.
          </p>
        </div>
      </div>
    </footer>
  );
}
