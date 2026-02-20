import Link from "next/link";
import Image from "next/image";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCya71klgUfAjW_eksvfI65U-NYHVe9y65fDjoejfIJKeKwofpDyKBV0cWvEiv7q-_-TyHApuxPp42MhmGsxAEO8ox0_wiPtFVVnLFGrhtLS9t_u8EPP5ZE7MvYn6h9LzMZgN_czu8dnWxiqa4ZR-5cw_KZgYpqm0VOU1S7pf9eZwrv4cumaPFGNSepaU7K3jwgh47CE26BZFOU76CJ2Z8i1Pnki6hcLq08C_7Dj7ulpIvcNiM5FRL-BG6PexGMWqOuqmzl9VHyMmo";
const MENTORSHIP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCya71klgUfAjW_eksvfI65U-NYHVe9y65fDjoejfIJKeKwofpDyKBV0cWvEiv7q-_-TyHApuxPp42MhmGsxAEO8ox0_wiPtFVVnLFGrhtLS9t_u8EPP5ZE7MvYn6h9LzMZgN_czu8dnWxiqa4ZR-5cw_KZgYpqm0VOU1S7pf9eZwrv4cumaPFGNSepaU7K3jwgh47CE26BZFOU76CJ2Z8i1Pnki6hcLq08C_7Dj7ulpIvcNiM5FRL-BG6PexGMWqOuqmzl9VHyMmo";

