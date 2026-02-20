/**
 * Centralized mock listing data.
 * Used by: /listings, /listings/[slug], sitemap
 */

export interface ListingCard {
  slug: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  image: string;
}

export interface ListingDetail extends ListingCard {
  sqft: number;
  heroImage: string;
  description: string[];
  amenities: string[];
  agentImage: string;
  address: string;
}

const defaultDescription = [
  "Nestled within the private gates of Bel Air, this residence represents the pinnacle of modern architectural design. Conceived by renowned firm Harrison & Woods, this property seamlessly integrates indoor and outdoor living through expansive floor-to-ceiling glass walls that frame panoramic views of the canyon and city lights.",
  "The main level features an open-concept floor plan with European white oak flooring, a chef's kitchen outfitted with Sub-Zero and Wolf appliances, and a formal dining area that opens onto a wrap-around terrace. The primary suite serves as a private sanctuary, complete with a dual-sided fireplace, private balcony, and a spa-inspired bathroom finished in Italian Carrara marble.",
  "Additional amenities include a state-of-the-art home cinema, a temperature-controlled wine cellar, and a zero-edge infinity pool that appears to spill into the horizon. This is more than a home; it is an experience of unparalleled luxury and tranquility.",
];

const defaultAmenities = [
  "Infinity Edge Pool & Spa",
  "4-Car Gallery Garage",
  "Smart Home Automation",
  "Professional Gym & Sauna",
  "Outdoor Kitchen & Firepit",
  "Gated Private Driveway",
];

const agentImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBBAdChiWHhRWafxjkRLYi9NhaOQCdKpubb0YTBPtwAljlqJnqgIZ9Fr9i85DVDVfioeZ57gRJkd4Y_9kuYevVQaAHzCmFJdQGu_SOTejdLJJzV3iEBgECdPp1eTv1_T_kYpuN1NhlA4kziHJ2mV9KH2ifFrVmeRGcvkn5ciFgOfevuhh1h0rmUblNvciHK9FHTVuKopIY9ER2VAYb6DS9NAvbYpjz2jWcJTt6bTCLt17yEFZPUuKslt3odkgPnQoBuVLlg7NyPyTg";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDwW8Im2qjxqq7ysw8KeRGp_F8vhndu1ugPjkWLshAEXlEYj_AHutdQlwswL2YSZrmFA1GeNS7Honv48AvipoWOALpBjV2wpu8NdXrqyWz8zuUIytfKiT9dueAeRxltk6InNW8MGQuGCvPb7zq68YptMUmUilE1gSNas8dPIgvku_Ss5hpo_DVCsoMNbLEseLqpSFJgQGMnvCY1mjHOAODLoAoQQHzaD2PI7y_pFkLTwgFQaa5xE7le9q9dgASYE_j-mxLVPozz5kg";

/** Full listing data (card + detail). Includes all fields for single-page view. */
const LISTINGS_FULL: Record<string, Omit<ListingDetail, "slug" | "image"> & { image: string }> = {
  "the-glass-pavilion": {
    title: "The Glass Pavilion",
    location: "Malibu, California",
    price: "$12,500,000",
    beds: 5,
    baths: 6,
    sqft: 6200,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHk_FPweOsOTUCvJJkFXQTKGSP_AtCOiXgQLiA8EiVtjgE1xvfUrtPlkpSiNvmzwXxRRQk_KvZ3k0LYo0irvYW-dC6GXyiwbDzbdDcKRxQKG3WPvD2iv5UvnDKOP73oiDorsqHKzeyaXsUV7pdPRYuhghpepVddsWBpInXll9YiqBilszYsAUOAH1OD9CwBubZIZpZ6wZ6Sen4GYSUhWB764Er7Yq8AMKLMqDKoEjyKAp8evp-MfQgPIC29JqAREJIzRKJNqzl0VE",
    heroImage,
    description: defaultDescription,
    amenities: defaultAmenities,
    agentImage,
    address: "842 Sycamore Ln, Bel Air, CA",
  },
  "the-sycamore-residence": {
    title: "The Sycamore Residence",
    location: "Bel Air, California",
    price: "$8,450,000",
    beds: 5,
    baths: 6.5,
    sqft: 6200,
    image: heroImage,
    heroImage,
    description: defaultDescription,
    amenities: defaultAmenities,
    agentImage,
    address: "842 Sycamore Ln, Bel Air, CA",
  },
};

/** Summary-only listings (used for cards; detail page uses default template) */
const LISTINGS_SUMMARY: Record<
  string,
  { title: string; location: string; price: string; beds: number; baths: number; sqft: number; image: string }
