import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import SessionProvider from "@/providers/session.provider";

import "./globals.css";

const dmsans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Draft - Build your squad. Ship your ideas | The blueprint for your next build.",
  description:
    "Draft is a minimalist, zero-friction hub where creators drop raw ideas and assemble the exact talent they need to execute them. It’s where side projects find their team.",
  metadataBase: new URL("https://draftt.harshitparmar.in"),
  openGraph: {
    title: "Draft - Build your squad. Ship your ideas",
    description:
      "Draft is a minimalist, zero-friction hub where creators drop raw ideas and assemble the exact talent they need to execute them.",
    url: "https://draftt.harshitparmar.in",
    siteName: "Draft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Draft Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draft - Build your squad. Ship your ideas",
    description:
      "A minimalist, zero-friction hub where creators drop raw ideas and assemble the exact talent they need to execute them.",
    creator: "@harxhitbuilds",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${dmsans.variable} ${inter.variable} `}>
      <body className="antialiased" suppressHydrationWarning>
        <SessionProvider>
          <main className="bg-background text-foreground">{children}</main>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}

// Ensure you drop a 1200x630 image named og-image.png in your /public folder