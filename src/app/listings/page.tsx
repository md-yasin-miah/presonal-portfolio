import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getListings } from "@/mock-data/listings";

export const metadata: Metadata = {
  title: "Listings",
  description:
    "Curated residences. Discover a collection of prestigious properties selected for their unique character and exceptional quality.",
  openGraph: {
    title: "Listings | Steven D. Park Real Estate",
    description: "Curated luxury residences across Beverly Hills, Malibu, Santa Monica, and more.",
  },
};

export default function ListingsPage() {
  const listings = getListings();
  return (
    <>
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto text-center border-b border-gray-50">
        <h1 className="text-4xl md:text-5xl font-light mb-4 font-display">
          Curated Residences
        </h1>
        <p className="text-gray-500 italic max-w-2xl mx-auto">
          Discover a collection of prestigious properties selected for their
          unique character and exceptional quality.
        </p>
      </section>

      <div className="sticky top-24 bg-white z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <label
              htmlFor="location"
              className="text-[10px] uppercase tracking-widest text-gray-400"
            >
              Location
            </label>
            <select
              id="location"
              className="border-none bg-transparent text-sm focus:ring-0 cursor-pointer font-light"
              aria-label="Filter by location"
            >
              <option>All Locations</option>
              <option>Beverly Hills</option>
              <option>Malibu</option>
              <option>Santa Monica</option>
              <option>Pacific Palisades</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label
              htmlFor="price"
              className="text-[10px] uppercase tracking-widest text-gray-400"
            >
              Price Range
            </label>
            <select
              id="price"
              className="border-none bg-transparent text-sm focus:ring-0 cursor-pointer font-light"
              aria-label="Filter by price"
            >
              <option>All Prices</option>
              <option>$1M - $5M</option>
              <option>$5M - $10M</option>
              <option>$10M - $20M</option>
              <option>$20M+</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label
              htmlFor="type"
              className="text-[10px] uppercase tracking-widest text-gray-400"
            >
              Property Type
            </label>
            <select
              id="type"
              className="border-none bg-transparent text-sm focus:ring-0 cursor-pointer font-light"
              aria-label="Filter by property type"
            >
              <option>All Types</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Hospitality</option>
              <option>Land</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          role="list"
        >
          {listings.map((listing) => (
            <article
              key={listing.slug}
              className="group"
              role="listitem"
            >
              <Link href={`/listings/${listing.slug}`} className="block">
                <div className="aspect-[4/3] overflow-hidden mb-6 group-hover:scale-[1.03] transition-transform duration-500">
                  <Image
                    alt={listing.title}
                    className="w-full h-full object-cover"
                    src={listing.image}
                    width={600}
                    height={450}
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-light tracking-wide uppercase font-display">
                    {listing.title}
                  </h2>
                  <p className="text-sm text-gray-400 tracking-wider">
                    {listing.location}
                  </p>
                  <div className="flex justify-between items-baseline border-t border-gray-100 pt-3 mt-4">
                    <span className="text-lg">{listing.price}</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">
                      {listing.beds} Bed | {listing.baths} Bath
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <nav
          className="mt-20 flex justify-center items-center gap-6"
          aria-label="Listings pagination"
        >
          <button
            type="button"
            className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors disabled:opacity-30"
            disabled
          >
            Previous
          </button>
          <div className="flex gap-4">
            <span className="text-sm border-b border-black">01</span>
            <button
              type="button"
              className="text-sm text-gray-400 cursor-pointer hover:text-black"
            >
              02
            </button>
            <button
              type="button"
              className="text-sm text-gray-400 cursor-pointer hover:text-black"
            >
              03
            </button>
          </div>
          <button
            type="button"
            className="text-[10px] uppercase tracking-widest hover:text-black transition-colors"
          >
            Next
          </button>
        </nav>
      </div>
    </>
  );
}