> = {
  "oak-ridge-estate": {
    title: "Oak Ridge Estate",
    location: "Beverly Hills, California",
    price: "$18,750,000",
    beds: 7,
    baths: 9,
    sqft: 12000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBm4ztCG64-1YWisXrP-MKNA61uNuePuoHfQkHGvL9zwCUAEbzgU477wJ5xXtjKrV_X0Fk_q7hPZ8V8BXjku3Yn_uTZR9FfAIvc46IMyFdji72zrddad0Bp0EgUcDj0RAZpUyT2BZV9vNpy3IdAyVG0w7ZIneUJ2ILS1Uu_9o-b-cuQTXeRbl40_BBWc3fnTvGI7ADPp41rQPbE0gLpzAGXHQF86M6Zg49qAUt6D5OTKPonRgPudWaBUrqFV00LKeNFFZBpcxv5cP8",
  },
  "the-zenith-penthouse": {
    title: "The Zenith Penthouse",
    location: "Santa Monica, California",
    price: "$8,900,000",
    beds: 3,
    baths: 4,
    sqft: 4200,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTidzqa_ph0Ge_lU08VdpmNkOxdI-ZZFn0ZLTb56VsJuaV09-U2ZsBHEH7_1dtstImRi0kk5742t_5Y1XlB4VEMNZJsiJ-JJ2mwCLgezpzxQ7mov7haSmn8wAtALwz6EJnTDaEAfB4YOiDra3VgisG-dCd0dqVwHnfE4VZoe53k428VI0avERe5SQC7M9LLOMS3Y-PzDt4sHHtS3gqscZLOXbdu0K9GLoo2CPo_gDB_Vy5swUDwsbSfGAZse5yX7RfwsG7Yl6-Wjo",
  },
  "ocean-crest-residence": {
    title: "Ocean Crest Residence",
    location: "Pacific Palisades, California",
    price: "$24,000,000",
    beds: 6,
    baths: 8,
    sqft: 8500,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2N1nHfoFoXqKr4Snvsd_zDgWGramAtc8HnkeMTkDzGqDwHjq8O3R1wnLxMvseYqkSNb0wh7Jm6nbY18KezCnFKMqQC-Ua5jg5MsaULyvMiMawuYhOeNyiGd_knz0ebYmFk6SRH9JNOv917VOB6vthB1V_Q-pMPnktOi6t6MGexK9YTlDcyDlKX8YUFHm7veolDp4GjW_j65c9S2l2Rr0YSzfHNMthZAhGJIckMS0--JQyw1kzA6fOve37u02FkINGmr5F-KLWM_4",
  },
  "shadow-hills-villa": {
    title: "Shadow Hills Villa",
    location: "Bel Air, California",
    price: "$15,200,000",
    beds: 5,
    baths: 5,
    sqft: 6800,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgaVZ7IXYHm3srOJe-3wJ4yeej42PYHKuBrTKn9qLl8QEqr6x_gtxiSmMf10NbePMewOYi0mFLkpSbtRrw3smgGjjwPwH1yK851iyN0oOM_SaniI8McdgzSgtye6CUIEE0zGjwwu-m8Sg3sY-cFYCR59czqxBIbi_JMbM5T4kob2mN9cjRvyvBC3HE9u-xURd8XL_KmzTDJT9dAeicae1IY59TDDxXNX6XlCLB6a8d2BKyVfS_HZ-IWS-QBQf3QPwcTv_mwFraWhM",
  },
  "casa-de-la-guerra": {
    title: "Casa De La Guerra",
    location: "Santa Barbara, California",
    price: "$9,750,000",
    beds: 4,
    baths: 4,
    sqft: 5200,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgmdaNL_7wz1cRp_X5euwQspnBv1XUHBTq96I4ImXAnKe9Qp7MfGawAHRoIFa_pE6kxMtRIhg41gvhDavhUr8eBLu6wVz8DaHosU3LJnfwwyhJQcTisUfe6IRTC0wHrpqD1jSXoMxMK7eZBWFaek3wNXLFEAUhS2ceWgioLrqAj5lwm_-apX7-ZCB3Bz_GiTUO8XXC1DMTyY2xj1zbQ65YHsTeZOrTac-E3M_j3RJowM7mvur2FBiK_EMB8j83w_CzbslkBo2Rrsk",
  },
};

/** All listing slugs (for static params, sitemap, etc.) */
export function getListingSlugs(): string[] {
  return [...Object.keys(LISTINGS_FULL), ...Object.keys(LISTINGS_SUMMARY)];
}

/** Listing cards for grid view (listings page, not-found page) */
export function getListings(): ListingCard[] {
  const full = Object.entries(LISTINGS_FULL).map(([slug, l]) => ({
    slug,
    title: l.title,
    location: l.location,
    price: l.price,
    beds: l.beds,
    baths: l.baths,
    image: l.image,
  }));
  const summary = Object.entries(LISTINGS_SUMMARY).map(([slug, l]) => ({
    slug,
    title: l.title,
    location: l.location,
    price: l.price,
    beds: l.beds,
    baths: l.baths,
    image: l.image,
  }));
  return [...full, ...summary];
}

/** Available listings with heroImage (for ListingNotFound grid) */
export function getAvailableListings(): (ListingCard & { heroImage: string })[] {
  return getListings().map((l) => ({
    ...l,
    heroImage: LISTINGS_FULL[l.slug]?.heroImage ?? heroImage,
  }));
}

/** Full listing detail by slug (for single page). Returns null if not found. */
export function getListing(slug: string): ListingDetail | null {
  const full = LISTINGS_FULL[slug];
  if (full) {
    return { ...full, slug };
  }
  const summary = LISTINGS_SUMMARY[slug];
  if (!summary) return null;
  const firstFull = Object.values(LISTINGS_FULL)[0];
  return {
    slug,
    title: summary.title,
    location: summary.location,
    price: summary.price,
    beds: summary.beds,
    baths: summary.baths,
    image: summary.image,
    sqft: summary.sqft,
    heroImage,
    description: firstFull?.description ?? defaultDescription,
    amenities: firstFull?.amenities ?? defaultAmenities,
    agentImage,
    address: summary.location,
  };
}
