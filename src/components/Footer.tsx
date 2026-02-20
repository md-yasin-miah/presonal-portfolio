import Link from "next/link";
import Image from "next/image";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCcBTkY2haMS-5YfA_bPutkacyrrFQP92Q-kZKgl6jlBn6aT40EydQAFyzd_J8ljwR2jlLRNLc_3lTt8oXqaCczDzhC1n2HhnuXNKzd5Gx7UboHWEbF3sFlfqphSvnU6qlp7vvlTlVZsqCrryGQVihDtfXd-rqyAWJf4y7rehVVfUn5WlsWX6eczV7jFl_9UhpRVSmycPvA2UaLbXGb8Pp2MxT7KcOLis_IuNTtsPPKDo9K7EdWyCwNHtU3QahrFkQC1y4Vx7qbibE";

const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "X / Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-brand-white py-20 border-t border-gray-100"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 items-center gap-16">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              alt="Steven D. Park Logo"
              className="h-5 opacity-80 mb-6"
              src={LOGO_SRC}
              width={100}
              height={20}
              unoptimized
            />
            <p className="text-[10px] text-brand-muted font-medium uppercase tracking-[0.4em]">
              © {currentYear} Steven D. Park Enterprises
            </p>
          </div>
          <nav
            className="flex justify-center gap-12"
            aria-label="Footer social links"
          >
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-muted hover:text-brand-mahogany transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="text-[10px] text-brand-muted font-medium uppercase tracking-[0.2em] text-center lg:text-right leading-relaxed">
            Confidential Real Estate Advisory.
            <br />
            <span className="text-brand-mahogany/60">
              Institutional Excellence Redefined.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
