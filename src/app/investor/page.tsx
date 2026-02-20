import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FEATURED_VENTURES,
  URBAN_LOFTS,
} from "@/mock-data/investor";

export const metadata: Metadata = {
  title: "Investor",
  description:
    "Commercial Ventures. Strategic development in high-growth urban corridors. Premium hospitality and adaptive reuse projects.",
  openGraph: {
    title: "Investor | Steven D. Park",
    description: "Commercial Projects Portfolio. Invest in the next big venture.",
  },
};

export default function InvestorPage() {
  return (
    <>
      <header className="pt-24 pb-20 px-6 border-b border-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-px w-12 bg-black" />
            <span className="text-black font-bold uppercase tracking-[0.3em] text-xs">
              Portfolio Index
            </span>
          </div>
          <h1 className="text-7xl md:text-8xl font-black uppercase leading-none mb-8 tracking-tighter font-display">
            Commercial <br />
            <span className="text-black">Ventures</span>
          </h1>
          <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed">
            Strategic development in high-growth urban corridors. A collection
            of premium hospitality and adaptive reuse projects defining the
            modern metropolitan skyline.
          </p>
        </div>
      </header>

      <main className="relative">

        {/* Venture 1 - The Boutique Hotel */}
        <section
          id="venture-01"
          className="relative min-h-screen flex items-center overflow-hidden border-b border-white/5"
          aria-labelledby="venture-01-heading"
        >
          <div className="absolute inset-0 z-0">
            <Image
              alt="Luxurious boutique hotel lobby"
              className={`w-full h-full object-cover ${FEATURED_VENTURES[0].grayscale} ${FEATURED_VENTURES[0].opacity}`}
              src={FEATURED_VENTURES[0].image}
              fill
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-32 w-full">
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-black font-bold text-lg">01.</span>
                <div className="h-[1px] w-8 bg-black" />
              </div>
              <h2
                id="venture-01-heading"
                className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight font-display"
              >
                The Boutique <br />
                Hotel
              </h2>
              <p className="text-zinc-600 text-lg mb-10 max-w-xl leading-relaxed">
                {FEATURED_VENTURES[0].description}
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-black text-white font-bold py-4 px-8 rounded active:scale-95 transition-transform"
              >
                <span className="uppercase tracking-widest text-sm">
                  View Case Study
                </span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-white border border-black/10 p-8 lg:p-12 space-y-10">
                <div className="grid grid-cols-2 gap-8">
                  {Object.entries(FEATURED_VENTURES[0].cardData).map(
                    ([key, value]) => (
                      <div key={key}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                          {key}
                        </p>
                        <p className="font-bold text-xl uppercase italic">
                          {value}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <div className="pt-8 border-t border-black/10">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                    <span>{FEATURED_VENTURES[0].progress.label}</span>
                    <span className="text-black">
                      {FEATURED_VENTURES[0].progress.value}%
                    </span>
                  </div>
                  <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black"
                      style={{
                        width: `${FEATURED_VENTURES[0].progress.value}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venture 2 - Industrial Coffee Shop */}
        <section
          id="venture-02"
          className="relative min-h-screen flex items-center overflow-hidden border-b border-white/5"
          aria-labelledby="venture-02-heading"
        >
          <div className="absolute inset-0 z-0">
            <Image
              alt="Minimalist industrial coffee shop interior"
              className={`w-full h-full object-cover ${FEATURED_VENTURES[1].grayscale} ${FEATURED_VENTURES[1].opacity}`}
              src={FEATURED_VENTURES[1].image}
              fill
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-32 w-full">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="bg-white border border-black/10 p-8 lg:p-12 space-y-10">
                <div className="grid grid-cols-2 gap-8">
                  {Object.entries(FEATURED_VENTURES[1].cardData).map(
                    ([key, value]) => (
                      <div key={key}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                          {key}
                        </p>
                        <p className="font-bold text-xl uppercase italic">
                          {value}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <div className="pt-8 border-t border-black/10">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                    <span>{FEATURED_VENTURES[1].progress.label}</span>
                    <span className="text-black">
                      {FEATURED_VENTURES[1].progress.value}%
                    </span>
                  </div>
                  <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black"
                      style={{
                        width: `${FEATURED_VENTURES[1].progress.value}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 lg:text-right flex flex-col items-end">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-[1px] w-8 bg-black" />
                <span className="text-black font-bold text-lg">02.</span>
              </div>
              <h2
                id="venture-02-heading"
                className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight font-display"
              >
                Industrial <br />
                Coffee Shop
              </h2>
              <p className="text-zinc-600 text-lg mb-10 max-w-xl leading-relaxed lg:text-right">
                {FEATURED_VENTURES[1].description}
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 border-2 border-black text-black hover:bg-black hover:text-white font-bold py-4 px-8 rounded transition-all"
              >
                <span className="uppercase tracking-widest text-sm">
                  View Case Study
                </span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Urban Lofts Phase III */}
        <section
          className="py-24 px-6"
          aria-labelledby="urban-lofts-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <span className="text-black font-bold uppercase tracking-widest text-xs block">
                  Upcoming Release
                </span>
                <h3
                  id="urban-lofts-heading"
                  className="text-4xl font-black uppercase mt-2 font-display"
                >
                  The Urban Lofts <br />
                  <span className="text-zinc-600">Phase III</span>
                </h3>
              </div>
              <Link
                href="/projects"
                className="mt-8 md:mt-0 text-zinc-500 hover:text-black transition-colors flex items-center gap-2 font-bold uppercase text-xs tracking-[0.2em]"
              >
                <span>See All Projects</span>
                <span className="material-symbols-outlined">east</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {URBAN_LOFTS.map((project) => (
                <Link
                  key={project.title}
                  href="/projects"
                  className="group block cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden relative mb-6">
                    <Image
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={project.image}
                      width={500}
                      height={625}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-black font-bold text-xs uppercase tracking-widest mb-2">
                    {project.location}
                  </p>
                  <h4 className="text-xl font-bold uppercase group-hover:text-black transition-colors text-zinc-600">
                    {project.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Invest CTA Form */}
        <section
          className="relative py-32 px-6 overflow-hidden"
          aria-labelledby="invest-heading"
        >
          <div className="absolute inset-0 z-0">
            <Image
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXCXbCrP1II5GWh-Zv4vMVOdy0AdiIi7Y9UoudGwoKhu7ovu1NRSagHMtmTnfPhju2A4DUXr9ZoSlKSH_0LqvrAVHqqbNwUvM4moJSmPojBg_UQkPOOyvJ5nU9pn-sZfy34J-F1FhgHEOa6Bfflsb2Hfg-3DdkoQoPJERM7K8i0sMmMBvR5EKNbnAm6jAD2eUgQvaUPJ_P_YwUUI1KdGkkDjNl1qio7ouCt7Y1Vc6i0cVCadYwvp6ycpfaTes6tHQRV5cFUuBYgG0"
              fill
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-8 bg-black" />
                <span className="text-black font-bold uppercase tracking-[0.3em] text-xs">
                  Opportunities
                </span>
                <div className="h-px w-8 bg-black" />
              </div>
              <h2
                id="invest-heading"
                className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight font-display"
              >
                Invest in the <br />
                <span className="text-black">Next Big Venture</span>
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto">
                Join an exclusive circle of visionary investors. Submit your
                application to receive priority access to our upcoming
                high-yield commercial developments.
              </p>
            </div>
            <form
              action="#"
              className="bg-white p-8 md:p-12 border border-black/10 shadow-xl"
              aria-label="Investment application"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label
                    htmlFor="full_name"
                    className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500"
                  >
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-zinc-50 border border-black/10 text-black focus:ring-black focus:border-black px-4 py-4 transition-all placeholder:text-zinc-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="investor_email"
                    className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500"
                  >
                    Email Address
                  </label>
                  <input
                    id="investor_email"
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-zinc-50 border border-black/10 text-black focus:ring-black focus:border-black px-4 py-4 transition-all placeholder:text-zinc-400"
                  />
                </div>
              </div>
              <div className="mb-8 space-y-2">
                <label
                  htmlFor="capacity"
                  className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500"
                >
                  Investment Capacity
                </label>
                <select
                  id="capacity"
                  className="w-full bg-zinc-50 border border-black/10 text-black focus:ring-black focus:border-black px-4 py-4 transition-all"
                >
                  <option value="" disabled>
                    Select investment range
                  </option>
                  <option value="100k-500k">$100k - $500k</option>
                  <option value="500k-1m">$500k - $1M</option>
                  <option value="1m+">$1M+</option>
                </select>
              </div>
              <div className="mb-10 space-y-2">
                <label
                  htmlFor="investor_message"
                  className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500"
                >
                  Message / Investment Strategy
                </label>
                <textarea
                  id="investor_message"
                  rows={4}
                  placeholder="Briefly describe your investment objectives..."
                  className="w-full bg-zinc-50 border border-black/10 text-black focus:ring-black focus:border-black px-4 py-4 transition-all placeholder:text-zinc-400"
                />
              </div>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-3 bg-black hover:bg-zinc-800 text-white font-black py-5 px-8 uppercase tracking-[0.2em] text-sm transition-all shadow-lg group"
              >
                <span>Submit Application</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
              <p className="text-center mt-6 text-[10px] text-zinc-600 uppercase tracking-widest">
                All applications are handled with strict institutional-grade
                confidentiality.
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
