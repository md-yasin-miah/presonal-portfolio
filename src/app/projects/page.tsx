import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated selection of landmark projects across the globe—architecture and development portfolio. Commercial, hospitality, and mixed-use.",
  openGraph: {
    title: "Projects | Steven D. Park",
    description:
      "Architecture & Development Portfolio. Landmark projects across the globe.",
  },
};

const projects = {
  commercial: [
    {
      title: "The Obsidian Tower",
      meta: "Chicago, IL — 2022",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCHOmS0eoLtxov3gAsR9pLuyu5BzWqtJsauqZVkwvUUh10pUMp0qkUcZOvRmkhBW5CtcklszKiwjPQ9TelnZw11rlUnG2e09_-flhRh-QbjMBXl2iJu2Zz6izAD2-qm34gTwM2d3cOnYWPDJVGrt2H1Uvs-bagbiAg3myH6c6Tu_C8lJ2MwbxpRwtqjaw8uJcVAeBVLAK3VCwAf8ML9id5dji-g-VzKSidMfZWJ9YVPPu3Oi0RuTABtpDdosIlO9viZ4L299px3V1E",
    },
    {
      title: "Nexus Corporate HQ",
      meta: "London, UK — 2023",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCk3w7oORE4FknF_3ul8MQOiP-_tEDgzAx5D_ulqI7tolqRH-xN6U2IDWRLaiUS8SNDa5J-JOe8ojNuq95hVuEen2WA5lQfCQIBRXLDWTE8atI3oOT_yOMrxd_Lx8QEqAyzYg819cil_4BS6jKncrBXKGfNGljyk6OX-cm445wD4_MgJ-_MV6FN2bqvlqZzmSXvaPn46bYTM6PnNOFnL1o4sOV-wdyh3smPyueZHCmgmHV4RNm3OeoJqYN5PLI059fhch07PYVA2Xg",
    },
  ],
  hospitality: {
    title: "The Azure Resort & Spa",
    meta: "Amalfi Coast, Italy",
    description:
      "A masterpiece of Mediterranean minimalism, integrating natural limestone features with panoramic ocean views. Awarded \"Best Coastal Design\" 2021.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjKBPzqCdBygXNd0K09aIuGtPtawwBi9HQQ458wo2osfB5O8x_5-sQlrI1jfRETmBuK9ZxrukjIiIgm4lqgyh-d6Ga0Sk8qWYYkGovoPQD3zJP2OIXRiwh4J2lGzU5RT6SWl5PJwhkY9cU7aXfungPCGFjsEFr0XCned7ltOhn6WI2AOnKGNPjND6qIkPcAt2ALbEciFkXe7MQC6D6H19jlq3l_jIrb2BZa7YMPTqXrwVCh0YUnmWlqJ5-xJaXrWldVMvuVDUsGOQ",
  },
  mixedUse: [
    {
      title: "The Commons",
      meta: "Seattle, WA",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC51forLq_wCSYKWSnkcjpUV8AgpXSRdraRyPIOLhB8fTI636CqPQAgdj16ObkqSseUKwspTJfNSURL0bWs3A5lX-iazEi-GppULJnnjIgBf1YWS5J0cnmu-G4dAHJ0mZUPhmEAR9eVl8DTgRkba9PsRx12MSpglRa8V6jRb4LCZls4lhctMS96gQZMsHH9j56bRwu4W538al4BQH6pJbs0lhj1J47bgQNFoItDO9fnlpHIhSd3rOw-bEPdroZLxMmUGcuFZusnNTo",
    },
    {
      title: "Harbor Plaza",
      meta: "Sydney, AU",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB4svHs13A-o0eUSwz1Kg8mbD2WZvKudEZLIkns1j9Y3hqjOKLBnf3UwF2yPK_ZuPu00uendUBzHIIP6Lu37H3V5mUiroddcd9KEFln3uEFnieZ5y-pyIlDgUYEJ8-g96yAWq6CSU8SHunsSfzAHx3Rg9HRDo0fKIljJA3ISLKeAEN6Y6JX6JtfPXnpApyswf7BUfkyFiH-3b-ps8bU0LiR7G4e5tXhAkcuP7KxVC4Pnxuv5Jn7QoiiaJKbQd895X4_rtMHDjQWlnc",
    },
    {
      title: "Elysian Square",
      meta: "Paris, FR",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDb7J3TDA7xZ9AwA12thjkUN9FpDetvQFOxst6gk37JGSXsJ-w7xZ_Q7hQaRHgknjybbzu8QhYJmcb--4SnUS47F7R506Jsap5rtezNHpVi02H876aQ0MWdL4eZOx3SAWUre05ssybY6sGopZ2raYfI9cSVYqPIbedDMekDIv1Rsl37lZqa2RQWiaP9xq_yeQeFoDYjHKKv6iGK4RUXab1_D3l1Kse65_f_z_fXiZReyC4QnyEzBZ3bl-rcsdo2zo2IGf-HfNPac4s",
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-normal leading-tight mb-8 font-display">
            Architecture & Development <br />
            Portfolio 2024
          </h1>
          <p className="text-lg text-gray-600 font-serif font-light leading-relaxed">
            A curated selection of landmark projects across the globe, focusing
            on the intersection of modern aesthetics and functional permanence.
          </p>
        </div>
      </section>

      <section
        className="py-20 px-6 border-t border-gray-100"
        id="commercial"
        aria-labelledby="commercial-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="commercial-heading" className="text-sm font-medium tracking-[0.2em] uppercase mb-12">
            01 / Commercial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.commercial.map((item) => (
              <article key={item.title}>
                <Link href="#" className="block group">
                  <div className="aspect-[4/5] bg-gray-50 overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-700">
                    <Image
                      alt={item.title}
                      className="w-full h-full object-cover"
                      src={item.image}
                      width={600}
                      height={750}
                    />
                  </div>
                  <h3 className="text-2xl font-display font-normal mt-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 italic mt-1">{item.meta}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6 bg-gray-50/50"
        id="hospitality"
        aria-labelledby="hospitality-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="hospitality-heading" className="text-sm font-medium tracking-[0.2em] uppercase mb-12">
            02 / Hospitality
          </h2>
          <article>
            <div className="aspect-[21/9] bg-gray-100 overflow-hidden mb-8 group hover:scale-[1.02] transition-transform duration-700">
              <Image
                alt={projects.hospitality.title}
                className="w-full h-full object-cover"
                src={projects.hospitality.image}
                width={1200}
                height={514}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-3xl font-display font-normal">
                  {projects.hospitality.title}
                </h3>
                <p className="text-sm text-gray-500 italic mt-1">
                  {projects.hospitality.meta}
                </p>
              </div>
              <div className="max-w-md">
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  {projects.hospitality.description}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        className="py-20 px-6 border-t border-gray-100"
        id="mixed-use"
        aria-labelledby="mixed-use-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="mixed-use-heading" className="text-sm font-medium tracking-[0.2em] uppercase mb-12">
            03 / Mixed-Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.mixedUse.map((item) => (
              <article key={item.title}>
                <Link href="#" className="block group">
                  <div className="aspect-square bg-gray-50 overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-700">
                    <Image
                      alt={item.title}
                      className="w-full h-full object-cover"
                      src={item.image}
                      width={500}
                      height={500}
                    />
                  </div>
                  <h3 className="text-xl font-display font-normal">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 italic mt-1">{item.meta}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
