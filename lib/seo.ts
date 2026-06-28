import type { Metadata } from "next";

export const siteConfig = {
  name: "MGT Estates",
  url: "https://mgtestates.com",
  description:
    "Luxury real estate advisory for buyers, sellers, investors, and relocation clients in Montgomery County, The Woodlands, and Greater Houston.",
  socialImage: "/images/michael-thomson.jpg",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "none",
            "max-snippet": -1,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.socialImage,
          width: 2048,
          height: 1638,
          alt: `${siteConfig.name} luxury real estate advisory`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: siteConfig.socialImage,
          alt: siteConfig.name,
        },
      ],
    },
  };
}