export default function HomePage() {
  return (
    <>
      <header className="relative min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 py-20 z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-mahogany" />
              <span className="text-brand-mahogany text-[10px] font-semibold uppercase tracking-[0.4em]">
                Real Estate Advisor
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-normal leading-tight mb-8 editorial-spacing">
              Build Your <br />
              <span className="italic text-brand-mahogany">Legacy Empire.</span>
            </h1>
            <p className="text-lg text-brand-muted mb-12 max-w-md leading-relaxed font-light">
              Implementing institutional-grade frameworks for high-net-worth
              real estate portfolios. Professional guidance for sophisticated
              investors who demand precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="bg-brand-mahogany text-white px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-brand-mahogany-light transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-mahogany/10"
              >
                Inquire Now
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/#strategies"
                className="text-brand-black px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] border border-gray-200 hover:border-brand-mahogany hover:text-brand-mahogany transition-all text-center"
              >
                The Strategy
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative flex justify-end">
            <div className="relative w-full aspect-[4/5] max-w-md lg:max-w-full">
              <Image
                alt="Steven D. Park Portrait"
                className="w-full h-full object-cover shadow-2xl"
                src='/steven.jpg'
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full border-2 border-brand-mahogany/5" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-mahogany/5 backdrop-blur-sm -z-10" />
            </div>
          </div>
        </div>
      </header>

      <section
        className="py-32 bg-brand-white border-y border-gray-100"
        id="strategies"
        aria-labelledby="strategies-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="accent-heading">Sophisticated Portfolio</span>
              <h2
                id="strategies-heading"
                className="section-header font-display"
              >
                Investment <span className="italic text-brand-mahogany">Strategies</span>
              </h2>
              <p className="text-lg text-brand-muted max-w-lg font-light leading-relaxed">
                We utilize proprietary data and institutional risk management to
                engineer sustainable growth and capital preservation.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-16">
            <article className="group">
              <div className="text-[11px] font-bold text-brand-mahogany mb-8 tracking-[0.3em]">
                01
              </div>
              <h3 className="text-xl font-display mb-6 border-l-2 border-brand-mahogany/20 pl-6 group-hover:border-brand-mahogany transition-colors">
                Multifamily Syndication
              </h3>
              <p className="text-brand-muted font-light leading-relaxed text-sm pl-6">
                Scaling into large-scale apartment complexes for consistent cash
                flow and significant tax advantages.
              </p>
            </article>
            <article className="group">
              <div className="text-[11px] font-bold text-brand-mahogany mb-8 tracking-[0.3em]">
                02
              </div>
              <h3 className="text-xl font-display mb-6 border-l-2 border-brand-mahogany/20 pl-6 group-hover:border-brand-mahogany transition-colors">
                Strategic Acquisitions
              </h3>
              <p className="text-brand-muted font-light leading-relaxed text-sm pl-6">
                Bypassing traditional brokerage channels to secure off-market
                equity and clinical negotiation outcomes.
              </p>
            </article>
            <article className="group">
              <div className="text-[11px] font-bold text-brand-mahogany mb-8 tracking-[0.3em]">
                03
              </div>
              <h3 className="text-xl font-display mb-6 border-l-2 border-brand-mahogany/20 pl-6 group-hover:border-brand-mahogany transition-colors">
                Capital Allocation
              </h3>
              <p className="text-brand-muted font-light leading-relaxed text-sm pl-6">
                Sophisticated blueprints for private equity raising and
                structural portfolio optimization.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="py-32 bg-brand-gray"
        id="mentorship"
        aria-labelledby="mentorship-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square bg-white shadow-xl overflow-hidden p-6">
                <Image
                  alt="Mentorship Focus"
                  className="w-full h-full object-cover"
                  src={MENTORSHIP_IMAGE}
                  width={600}
                  height={600}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="accent-heading">Private Advisory</span>
              <h2
                id="mentorship-heading"
                className="section-header font-display"
              >
                The <span className="italic text-brand-mahogany">Institutional</span> Circle
              </h2>
              <div className="space-y-6 text-brand-muted font-light leading-relaxed mb-12">
                <p>
                  My mentorship is a refined execution plan tested across various
                  market cycles. It is designed specifically for operators ready to
                  scale into 9-figure portfolios.
                </p>
                <p>
                  Experience high-level coaching tailored for the modern real
                  estate executive. We focus on clinical precision and
                  data-driven results that move the needle.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-brand-mahogany text-white px-14 py-5 text-[10px] font-semibold uppercase tracking-[0.3em] hover:bg-brand-mahogany-light transition-all shadow-lg shadow-brand-mahogany/20"
              >
                Apply for Advisory
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-32 bg-brand-white"
        id="success"
        aria-labelledby="success-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="accent-heading mb-16">Performance Metrics</span>
          <h2 id="success-heading" className="sr-only">
            Success metrics
          </h2>
          <div className="grid md:grid-cols-4 gap-12">
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100 last:border-0">
              <div className="text-4xl font-display mb-4 text-brand-mahogany">
                $500M+
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-muted">
                Transaction Volume
              </div>
            </div>
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100 last:border-0">
              <div className="text-4xl font-display mb-4 text-brand-mahogany">
                2.4K+
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-muted">
                Portfolio Partners
              </div>
            </div>
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100 last:border-0">
              <div className="text-4xl font-display mb-4 text-brand-mahogany">
                15+
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-muted">
                Market Cycles
              </div>
            </div>
            <div className="p-8 last:border-0">
              <div className="text-4xl font-display mb-4 text-brand-mahogany">
                450+
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-muted">
                Assets Managed
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-48 bg-brand-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-normal mb-12 editorial-spacing">
            Refine Your <span className="italic text-brand-mahogany">Legacy.</span>
          </h2>
          <p className="text-brand-muted font-light mb-16 max-w-xl mx-auto text-lg leading-relaxed">
            Elevate your real estate trajectory with institutional-grade advisory
            and clinical market execution.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Link
              href="/contact"
              className="w-full md:w-auto bg-brand-mahogany text-white px-14 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-brand-mahogany-light transition-all shadow-xl shadow-brand-mahogany/10 text-center"
            >
              Consultation
            </Link>
            <Link
              href="/contact"
              className="w-full md:w-auto border border-brand-mahogany text-brand-mahogany px-14 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-brand-mahogany hover:text-white transition-all text-center"
            >
              Private Training
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
