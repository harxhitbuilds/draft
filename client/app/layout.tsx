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
