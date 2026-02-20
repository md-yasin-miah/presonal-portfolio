import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Art & Collaboration",
  description:
    "A refined portfolio of boutique hospitality and commercial ventures. Investment & Development. Architecting legacy.",
  openGraph: {
    title: "Art & Collaboration | Steven D. Park",
    description:
      "Projects & Investor Portal. Featured ventures and investor relations.",
  },
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBtl8FI89B6Xb00Yr8jzJETvyuRvFUMO4Anx0An86nf7LZk1VDizq7_HXZEKgylPBfguRRAkbgwGeU3SESuxaYOK97XeKJS-sbWTRn0FBU4HUzWTnGaxjyp7eIWIZyBzBeMF48GkA87PEtbDOciYJ7QtJgxJYzlAdDXRPLbfv9SZKkbvv_RXxVQ25lT19uwgxW8hjcj9MwPYBS8PR5my4iR3kwwZJTa8H8FllYmYwzRiD5wgjfOgJ63CPx08R9VIDTzChtQr-zrSsA";

const ventures = [
  {
    category: "Hospitality",
    title: "The Vue Residences",
    description:
      "A 45-unit luxury boutique concept in the design district, merging art with occupancy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnp5838umr9w1s1qqA2zLzoftXSzHWjf6bdjNNWNxZ-fL-LQ13pmIw7t21r9vMXji6Z9C3FOGu1OanEhX7j8C_dGTK90A_ASurRX0BaFuoiEeZtZ2FOoh67fPqcgHJ2nZ16BLySH_VTxniNuukU7ymzAA-nPBsh5snRWkaChIKiPWvC0x6VAviGiPu2i0DYc2O214Ou1gHltZZD0Esv4bYmPJboneYluLV7A812HRW9pliRCh-Tpl_h_sIrNhlPXH-6HtJ0W1dBTs",
  },
  {
    category: "Lifestyle Retail",
    title: "Origins Roastery",
    description:
      "Artisanal coffee collective focused on sustainable sourcing and urban connectivity.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsmueUgwl05tUbw_2HqS8Wo3nd39NEZyGN8Ls8DWlkzeK9SYNsY1F2qje1TrUTy7ovbhiITz8cuc3scg1yPzcbIXL547GoB5pFwGdP0jIlHkEQRjNaLuWyD4AFkzgzJrrkJDZz1AK1Kj3noJYduCtgOvnV2EJdBT4beIXzt5aw4V2quzRwNOHfRANbXeJKzdBxRzw4Fwnsen3imP1Gx08PeJaRGn7uhUZgY_gwGjmNUNvQDEW4ao_VG3y4WP3OVNm3Q7MFM0NTUrI",
  },
  {
    category: "Mixed Use",
    title: "Park Plaza Hub",
    description:
      "State-of-the-art office spaces integrated with curated ground-floor retail environments.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHAMtaot-qUINsFR7jasIQpK3q9nP5kK6ocmFoLDhRAEAwEQiFcUPRIsTJGa3a1dAnbv1ad0Qll27bZTIvT76YQHNzY4_NySG-rxj_n4NBPIc5sIjTkIyCq1hWXxUBZCWt-9IZdfJTRKVEyy7WVbOda3f8_KPwbQKbtqo-4-m473mhEHYG4QnVfUd859drxjf_E5MnXY6uVKEMOj3ZaY4_ITr6H9UtW8u8oEDjsD8PWeLNjPvvZCiKBuk3_81tdAhFk9W31BMdVoU",
  },
];

const criteria = [
  {
    icon: "analytics",
    title: "LTV Ratios",
    text: "Aggressive Loan-to-Value ratios up to 75% for qualified commercial assets and developments.",
  },
  {
    icon: "speed",
    title: "Rapid Funding",
    text: "Streamlined underwriting processes enabling closings in as little as 7-10 business days.",
  },
  {
    icon: "account_balance",
    title: "Asset Classes",
    text: "Focus on hospitality, multi-family, and industrial assets with strong fundamentals.",
  },
  {
    icon: "monetization_on",
    title: "Loan Terms",
    text: "Flexible interest-only periods and terms ranging from 12 to 36 months to suit project lifecycles.",
  },
];

