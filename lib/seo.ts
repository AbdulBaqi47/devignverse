import type { DefaultSeoProps } from "next-seo";

export const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s | Devign Verse",
  defaultTitle: "Devign Verse — Innovating Digital Experiences",
  description:
    "Devign Verse architects glassmorphism digital products, cinematic interfaces, and AI-led platforms for ambitious teams.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devignverse.com",
    siteName: "Devign Verse",
    title: "Devign Verse — Innovating Digital Experiences",
    description:
      "Devign Verse architects glassmorphism digital products, cinematic interfaces, and AI-led platforms for ambitious teams.",
    images: [
      {
        url: "https://devignverse.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Devign Verse — Premium IT Experiences"
      }
    ]
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@devignverse",
    site: "@devignverse"
  },
  additionalLinkTags: [
    { rel: "icon", type: "image/png", href: "/favicon.ico" }
  ]
};
