"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCcBTkY2haMS-5YfA_bPutkacyrrFQP92Q-kZKgl6jlBn6aT40EydQAFyzd_J8ljwR2jlLRNLc_3lTt8oXqaCczDzhC1n2HhnuXNKzd5Gx7UboHWEbF3sFlfqphSvnU6qlp7vvlTlVZsqCrryGQVihDtfXd-rqyAWJf4y7rehVVfUn5WlsWX6eczV7jFl_9UhpRVSmycPvA2UaLbXGb8Pp2MxT7KcOLis_IuNTtsPPKDo9K7EdWyCwNHtU3QahrFkQC1y4Vx7qbibE";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/listings", label: "Listings" },
  { href: "/investor", label: "Investor" },
  { href: "/art-design", label: "Art & Design" },
  { href: "/transactions", label: "Transactions" },
  { href: "/contact", label: "Contact", isButton: true },
];

export function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-50 transition-transform duration-300 ease-in-out",
          isVisible || pathname.includes("/listings")
            ? "translate-y-0"
            : "-translate-y-full",
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <Link
              href="/"
              className="flex items-center gap-4"
              aria-label="Steven D. Parks - Home"
            >
              <Image
                alt="Steven D. ParkS Logo"
                className="h-6 w-auto"
                src={LOGO_SRC}
                width={120}
                height={24}
                unoptimized
              />
              <span className="font-sans font-semibold text-[11px] tracking-[0.35em] uppercase text-brand-black">
                Steven D. Parks
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center flex-wrap gap-5">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      item.isButton
                        ? "border px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 border-brand-mahogany"
                        : "nav-link transition-colors duration-300",
                      item.isButton && active && "bg-brand-mahogany text-white",
                      item.isButton &&
                        !active &&
                        "text-brand-mahogany hover:bg-brand-mahogany hover:text-white",
                      !item.isButton &&
                        active &&
                        "text-brand-mahogany! font-semibold!",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={cn(
                  "block w-6 h-[1.5px] bg-brand-black transition-all duration-300 origin-center",
                  mobileOpen && "rotate-45 translate-y-[7.5px]",
                )}
              />
              <span
                className={cn(
                  "block w-6 h-[1.5px] bg-brand-black transition-all duration-300",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block w-6 h-[1.5px] bg-brand-black transition-all duration-300 origin-center",
                  mobileOpen && "-rotate-45 -translate-y-[7.5px]",
                )}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100",
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "py-3 text-[11px] font-semibold uppercase tracking-[0.25em] border-b border-gray-50 transition-colors duration-200",
                    item.isButton
                      ? "mt-4 border border-brand-mahogany text-center py-4 text-brand-mahogany hover:bg-brand-mahogany hover:text-white"
                      : active
                        ? "text-brand-mahogany"
                        : "text-brand-black hover:text-brand-mahogany",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
