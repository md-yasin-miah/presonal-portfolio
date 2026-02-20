import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Art & Design",
  description:
    "The intersection of form and narrative. A study in spatial dialogue: the architecture of Steven D. Park meets contemporary fine art. Art collaborations and curated space.",
  openGraph: {
    title: "Art & Design | Steven D. Park",
    description: "The philosophy of curated space. Integrated masterworks and acquisitions.",
  },
};

const COLLECTION = [
  {
    title: "The West Hollywood Penthouse",
    number: "Project No. 001",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2c0Q6xoTXRfwqNmBCft0MLxsSPkhYK_--y6dRZpe_0bMkE6PYe4LQ49jjOyBKl3mTNUW3Z5Esba9w2fA4lcmq6k00yljW7YWxtQIWdq3lnFvYxbgMGBi6QOopispQK5DmwAop0EvDzFgjkvZ3KEyOM9gqx8Psy3cCo_zkjLPCRDMgU6MW8KLAfOYh1TddJrVBc4QHD9ivf7BV1e9i_0FrKM-YtrQXPn5eHgSJRcuCVVqt8hcWkMKOcjJFVO3HZTIbhXfXSaRoH0k",
    height: 600,
  },
  {
    title: "The Obsidian Foyer",
    number: "Project No. 002",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-TVAFbYT-R8JnSPBVViL3b1uncVttOiJSlQzAxsagL0A99w8uV31gD5skJxd5h68zLlZQ6WLfokMRNECS9bJ5uK_5WJU1suHdqA0muuiB69P3eKwm5eowle1W-bjYY1IXjfdi_oswEeqPHNOdx6Dk-E1m3qrSwRokBZ1ZnJU2uGbsrTfdFnTcOiUmlDcfXRLYV4b_OFCV3ojREVFy8GnQmyLqK03wy6E8Piiy3BWkFMO5Fcu0c63L3J7MzvH2agDx1o70RZfNP5E",
    height: 500,
  },
  {
    title: "Bel-Air Facade",
    number: "Project No. 003",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFxpMFWQy0cGML9S76QlnZMRH6aZ83DOetawLhDam550zwzKVjng8JQJDLUKQPF4DuCD01BxsEEdlnLxGN6RD2B7OQoKY1uqaRqbPRDEG9lIA6W-ZqzlL1emRDkJUceGpER3zJt_cW17ZoPOC3XYbscbk9tCG-eVJwgad-EBH-APeTkefn3cQwov1T7ZWVU4jdZ5AmkD-K0GxWaPwMCaI_kS-4s4kVSi3sc8fD5CIhP_1QJCLKHKE3TQa0wv0RcB1RHtJRqb-t6fg",
    height: 450,
  },
  {
    title: "The Library Collection",
    number: "Project No. 004",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJwhSjgXPJVZJVFcjuiEdmIgqFYQ9thk4ft4ds1Tn5JNlFQSY7pciCRLUWTvtcAagJew4ESXV2hAnjWOhbjEKEoQFRw4Pc_ckxRglbf6CefOSCsl0GVr3pKLzRPfHdjOh9xAbG7IiziezznzT7iGoR4R6i5ZZBJCzBo1eghjrJO1ovtC-rChgGmuYgnEBtaTx6y0v1mAIjlUUk3Zp-0hGyC1TI8faBbIZzK-bY0-4vYvsTd8kesLQ7xdgava8BVB2QnWVtfdZNcgk",
    height: 450,
  },
];

