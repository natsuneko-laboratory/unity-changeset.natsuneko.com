import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { merge } from "@/lib/class";
import { Footer, Header } from "@natsuneko-laboratory/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // globals
  generator: "Next.js",
  applicationName: "Unity Changesets",
  keywords: ["Natsuneko", "Natsuneko Laboratory"],
  authors: [{ name: "Natsuneko", url: "https://natsuneko.cat" }],
  creator: "Natsuneko",
  publisher: "Natsuneko",

  // per page
  title: {
    template: "%s | Natsuneko Laboratory",
    default: "Natsuneko Laboratory",
  },
  description:
    "Unity Changesets is useful website for searching fully identifies the version of the Unity Editor. Although you don't see it during normal use, it is used in situations where you need the complete version, such as when installing Unity from the Unity Hub via the command line.",

  // ogp
  openGraph: {
    title: {
      template: "%s | Natsuneko Laboratory",
      default: "Natsuneko Laboratory",
    },
    siteName: "Natsuneko Laboratory",
    type: "website",
  },

  // twitter
  twitter: {
    card: "summary",
    title: {
      template: "%s | Natsuneko Laboratory",
      default: "Natsuneko Laboratory",
    },
    creator: "@6jz",
  },
};

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const brand = {
    alt: "logo",
    title: "Unity Changesets",
    src: {
      dark: "logo.png",
      light: "logo.png",
    },
    width: 36,
    height: 36,
  };

  const logo = {
    dark: "/natsuneko-laboratory-dark.png",
    light: "/natsuneko-laboratory-light.png",
    width: Math.floor(1216 / 6),
    height: Math.floor(358 / 6),
  };

  return (
    <html lang="en" className="scroll-pt-20">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffbfff" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body
        className={merge(
          "grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] bg-neutral-800 text-neutral-200",
          inter.className
        )}
      >
        <Header brand={brand} href="/" />
        {children}
        <Footer logo={logo} />
        <Analytics />
      </body>
    </html>
  );
}
