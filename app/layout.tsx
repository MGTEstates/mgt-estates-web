import type { Metadata } from "next";
import {
  Inter,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "MGT Estates",
  description: "Luxury Representation Without Compromise.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "MGT Estates",
  url: "https://mgtestates.com",
  email: "michael@mgtestates.com",
  telephone: "+1-832-403-4664",
  areaServed: [
    "The Woodlands, TX",
    "Montgomery County, TX",
    "Conroe, TX",
    "Kingwood, TX",
  ],
  sameAs: [
    "https://instagram.com",
    "https://linkedin.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}