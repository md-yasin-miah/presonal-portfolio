import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getListing,
  getListingSlugs,
  getAvailableListings,
} from "@/mock-data/listings";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) return { title: "Property Not Found" };
  return {
    title: `${listing.title} | ${listing.location}`,
    description: `${listing.title} - ${listing.price}. ${listing.beds} bed, ${listing.baths} bath, ${listing.sqft.toLocaleString()} sqft. ${listing.location}.`,
    openGraph: {
      title: `${listing.title} | Steven D. Park Real Estate`,
    },
  };
}

export async function generateStaticParams() {
  return getListingSlugs().map((slug) => ({ slug }));
}

function ListingNotFound({ slug }: { slug: string }) {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <section className="py-32 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="accent-heading block mb-6">Property Not Found</span>
          <h1 className="text-4xl md:text-6xl font-display font-normal mb-8 editorial-spacing">
            This listing <span className="italic text-brand-mahogany">does not exist.</span>
          </h1>
          <p className="text-lg text-brand-muted font-light mb-12 max-w-xl mx-auto leading-relaxed">
            The property &quot;{slug}&quot; could not be found. It may have been removed or the link may be incorrect.
          </p>
          <Link
            href="/listings"
            className="inline-block bg-brand-mahogany text-white px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-brand-mahogany-light transition-all"
          >
            View All Listings
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <span className="accent-heading block mb-4">Available Properties</span>
          <h2 className="section-header font-display mb-12">
            Explore <span className="italic text-brand-mahogany">Curated Residences</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {getAvailableListings().map((item) => (
              <Link
                key={item.slug}
                href={`/listings/${item.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4 group-hover:scale-[1.03] transition-transform duration-500">
                  <Image
                    alt={item.title}
                    className="w-full h-full object-cover"
                    src={item.heroImage}
                    width={600}
                    height={450}
                  />
                </div>
                <h3 className="text-xl font-display font-normal tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted tracking-wider mt-1">
                  {item.location}
                </p>
                <div className="flex justify-between items-baseline border-t border-gray-100 pt-3 mt-4">
                  <span className="text-lg">{item.price}</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted">
                    {item.beds} Bed | {item.baths} Bath
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/listings"
              className="inline-block border border-brand-mahogany text-brand-mahogany px-12 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-brand-mahogany hover:text-white transition-all"
            >
              View Full Listings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function SingleListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = getListing(slug);

  if (!listing) {
    return <ListingNotFound slug={slug} />;
  }

  return (
    <>
      <section
        className="relative h-[70vh] w-full overflow-hidden"
        aria-labelledby="property-title"
      >
        <Image
          alt={`${listing.title} - Hero`}
          className="w-full h-full object-cover"
          src={listing.heroImage}
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40 flex flex-col justify-end p-8 md:p-16 text-white">
          <span className="text-xs uppercase tracking-widest text-white/80 mb-2">
            {listing.location}
          </span>
          <h1 id="property-title" className="text-4xl md:text-6xl max-w-4xl font-display">
            {listing.title}
          </h1>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-8 py-12 border-b border-neutral-100"
        aria-label="Property quick stats"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              Price
            </span>
            <span className="text-2xl mt-1 font-display">{listing.price}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              Bedrooms
            </span>
            <span className="text-2xl mt-1 font-display">{listing.beds}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              Bathrooms
            </span>
            <span className="text-2xl mt-1 font-display">{listing.baths}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              Square Footage
            </span>
            <span className="text-2xl mt-1 font-display">
              {listing.sqft.toLocaleString()}{" "}
              <small className="text-sm">sqft</small>
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <article className="lg:w-2/3 space-y-12">
            <div>
              <h2 className="text-3xl font-display mb-8">
                Architectural Masterpiece in the Hills
              </h2>
              <div className="text-lg leading-relaxed text-neutral-700 space-y-6">
                {listing.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="pt-8 border-t border-neutral-100">
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
                Property Amenities
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-600">
                {listing.amenities.map((a) => (
                  <li key={a} className="flex items-center">
                    • {a}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <aside className="lg:w-1/3">
            <div className="sticky top-32 bg-neutral-50 p-8 border border-neutral-100">
              <h3 className="text-xl font-display mb-6">
                Inquire About This Property
              </h3>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-200 relative">
                  <Image
                    alt="Steven D. Parks"
                    className="object-cover"
                    src={listing.agentImage}
                    fill
                  />
                </div>
                <div>
                  <p className="font-medium">Steven D. Parks</p>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 italic">
                    Principal Broker
                  </p>
                </div>
              </div>
              <form action="#" className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-widest text-neutral-500 mb-1 block"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border border-neutral-200 focus:ring-black focus:border-black p-3 text-sm rounded-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest text-neutral-500 mb-1 block"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-neutral-200 focus:ring-black focus:border-black p-3 text-sm rounded-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-widest text-neutral-500 mb-1 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="I am interested in scheduling a private viewing..."
                    className="w-full border border-neutral-200 focus:ring-black focus:border-black p-3 text-sm rounded-none"
                  />
                </div>
                <Link
                  href="/contact"
                  className="block w-full bg-black text-white py-4 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors duration-300 text-center"
                >
                  Send Inquiry
                </Link>
              </form>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="w-full h-[500px] bg-neutral-100 relative flex items-center justify-center"
        aria-label="Property location"
      >
        <div className="bg-white px-6 py-4 shadow-xl border border-neutral-100 flex items-center space-x-3">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-black">
            {listing.address}
          </span>
        </div>
      </section>
    </>
  );
}
