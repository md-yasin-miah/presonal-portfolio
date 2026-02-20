import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transactions",
  description:
    "Proven track record. Portfolio & transactions. Volume sold $485M+. Past transactions and active inventory across Los Angeles luxury real estate.",
  openGraph: {
    title: "Transactions | Steven D. Park",
    description: "Past transactions and active inventory. Performance defined.",
  },
};

const PAST_TRANSACTIONS = [
  {
    address: "821 Bel Air Road",
    city: "Los Angeles, CA 90077",
    price: "$24,500,000",
    date: "Oct 14, 2023",
    status: "Closed",
    ref: "MLS #23-4412",
  },
  {
    address: "1502 Sunset Plaza Dr",
    city: "West Hollywood, CA 90069",
    price: "$12,850,000",
    date: "Sep 28, 2023",
    status: "Closed",
    ref: "MLS #23-3982",
  },
  {
    address: "227 N Tigertail Rd",
    city: "Brentwood, CA 90049",
    price: "$9,200,000",
    date: "Aug 12, 2023",
    status: "Closed",
    ref: "MLS #23-1105",
  },
  {
    address: "454 Cuesta Way",
    city: "Bel Air, CA 90077",
    price: "$18,400,000",
    date: "Jul 30, 2023",
    status: "Closed",
    ref: "MLS #23-0941",
  },
];

const ACTIVE_INVENTORY = [
  {
    title: "1122 Nightingale Drive",
    location: "The Bird Streets, Los Angeles",
    price: "$14,995,000",
    beds: 5,
    baths: 7,
    sqft: "8,240 SF",
    badge: "Just Listed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkmdJ-kMgvDKMFTswcfihMVWVa_grt_GlCyyWCyYa-a01kCqw_5qtctJVtaqlgVfGcD8OlpJpzPPGpsmVc0EEOqQNepl78vAyCl3h1fc7ucrV10fJE7-JCVLadiu7QexVWA9_PGqKcvpi2dYombu5cdyefpcHFILNIeyqDI6_8l-jIdqcoAIno755PweBULPPC9FXM3AvBbe5p42VzrOO188aHm3wwYcG8yk7t4K7x4vmNXbdZI5gQMKBz8MkioNq9-f1TNcTDlZ4",
  },
  {
    title: "20405 Pacific Coast Hwy",
    location: "Malibu, CA 90265",
    price: "$8,450,000",
    beds: 4,
    baths: 5,
    sqft: "4,100 SF",
    badge: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmiv6dPn682SWp8eCIv5VcVAtmCKstvtFGLx7B3w5obtVupd_CLcWGRokOL1t2lQEzQ5bUNjXZk2DIkkqrHo7Gml3YtUJM4gbQ_fXbz3eZJgiISmEWog7a6KcookW5XlWLptulIZ6Tsgf_JNqyoyF5JLPmflp5E7vSkOqdqGUWvPRQVfAJqGxdryTHPr3U9ctWkwObol_zBQ_48qhymmAnTobp2P6Cr_IN5BV1rEniaNiIN8z-1a503kl1szgzQGPytq-UbpEPTOg",
  },
  {
    title: "944 N Croft Avenue",
    location: "West Hollywood, CA 90069",
    price: "$5,900,000",
    beds: 3,
    baths: 4,
    sqft: "3,450 SF",
    badge: "Exclusive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT0XMUiCS8HQtawe1Yum9f2-a_xkiojaaWqoSPTG0XkhvQ22Dj_zSVuJJYLu7LG6cNvvnNXLNn_Hu3U2BKCIPpzyG2HRVTZMwGP4ovE-ZysTwPaxu4ijukrixY-2isJK-4gTy40n-s7AXZ49krd9lbovCp8deKq9oVoO3qqK08zoOp5_prDJWh4MGOgLJhIbqXgVvJbHclfHnzaxREr5L5Bjv-OGOvl7r4GfqllrFoSME6Yh0wV54Cxqt_qxIPqNKgE3b48WkLti0",
  },
  {
    title: "717 N Beverly Drive",
    location: "Beverly Hills, CA 90210",
    price: "$19,750,000",
    beds: 7,
    baths: 9,
    sqft: "12,500 SF",
    badge: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmWBtiPEDosTSBrTBkkK3PmP-XyrAKotoKZ0by1rJcS0-Do2yoKKCUV71mUm4e_S7ZrJKquKxMFeFOEhZG4AbkaZkin1ROrfOC8rB5SJrk-_UJjSI9bNTKjMMI5DP7LwiN1MonmJiO-AaqTXsap5JCizMaBl21XoaATxOtepD0U0VQ0usc-AkBeYEzRaNh5Jg_5L8d-luuwmoviBxx3Gu94UEJ_n3LodSpWsjH8EPwhT79tdZWgYdAaV5xI2AQi5fGDvlVShNxQ_8",
  },
];

