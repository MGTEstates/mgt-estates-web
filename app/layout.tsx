import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body>  <Navbar />  <main>    {children}  </main>  <Footer /></body>
    </html>
  );
}