export default function ArtDesignPage() {
  return (
    <>
      <header className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="z-20 order-2 lg:order-1">
            <span className="text-black/40 text-[10px] font-normal tracking-[0.4em] uppercase mb-6 italic block">
              A Curated Partnership
            </span>
            <h1 className="text-5xl md:text-7xl font-normal mb-8 leading-[1.1] tracking-tight font-display">
              The intersection of <span className="italic">form</span> and{" "}
              <span className="italic">narrative</span>.
            </h1>
            <p className="text-base font-normal text-black/60 max-w-md leading-relaxed mb-10">
              A study in spatial dialogue: the architecture of Steven D. Park
              meets the calligraphic intensity of RETNA.
            </p>
            <button
              type="button"
              className="border border-black px-10 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-400"
            >
              Explore Edition
            </button>
          </div>
          <div className="relative h-[60vh] lg:h-[70vh] order-1 lg:order-2 overflow-hidden bg-neutral-100">
            <Image
              alt="Luxury interior"
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsQw3mnYW_Rp7b0f4pj5SSsgwV026IISP94yEE-xeOZizODj6Dktl68ZRw3dt-93XuG-Iia2ZmW3ewwg9rwlTTEum-VX0afbCUSmiCaVwiw3VuuxcCvXMFsBGbF6_ZeFt_sOzEQrG51dvJMseByDnA9yGkr5JYVWai2CCod7KMiskPPZYPKcEINcYFotSMMxTgBOLfKN7LyYVIo7kfd4QgppWAoiM3U38raLvqxxc1wTJdDVGz-BYW3B6nPFJ_43-U7maETBuTdIk"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </header>

      <section
        className="py-40 px-8 bg-white"
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-10">
              <div className="w-16 h-[1px] bg-black/20" />
              <h2
                id="philosophy-heading"
                className="text-4xl font-normal leading-tight italic font-display"
              >
                The Philosophy of Curated Space
              </h2>
              <p className="text-black/60 text-base leading-relaxed font-normal">
                Art is not an ornament; it is the fundamental soul of the
                structure. We approach every collaboration as a living
                catalog—where the wall is no longer a boundary, but a canvas for
                historical resonance.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1">
                    Read the Essay
                  </span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    north_east
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 overflow-hidden bg-neutral-50">
              <Image
                alt="Abstract calligraphy"
                className="w-full grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAeFd49zQfIqd0TGz64r5T3Q4cZ0ZzxkFYYxRr2SMO6MTEnIBYhVzQuCMMy1nx160YlhDRS0BzVRxRUKavsrjUag-2ezkITdn749kXLuw6BBLjvqjCneDbh6QLedOuaqlHrV_6KJSLvk9ma8DicdcIqwmX3JkB90Lbte73iHwECz6uW5DI4QAs7FE2qoOpOy-r-Z141KEGRYM_xYSrMIYqYwT3HZWJG8EtZPiL0VVY1-AM_NZ5XmFsol_qCbEMB4Ou-Nk69zl80s4"
                width={800}
                height={500}
              />
              <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-black/40 text-right italic">
                Plate 01: The Textural Interface
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-white"
        aria-labelledby="collection-heading"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24 flex flex-col items-center text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4 italic block">
              The Collection
            </span>
            <h2
              id="collection-heading"
              className="text-3xl font-normal tracking-wide uppercase font-display"
            >
              Integrated Masterworks
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-7 mb-12">
              <div className="h-[600px] mb-6 overflow-hidden bg-neutral-100 relative">
                <Image
                  alt={COLLECTION[0].title}
                  className="object-cover grayscale"
                  src={COLLECTION[0].image}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-normal italic font-display">
                  {COLLECTION[0].title}
                </h3>
                <span className="text-[10px] tracking-[0.2em] text-black/40 uppercase">
                  {COLLECTION[0].number}
                </span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:mt-32 mb-12">
              <div className="h-[500px] mb-6 overflow-hidden bg-neutral-100 relative">
                <Image
                  alt={COLLECTION[1].title}
                  className="object-cover grayscale"
                  src={COLLECTION[1].image}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-normal italic font-display">
                  {COLLECTION[1].title}
                </h3>
                <span className="text-[10px] tracking-[0.2em] text-black/40 uppercase">
                  {COLLECTION[1].number}
                </span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 mb-12">
              <div className="h-[450px] mb-6 overflow-hidden bg-neutral-100 relative">
                <Image
                  alt={COLLECTION[2].title}
                  className="object-cover grayscale"
                  src={COLLECTION[2].image}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-normal italic font-display">
                  {COLLECTION[2].title}
                </h3>
                <span className="text-[10px] tracking-[0.2em] text-black/40 uppercase">
                  {COLLECTION[2].number}
                </span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 mb-12">
              <div className="h-[450px] mb-6 overflow-hidden bg-neutral-100 relative">
                <Image
                  alt={COLLECTION[3].title}
                  className="object-cover grayscale"
                  src={COLLECTION[3].image}
                  fill
                  sizes="(max-width: 1024px) 100vw, 67vw"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-normal italic font-display">
                  {COLLECTION[3].title}
                </h3>
                <span className="text-[10px] tracking-[0.2em] text-black/40 uppercase">
                  {COLLECTION[3].number}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto text-center px-8">
          <blockquote className="text-3xl md:text-4xl font-normal leading-relaxed italic font-display mb-12">
            &ldquo;Architecture is the vessel, but art is the breath that makes
            it alive. My scripts are stories written in the air.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-6">
            <div className="w-8 h-[1px] bg-black/20" />
            <span className="text-[11px] font-normal tracking-[0.3em] uppercase">
              Artist Statement
            </span>
            <div className="w-8 h-[1px] bg-black/20" />
          </div>
        </div>
      </section>

      <section className="py-40 bg-white" aria-labelledby="acquisitions-heading">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
          <h2
            id="acquisitions-heading"
            className="text-4xl md:text-5xl font-normal mb-8 tracking-tight font-display"
          >
            Acquisitions & Commissions
          </h2>
          <p className="text-black/50 max-w-lg mb-16 text-base font-normal italic leading-relaxed">
            Inquire for private portfolio access or bespoke architectural
            collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <Link
              href="/contact"
              className="px-12 py-5 bg-black text-white text-[10px] uppercase tracking-[0.3em] hover:bg-black/80 transition-colors"
            >
              Request Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-12 py-5 border border-black text-black text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
            >
              Private Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