const values = [
  {
    icon: "verified_user",
    title: "Integrity",
    text: "Two decades of transparent, ethical investment practices that define our professional reputation.",
  },
  {
    icon: "architecture",
    title: "Strategic Curation",
    text: "Beyond funding; we curate high-end experiences that drive premiums and long-term retention.",
  },
  {
    icon: "network_check",
    title: "Global Network",
    text: "Leveraging private equity and institutional partners to unlock exclusive off-market opportunities.",
  },
];

export default function ArtCollaborationPage() {
  return (
    <>
      <header className="relative h-screen flex items-center overflow-hidden min-h-[600px]">
        <Image
          alt="Luxury Hotel Exterior"
          className="w-full h-full object-cover"
          src={HERO_IMAGE}
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-black font-medium uppercase tracking-[0.4em] mb-6 text-xs block font-sans">
              Investment & Development
            </span>
            <h1 className="text-6xl md:text-8xl font-normal text-black mb-10 leading-[1.1] tracking-tight font-display">
              Architecting <br />
              <span className="italic font-light">Legacy.</span>
            </h1>
            <p className="text-xl text-black/70 max-w-xl mb-12 font-light leading-relaxed">
              A refined portfolio of boutique hospitality and commercial
              ventures, unified by a commitment to enduring value and
              architectural integrity.
            </p>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Link
                href="#projects"
                className="px-10 py-5 bg-black text-white text-xs font-medium uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all"
              >
                Portfolio Index
              </Link>
              <Link
                href="#investor-portal"
                className="px-10 py-5 border border-black text-black text-xs font-medium uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
              >
                Investor Portal
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section
        className="py-40 px-8"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-black/5 pb-12">
            <div className="max-w-2xl">
              <h2
                id="projects-heading"
                className="text-4xl md:text-5xl font-normal text-black mb-6 font-display"
              >
                Featured Ventures
              </h2>
              <p className="text-black/50 text-lg font-light leading-relaxed">
                Curated developments defined by strategic market positioning and
                exceptional aesthetic standards.
              </p>
            </div>
            <div className="flex space-x-6 mt-8 md:mt-0">
              <button
                type="button"
                className="group flex items-center justify-center"
                aria-label="Previous"
              >
                <span className="material-symbols-outlined font-light text-2xl group-hover:-translate-x-1 transition-transform">
                  west
                </span>
              </button>
              <button
                type="button"
                className="group flex items-center justify-center"
                aria-label="Next"
              >
                <span className="material-symbols-outlined font-light text-2xl group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {ventures.map((v) => (
              <article key={v.title} className="group">
                <div className="relative overflow-hidden mb-8 aspect-4/5 bg-zinc-100">
                  <Image
                    alt={v.title}
                    className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    src={v.image}
                    width={500}
                    height={625}
                  />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-black/40 block">
                    {v.category}
                  </span>
                  <h3 className="text-2xl font-normal text-black group-hover:italic transition-all font-display">
                    {v.title}
                  </h3>
                  <p className="text-black/60 text-sm font-light leading-relaxed max-w-xs">
                    {v.description}
                  </p>
                  <Link
                    href="/projects"
                    className="inline-block pt-4 text-[10px] uppercase tracking-[0.2em] border-b border-black/20 pb-1 hover:border-black transition-all"
                  >
                    View Case Study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-40 bg-zinc-50/50"
        id="investor-portal"
        aria-labelledby="investor-heading"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-32">
            <h2
              id="investor-heading"
              className="text-5xl font-normal text-black mb-8 font-display"
            >
              Investor Relations
            </h2>
            <p className="text-black/50 font-light uppercase tracking-[0.3em] text-[11px]">
              Hard Money Lending & Institutional Capital
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div
              className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5"
              id="criteria"
            >
              {criteria.map((c) => (
                <div key={c.title} className="p-12 bg-white">
                  <span className="material-symbols-outlined font-light text-black mb-8 text-3xl">
                    {c.icon}
                  </span>
                  <h4 className="text-xl font-normal text-black mb-4 font-display">
                    {c.title}
                  </h4>
                  <p className="text-black/60 text-sm font-light leading-relaxed">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-4 p-12 bg-black text-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]">
              <h4 className="text-2xl font-normal mb-12 font-display">
                Portal Insights
              </h4>
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] mb-4 text-white/50">
                    <span>Average ROI</span>
                    <span className="text-white">14.2%</span>
                  </div>
                  <div className="w-full bg-white/10 h-px">
                    <div className="bg-white h-px w-[85%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] mb-4 text-white/50">
                    <span>AUM Growth</span>
                    <span className="text-white">+22% YoY</span>
                  </div>
                  <div className="w-full bg-white/10 h-px">
                    <div className="bg-white h-px w-[70%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] mb-4 text-white/50">
                    <span>Default Rate</span>
                    <span className="text-white">&lt; 0.5%</span>
                  </div>
                  <div className="w-full bg-white/10 h-px">
                    <div className="bg-white h-px w-[15%]" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="w-full mt-16 py-5 border border-white/20 text-white text-[10px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300"
              >
                Annual Report 2023
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-40 px-8"
        aria-labelledby="values-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="values-heading" className="sr-only">
            Our values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-left">
            {values.map((v) => (
              <div key={v.title}>
                <span className="material-symbols-outlined font-light text-black text-4xl mb-10">
                  {v.icon}
                </span>
                <h3 className="text-xl font-normal text-black mb-6 font-display">
                  {v.title}
                </h3>
                <p className="text-black/60 font-light leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="pb-40 px-8"
        id="contact"
        aria-labelledby="inquire-heading"
      >
        <div className="max-w-4xl mx-auto border border-black/10 p-16 md:p-24">
          <div className="text-center mb-16">
            <h2
              id="inquire-heading"
              className="text-4xl font-normal text-black mb-6 font-display"
            >
              Inquire Privately
            </h2>
            <p className="text-black/40 font-light text-sm">
              Selective partnerships. Serious inquiries will receive a response
              within 24 hours.
            </p>
          </div>
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label
                  htmlFor="art-name"
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 block"
                >
                  Full Name
                </label>
                <input
                  id="art-name"
                  className="w-full bg-transparent border-0 border-b border-black/10 focus:ring-0 focus:border-black py-3 px-0 transition-all placeholder:text-black/30"
                  placeholder="Johnathan Doe"
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="art-interest"
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 block"
                >
                  Investment Interest
                </label>
                <select
                  id="art-interest"
                  className="w-full bg-transparent border-0 border-b border-black/10 focus:ring-0 focus:border-black py-3 px-0 transition-all appearance-none"
                >
                  <option>Hospitality Equity</option>
                  <option>Hard Money Loan</option>
                  <option>Retail Development</option>
                  <option>Portfolio Partnership</option>
                </select>
              </div>
            </div>
            <div className="space-y-3">
              <label
                htmlFor="art-email"
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 block"
              >
                Email Address
              </label>
              <input
                id="art-email"
                className="w-full bg-transparent border-0 border-b border-black/10 focus:ring-0 focus:border-black py-3 px-0 transition-all placeholder:text-black/30"
                placeholder="john@institutional.com"
                type="email"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="art-overview"
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 block"
              >
                Project Overview
              </label>
              <textarea
                id="art-overview"
                className="w-full bg-transparent border-0 border-b border-black/10 focus:ring-0 focus:border-black py-3 px-0 transition-all placeholder:text-black/30 resize-none"
                placeholder="Briefly outline your thesis or requirements..."
                rows={3}
              />
            </div>
            <div className="pt-6">
              <Link
                href="/contact"
                className="block w-full py-6 bg-black text-white text-[10px] font-medium uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all text-center"
              >
                Submit Inquiry
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
