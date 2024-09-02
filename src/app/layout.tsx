import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["100"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Speedy Store",
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Stripe. Designed + Developed by karson.cc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "font-serif",
          inter.variable,
          fraunces.variable,
          "bg-brand-beige text-brand-green bg-repeat bg-[url('/assets/patterns/parkay-floor.svg')]"
        )}
      >
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
