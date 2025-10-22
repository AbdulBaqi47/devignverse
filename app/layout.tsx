import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/providers";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devignverse.com"),
  title: {
    default: "Devign Verse — Supercharged Digital Launchpads",
    template: "%s | Devign Verse"
  },
  description:
    "Devign Verse blends strategy, storytelling, and engineering to help brands launch culture-making digital experiences.",
  keywords: [
    "Devign Verse",
    "creative agency",
    "Next.js studio",
    "motion design",
    "brand launch",
    "premium portfolio"
  ],
  manifest: "/manifest.json",
  openGraph: {
    title: "Devign Verse — Supercharged Digital Launchpads",
    description:
      "Devign Verse blends strategy, storytelling, and engineering to help brands launch culture-making digital experiences.",
    url: "https://devignverse.com",
    siteName: "Devign Verse",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Devign Verse — Supercharged Digital Launchpads",
    description:
      "Devign Verse blends strategy, storytelling, and engineering to help brands launch culture-making digital experiences.",
    creator: "@devignverse",
    images: ["/opengraph-image"]
  }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  maximumScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("relative min-h-screen text-[var(--foreground)] antialiased", manrope.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


