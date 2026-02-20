import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Steven D. Park is an investor and strategist defined by a high-conviction approach to capital. Strategic focus. Human values.",
  openGraph: {
    title: "About | Steven D. Park",
    description:
      "Steven D. Park is an investor and strategist defined by a high-conviction approach to capital.",
  },
};

const LEGACY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAWh6L5c6DA5PEyTnYYufbSd5RlVAq9USuPSEMiiZZVrVsdEL4yp-zOoO1eBDkJCAcpFn1udbRtor27U29um65PmU0Mm90VYcrVQlOmEFUtp3HjlsIllIduCe-JXdjn_IvSfuMDoxli_epGQWDj96fKO0v5YhM1CBz_gBqqpX8pPo4wQOhc1t2SPhv_T8y90Bbm4ZO79BWtSymvGK3oT0U5esdEyItMo9SjMMoZTVTDdUF6QNMZBBUqbQ5qAmA7shZKdVrDXCtVR3U";

const PRESS_LOGOS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDik78pAINuv6ZccE8IrLFqQ2JHlohpRVutpKbhwLVtUo5LwX4RHK5Ne2a-ttTiZvB6cfBr6HAjCNPTywkNr_raxK5cU3FvSvD72WGfFs4jMxM6JwiODq5M-sZRoBZbtFtyKPbkBw2O9iR4DeGbkw5oLNudk2e1rpNODuKU4a-T7rv-F6nHRpaL6na977m4639AEyCoSRqHeP2Cz64GYBxaioSi73HTq2lGhe8U_SC3MMeACicR8aljBFRTPyGKsWtVuDvYQhGNePs",
    height: "h-5",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOw_33Gk37rf34_W6CNb7f9FtFP3v4xTeKI0nu1JDkkaVE7ZUIEBlKlxwvwrsANVjgqdpxmnxfrIP7edzNr5FFZy4nL4K2Sn1gYrS-bkJGTga99IKyUHTLJ6ajs8_Hfam34um9UkbKKjRSe9DlqBQvEW7Ogh2Kkee90og8ne7HEgfmkC6K_QCCFJvKOUgRGP3JSgaQP5dihvNmFFnXwBdBN0MqEo1iXP3kYT4eIIDi50ahlah2fcMpSGDZqlHX7zdv9TiV3HjQEl8",
    height: "h-7",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWh6L5c6DA5PEyTnYYufbSd5RlVAq9USuPSEMiiZZVrVsdEL4yp-zOoO1eBDkJCAcpFn1udbRtor27U29um65PmU0Mm90VYcrVQlOmEFUtp3HjlsIllIduCe-JXdjn_IvSfuMDoxli_epGQWDj96fKO0v5YhM1CBz_gBqqpX8pPo4wQOhc1t2SPhv_T8y90Bbm4ZO79BWtSymvGK3oT0U5esdEyItMo9SjMMoZTVTDdUF6QNMZBBUqbQ5qAmA7shZKdVrDXCtVR3U",
    height: "h-8",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0uzB_kfZNgyC9FLGuNq0e8xm3mIOQ4Vr0kb7RZMMsAcvlocz6W850MqvKVRyxBn5CWRgRW9278Xtjxqz9sAh0nEqdAuf_PUsZlHyAy3C3FmTjMLRO5ucC0G7uxX6f4ogYiL9qU9_aNMfMgPd1IZzEjXmwcsnNSG1l9nLn2rLwcjhGGxGAv3KoJ8lHE5yyJukXHTgp22pQEOiQiDMH6uzAJQg3CrTP6F6H54QhoGh6d_o224HJHROARMk-QtE2uXAOld1ZbZAJcds",
    height: "h-5",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFFCTKrKKqeHABMX7lcgCPqdrn-cAOgFAkxNTIlvUaNpefJHH-blMg4HKTr6qVR44d_gPZla4CXzFnHl79pTrSCjKNfq_UDJIKtnREW1qTQJIVZ4qyDDlAgL6kApEyUZIfYmGUqxjb7Gz7zHUNqciFhQb3KD7FQ_EWGlvR9R9L70vGoCtOo5TeMwsDo11ACqkuf194eKJFqcEU1dZBeSHhfGZsEp3ZzZFsb2CqtG-uBGP_M5n_D3Y2zfzao-s9EoFQHLsZYQP72dw",
    height: "h-6",
  },
];