export default function TransactionsPage() {
  return (
    <>
      <section className="mb-24 max-w-7xl mx-auto px-8 py-16">
        <nav
          className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="material-symbols-outlined text-[10px]!">
            chevron_right
          </span>
          <span className="text-black">Portfolio & Transactions</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.1] text-black font-display">
              Proven Track Record <br />
              <span className="text-gray-500 italic text-3xl md:text-4xl mt-2 block">
                Performance Defined.
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 border-l border-gray-100 pl-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                Volume Sold
              </p>
              <p className="text-2xl font-display font-normal">$485M+</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                Active
              </p>
              <p className="text-2xl font-display font-normal">12</p>
            </div>
            <div className="hidden lg:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                Avg DOM
              </p>
              <p className="text-2xl font-display font-normal">18</p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-500">
                receipt_long
              </span>
              Past Transactions
            </h2>
            <div className="flex gap-6">
              <button
                type="button"
                className="text-[10px] tracking-widest text-gray-500 hover:text-black transition-colors"
              >
                EXPORT DATA
              </button>
              <span className="text-[10px] tracking-widest font-semibold border-b border-black">
                ALL YEARS
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] font-medium uppercase tracking-widest text-gray-500 border-b border-gray-100">
                  <th className="pb-6 font-medium">Property Address</th>
                  <th className="pb-6 font-medium">Sale Price</th>
                  <th className="pb-6 font-medium">Date Sold</th>
                  <th className="pb-6 font-medium">Status</th>
                  <th className="pb-6 font-medium text-right">Reference</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {PAST_TRANSACTIONS.map((row) => (
                  <tr
                    key={row.ref}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-6">
                      <div className="font-display text-base text-black">
                        {row.address}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-1">
                        {row.city}
                      </div>
                    </td>
                    <td className="py-6 font-display text-black">
                      {row.price}
                    </td>
                    <td className="py-6 text-gray-500">{row.date}</td>
                    <td className="py-6">
                      <span className="text-[9px] tracking-widest uppercase border border-gray-200 px-2 py-0.5 rounded-full text-gray-500">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-6 text-right text-[10px] text-gray-500 font-light">
                      {row.ref}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl font-display font-normal tracking-tight">
              Active Inventory
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative border-b border-gray-200">
                <input
                  type="text"
                  placeholder="Filter by area..."
                  className="bg-transparent border-none py-2 pl-8 pr-4 text-xs focus:ring-0 w-64 placeholder:text-gray-300"
                  aria-label="Filter by area"
                />
                <span className="material-symbols-outlined absolute left-0 top-1.5 text-gray-400">
                  search
                </span>
              </div>
              <select
                className="bg-transparent border-none text-[10px] uppercase tracking-widest focus:ring-0 cursor-pointer"
                aria-label="Sort"
              >
                <option>Sort by Price</option>
                <option>Sort by Newest</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {ACTIVE_INVENTORY.map((item) => (
                <article key={item.title} className="group">
                  <Link href={`/listings/${item.title.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                    <div className="relative aspect-4/5 overflow-hidden bg-gray-50 mb-4">
                      <Image
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={item.image}
                        width={400}
                        height={500}
                      />
                      {item.badge && (
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[9px] tracking-[0.2em] font-medium px-3 py-1.5 uppercase">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-display font-normal tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 tracking-wide uppercase">
                      {item.location}
                    </p>
                    <p className="text-sm font-display font-normal mt-2">
                      {item.price}
                    </p>
                    <div className="flex items-center gap-4 pt-3 text-[10px] text-gray-500 border-t border-gray-50 mt-4">
                      <span>{item.beds} Beds</span>
                      <span className="w-px h-2 bg-gray-200" />
                      <span>{item.baths} Baths</span>
                      <span className="w-px h-2 bg-gray-200" />
                      <span>{item.sqft}</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            <div className="lg:col-span-5 sticky top-32 h-[calc(100vh-160px)] min-h-[600px] border border-gray-100 bg-gray-50 overflow-hidden relative">
              <Image
                alt="Map"
                className="w-full h-full object-cover grayscale contrast-75 opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs6Y-Oas9rkm4M9rZoLMky0o-rlUe7J44-O-U7u6-8TLuicihu7t7N8xRZdjl1U6RaJ29gmuRWFbOOa8oVjw0KvhmXqLkaH_UWF5RULRqlgUcAvwdjczEKIr9KItU-ZWT5DoOGMGtcJ8wwlfqUYJWIOSPgTkDfk7OfbLFJ4Op2Q4IdgnQdGLxjC_CRaFtlVuRUEO-YMuoqYiQFWffl6X2xBj6mhs9gQZKj9bNf0fbl-VPsIZnwX80pK2VwhItrE6EuP47Ep53C6yg"
                fill
                sizes="42vw"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                <div className="bg-white/95 backdrop-blur-sm p-6 border border-gray-100 shadow-sm pointer-events-auto">
                  <p className="text-[10px] font-medium uppercase tracking-widest mb-1 text-black">
                    Interactive Map
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Discover available estates across Los Angeles.
                  </p>
                  <button
                    type="button"
                    className="w-full mt-4 py-3 border border-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
                  >
                    Expand View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-normal text-black mb-8 uppercase tracking-[0.15em] font-display">
            Valuation Request
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-12 max-w-xl mx-auto font-light">
            Interested in the current market value of your residence? Steven
            provides discreet, data-driven valuations for the world&apos;s most
            significant estates.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-10 py-3.5 bg-black text-white text-[10px] uppercase tracking-[0.3em] hover:bg-gray-800 transition-all"
            >
              Get Evaluation
            </Link>
            <Link
              href="/contact"
              className="px-10 py-3.5 border border-black text-black text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
            >
              Inquire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
