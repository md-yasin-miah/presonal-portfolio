/**
 * Centralized mock investor/venture data.
 */

export const BOUTIQUE_HOTEL_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0EvbswgfTTXDv3Z3lOveu6MCt7cIT1rU_vc8Q8ig6u8idkNk7At2mmZH8jF8ujPNMie1MmFlz1_DVe5fzuv42uqO8z6bC4pXcREez3v02LHo_iMvmYRUVmLOixZ-A8I8RtB87fi2tp-z0pGh_mKtfQ3Neip6f1fe3dCBvpv6KrvfXK0oV8CaYbAIDWbDOWHCu2HNhqrV2Ns4dNp64f3jsbnjvTbab_aFoCXyXdqI-HyGSdUbs5rRYS49Hw8ACGA-dPCULKJrUAnE";

export const INDUSTRIAL_COFFEE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtLNQ7VbhQaSgrwCSTQAgMMoOpt24ADM3f5uVW6uPcWsKmRFJdokL2c_j0WdLSlh8cKy87PxFcP5YLSjY0SurVR05NbbOeuzuHXLeoIiqePniE6EpjZMi0Acs71RHSElJFAiCKNJEnTuOA3DvcrP9gMe6fUBIeBZX9iiUZX9xLNu4UllykLFjG9DaSCytj0SZPB-xwIJ4PtV0u-_W_lBfsTaMABHMMIP0QyFQ7I7KQSfSezQQxEvBiCBlxPC8VPvUt4AGzH9N3l54";

export const FEATURED_VENTURES = [
  {
    id: "01",
    label: "01 Boutique Hotel",
    title: "The Boutique Hotel",
    description:
      "A flagship luxury hospitality project that transformed a historic downtown landmark into a 120-room sanctuary of modern design.",
    image: BOUTIQUE_HOTEL_IMAGE,
    grayscale: "grayscale-[0.5]",
    opacity: "opacity-40",
    cardData: {
      "Property Type": "Hospitality",
      Investment: "$42.5M",
      Strategy: "Adaptive Reuse",
      Theme: "Cinematic Noir",
    },
    progress: { label: "Project Completion", value: 100 },
    layout: "left", // content left, card right
  },
  {
    id: "02",
    label: "02 Industrial Coffee",
    title: "Industrial Coffee Shop",
    description:
      "A brutalist-inspired multi-use space that serves as an anchor for the emerging Arts District, combining specialty coffee with high-end workspace.",
    image: INDUSTRIAL_COFFEE_IMAGE,
    grayscale: "grayscale-[0.8]",
    opacity: "opacity-30",
    cardData: {
      "Property Type": "Commercial Retail",
      Investment: "$8.2M",
      Strategy: "Value-Add",
      Theme: "Brutalist Zen",
    },
    progress: { label: "Lease Occupancy", value: 94 },
    layout: "right", // content right, card left
  },
];

export const URBAN_LOFTS = [
  {
    location: "San Francisco, CA",
    title: "Pacific Tech Plaza",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXCXbCrP1II5GWh-Zv4vMVOdy0AdiIi7Y9UoudGwoKhu7ovu1NRSagHMtmTnfPhju2A4DUXr9ZoSlKSH_0LqvrAVHqqbNwUvM4moJSmPojBg_UQkPOOyvJ5nU9pn-sZfy34J-F1FhgHEOa6Bfflsb2Hfg-3DdkoQoPJERM7K8i0sMmMBvR5EKNbnAm6jAD2eUgQvaUPJ_P_YwUUI1KdGkkDjNl1qio7ouCt7Y1Vc6i0cVCadYwvp6ycpfaTes6tHQRV5cFUuBYgG0",
  },
  {
    location: "Austin, TX",
    title: "The Hive Coworking",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLjpP5yt_hGSCPMKHl1uPukGA8huCFzWs7KGn2CZuT6jJE3MB02IFNXZL2AUEFQccLhST5T0y5qHJri6MwrVCnh4oDD-lnbzc0il_3ccu6GO9whcSNnL6zPa-m823Guad7IFnmBMfI08j6Ay1G6uR74G_k2kre5lva8HYVUMVPi8BYXbZPaet4k-XFEfd4eUwNpA1H0ZfwdzpvFIA5MzvJm2vZNsbDjcDvSiZY1hfJSxFibi4ASl3WDRs_fe_bVr4bgrCHXKHvTcc",
  },
  {
    location: "Chicago, IL",
    title: "Skyline Residencies",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXaFK7JVXRY67ileGwExhAT-Nc0wUMAWOUV0RihOB4TAZyHM5jBPIUL3G1bLkKmrZ7Zzxlm09Xe9Yuuvn4inhEX8MguOVhpaSuegXcuPwV22fb6H-Wx-Aud1C2wdxsgtCXfYMCZmv_9Ek7fTWrAbZntLbfw2j_ILEIfe1i1K1MHiJ5A1xzfrWZHphtZ9m0MfhWdve9k_GvAI8UUPvApJMAsW4f-1WnKy4UqWBuXWJmGib3ql6MFQX8dDBSpdIY3NSf5mCxaCmYb00",
  },
];