const PRESS_FEATURES = [
  {
    label: "Analysis",
    title: "The Future of Multi-Family Real Estate in a Shifting Economy",
    description:
      "An exploration of the acquisition frameworks utilized during market volatility to secure long-term yield.",
    linkText: "Read Publication",
  },
  {
    label: "Interview",
    title: "10X Thinking: Disciplined Scale for Modern Investors",
    description:
      "Steven Park discusses the mental models required to execute high-stakes acquisitions in urban markets.",
    linkText: "View Interview",
  },
];

const MILESTONES = [
  {
    year: "2008",
    title: "Market Entrance",
    text: "Early acquisitions of distressed assets during the global correction, establishing the firm's foundational investment thesis.",
  },
  {
    year: "2014",
    title: "Institutional Expansion",
    text: "The formalization of Park Capital Equity, shifting focus toward large-scale commercial assets and coastal urban centers.",
  },
  {
    year: "2019",
    title: "AUM Growth",
    text: "Assets under management exceed significant benchmarks. Established the firm's private mentorship program for high-potential leaders.",
  },
  {
    year: "Present",
    title: "Strategic Legacy",
    text: "Directing global operations with a focus on sustainable growth, generational wealth, and technological integration in real estate.",
    current: true,
  },
];

const CORE_PRINCIPLES = [
  {
    icon: "insights",
    title: "Exponential Growth",
    text: "Prioritizing high-leverage opportunities that fundamentally shift the scale of operations.",
  },
  {
    icon: "verified_user",
    title: "Capital Preservation",
    text: "Systemic risk assessment ensures the longevity of assets across multiple economic cycles.",
  },
  {
    icon: "public",
    title: "Market Authority",
    text: "Cultivating a position of strength to dictate market value rather than react to it.",
  },
  {
    icon: "auto_awesome",
    title: "Generational Impact",
    text: "Designing systems that provide security and value far beyond the current decade.",
  },
];

const sectionLabel =
  "text-[0.65rem] tracking-[0.25em] uppercase font-medium text-gray-400 block";

