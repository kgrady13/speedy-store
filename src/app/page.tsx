import { Carousel } from "@/components/carousel";
import { ThreeItemGrid } from "@/components/grid/three-items";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Speedy Store",
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Stripe. Designed + Developed by karson.cc.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="">
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </main>
  );
}
