import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stevendpark.com"),
  title: {
    default: "Steven D. Park | Real Estate Advisory",
    template: "%s | Steven D. Park",
  },
  description:
    "Implementing institutional-grade frameworks for high-net-worth real estate portfolios. Professional guidance for sophisticated investors who demand precision.",
  keywords: [
    "Steven D. Park",
    "real estate advisory",
    "luxury real estate",
    "investment strategies",
    "multifamily syndication",
    "high-net-worth",
  ],
  authors: [{ name: "Steven D. Park" }],
  openGraph: {
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