export default function AboutPage() {
  return (
    <>
      <section
        className="relative pt-48 pb-32"
        id="story"
        aria-labelledby="story-heading"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6">
            <span className={cn(sectionLabel, "mb-8")}>Foundations</span>
            <h1
              id="story-heading"
              className="text-5xl lg:text-6xl font-extralight mb-10 leading-[1.1] tracking-[-0.03em] font-display"
            >
              Strategic focus. <br />
              Human values.
            </h1>
            <div className="space-y-6 max-w-lg">
              <p className="text-[15px] text-gray-500 leading-relaxed font-light">
                Steven D. Park is an investor and strategist defined by a
                high-conviction approach to capital. His methodology focuses on
                precision, institutional integrity, and the long-term stewardship
                of resources.
              </p>
              <p className="text-[15px] text-gray-500 leading-relaxed font-light">
                Over two decades, he has built a reputation for navigating
                complex market shifts with discipline, ensuring that every
                acquisition aligns with a broader vision of market mastery.
              </p>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <Link
                href="#milestones"
                className="text-[10px] font-medium tracking-[0.3em] border-b border-black pb-2 hover:opacity-50 transition-all"
              >
                EXECUTIVE PATH
              </Link>
              <Link href="/contact" className="flex items-center space-x-3 group">
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black transition-colors text-xl font-light">
                  play_arrow
                </span>
                <span className="text-[10px] font-medium tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors uppercase">
                  View Profile
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative bg-gray-50 overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
              <Image
                alt="Steven D. Park"
                className="w-full h-full object-cover aspect-4/5"
                src="/steven.jpg"
                width={600}
                height={750}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-32 bg-brand-white border-t border-gray-50"
        id="family"
        aria-labelledby="family-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className={cn(sectionLabel, "mb-6")}>Personal Foundation</span>
            <h2
              id="family-heading"
              className="text-4xl font-extralight tracking-[-0.03em] mb-8 font-display"
            >
              Family & Legacy
            </h2>
            <div className="max-w-3xl">
              <p className="text-gray-500 font-light leading-relaxed text-[15px]">
                Beyond the portfolio, Steven&apos;s primary focus is the
                cultivation of a lasting family legacy. He believes that true
                wealth is measured by the character and continuity of the
                generations that follow. This personal commitment to integrity
                and stewardship humanizes the brand and informs every
                institutional decision.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
            <div className="lg:col-span-12 overflow-hidden bg-gray-50">
              <Image
                alt="Family Group Photo"
                className="w-full aspect-21/9 object-cover hover:scale-[1.02] transition-transform duration-2000"
                src="/family.jpg"
                width={1200}
                height={514}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-hidden bg-gray-50">
              <Image
                alt="Legacy Moment"
                className="w-full aspect-video object-cover"
                src={LEGACY_IMAGE}
                width={640}
                height={360}
              />
            </div>
            <div className="bg-gray-50 flex items-center justify-center p-12 text-center">
              <div className="max-w-xs">
                <span className="material-symbols-outlined text-gray-200 text-4xl mb-6 font-light">
                  auto_awesome
                </span>
                <p className="text-sm italic font-light text-gray-400 leading-relaxed">
                  &quot;Building a business is a sprint; building a legacy is a
                  marathon that requires the participation of those you love
                  most.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-32 border-t border-gray-50"
        id="press"
        aria-labelledby="press-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className={cn(sectionLabel, "mb-6")}>In the Media</span>
              <h2
                id="press-heading"
                className="text-4xl font-extralight tracking-[-0.03em] font-display"
              >
                Press & Features
              </h2>
            </div>
            <div className="flex flex-wrap gap-12 items-center">
              {PRESS_LOGOS.map((logo, i) => (
                <Image
                  key={i}
                  alt="Publication"
                  className={cn("press-logo w-auto object-contain", logo.height)}
                  src={logo.src}
                  width={120}
                  height={48}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {PRESS_FEATURES.map((item) => (
              <div key={item.title} className="group border-t border-gray-100 pt-10">
                <span className="text-[9px] font-semibold text-gray-300 uppercase tracking-[0.3em] mb-5 block">
                  {item.label}
                </span>
                <h3 className="text-xl font-light mb-6 group-hover:opacity-60 transition-opacity">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-light text-[14px] leading-relaxed mb-8">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="text-[10px] font-medium tracking-[0.3em] uppercase border-b border-black/10 pb-1 group-hover:border-black transition-all"
                >
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-32 bg-brand-white border-t border-gray-50"
        id="milestones"
        aria-labelledby="milestones-heading"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className={cn(sectionLabel, "mb-6")}>Chronology</span>
            <h2
              id="milestones-heading"
              className="text-4xl font-extralight tracking-[-0.03em] font-display"
            >
              Career Milestones
            </h2>
          </div>
          <div className="space-y-24">
            {MILESTONES.map((item) => (
              <div
                key={item.year}
                className="flex flex-col md:flex-row gap-12 items-start group"
              >
                <div className="w-24 shrink-0">
                  <span
                    className={cn(
                      "text-2xl font-extralight transition-colors duration-500",
                      item.current
                        ? "text-black"
                        : "text-gray-200 group-hover:text-black"
                    )}
                  >
                    {item.year}
                  </span>
                </div>
                <div
                  className={cn(
                    "flex-1 border-l pl-12 pb-2",
                    item.current ? "border-black" : "border-gray-50"
                  )}
                >
                  <h3 className="text-sm font-medium uppercase tracking-widest mb-4">
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "font-light leading-relaxed text-[15px]",
                      item.current ? "text-gray-600" : "text-gray-500"
                    )}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-32 border-t border-gray-50"
        id="philosophy"
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <span className={cn(sectionLabel, "mb-6")}>Methodology</span>
            <h2
              id="philosophy-heading"
              className="text-4xl font-extralight tracking-[-0.03em] mb-6 font-display"
            >
              Core Principles
            </h2>
            <p className="text-gray-400 font-light text-[15px]">
              The intellectual framework that guides our institutional deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="p-10 border border-gray-50 hover:bg-gray-50/50 transition-all duration-500"
              >
                <span className="material-symbols-outlined text-gray-200 mb-8 text-3xl font-light">
                  {principle.icon}
                </span>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] mb-5">
                  {principle.title}
                </h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-32 bg-brand-white border-t border-gray-50"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className={cn(sectionLabel, "mb-10")}>Inquiries</span>
          <h2
            id="contact-heading"
            className="text-5xl font-extralight tracking-[-0.03em] mb-12 font-display"
          >
            Expand your trajectory.
          </h2>
          <p className="text-[16px] text-gray-400 mb-16 font-light max-w-xl mx-auto leading-relaxed">
            Steven is selectively reviewing high-level partnerships and executive
            advisory roles for the upcoming calendar year.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="px-14 py-5 bg-black text-white text-[10px] font-medium uppercase tracking-[0.3em] hover:opacity-80 transition-all"
            >
              Submit Application
            </Link>
            <Link
              href="/contact"
              className="px-14 py-5 border border-gray-200 text-black text-[10px] font-medium uppercase tracking-[0.3em] hover:bg-gray-50 transition-all"
            >
              Partner Inquiries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
