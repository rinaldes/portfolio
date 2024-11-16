import type { Metadata } from "next";

const siteUrl = process.env.SITE_URL;
const twitterHandle = process.env.TWITTER;
const googleVerification = process.env.GOOGLE_VERIFICATION;

export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: "Rinaldes Duma" }],
  creator: "Rinaldes Duma",
  description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Check out my portfolio to see my latest projects and skills.",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  icons: {
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    icon: "/favicon.ico",
  },
  keywords: [
    "Full Stack Developer",
    "JavaScript",
    "Next.js Developer",
    "Node.js",
    "React Developer",
    "Software Engineer",
    "TypeScript",
    "Web Development",
  ],
  metadataBase: new URL(process.env.SITE_URL || 'https://rinal.dev'),
  verification: {
    google: googleVerification,
  },
  openGraph: {
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Check out my portfolio to see my latest projects and skills.",
    images: [
      {
        alt: "Rinaldes Duma - Full Stack Developer",
        height: 630,
        url: `${siteUrl}/og-image.png`,
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: "Rinaldes Duma Portfolio",
    title: "Rinaldes Duma | Full Stack Developer",
    type: "website",
    url: siteUrl,
  },
  publisher: "Rinaldes Duma",
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: {
    default: "Rinaldes Duma | Full Stack Developer",
    template: "%s | Rinaldes Duma"
  },
  twitter: {
    card: "summary_large_image",
    creator: twitterHandle,
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: [`${siteUrl}/og-image.png`],
    title: "Rinaldes Duma | Full Stack Developer",
  },
};
