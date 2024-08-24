import { GridTileImage } from "@/components/grid/tile";
import Link from "next/link";

type Money = {
  amount: string;
  currencyCode: string;
};

type Image = {
  url: string;
  altText?: string;
  width?: number;
  height?: number;
  position?: string;
};

type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
};

type Product = {
  handle: string;
  title: string;
  variants: ProductVariant[];
  images: Image[];
  featuredImage: Image;
  priceRange: {
    maxVariantPrice: Money;
  };
};

function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          position={item.featuredImage?.position}
          alt={item.featuredImage.altText || item.title}
          label={{
            position: size === "full" ? "bottom" : "bottom",
            title: item.title,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode,
          }}
        />
      </Link>
    </div>
  );
}

export function ThreeItemGrid() {
  // Sample product data for local testing
  const sampleProducts: Product[] = [
    {
      handle: "product-1",
      title: "Summer Vibes Vintage Dress",
      variants: [
        {
          id: "variant1",
          title: "Default Variant",
          availableForSale: true,
          selectedOptions: [{ name: "Size", value: "Medium" }],
        },
      ],
      images: [
        {
          url: "/assets/images/dress-1.webp",
          altText: "Summer Vintage Dress",
          position: "object-bottom",
        },
      ],
      featuredImage: {
        url: "/assets/images/dress-1.webp",
        altText: "Summer Vintage Dress",
        position: "object-bottom",
      },
      priceRange: { maxVariantPrice: { amount: "89.99", currencyCode: "USD" } },
    },
    {
      handle: "product-2",
      title: "Simple Vintage Watch",
      variants: [
        {
          id: "variant2",
          title: "Default Variant",
          availableForSale: true,
          selectedOptions: [{ name: "Color", value: "Blue" }],
        },
      ],
      images: [
        {
          url: "/assets/images/watch-1.webp",
          altText: "Vintage Watch",
          position: "object-center",
        },
      ],
      featuredImage: {
        url: "/assets/images/watch-1.webp",
        altText: "Vintage Watch",
        position: "object-center",
      },
      priceRange: { maxVariantPrice: { amount: "29.99", currencyCode: "USD" } },
    },
    {
      handle: "product-3",
      title: "Classic Low-Top Shoes",
      variants: [
        {
          id: "variant3",
          title: "Default Variant",
          availableForSale: true,
          selectedOptions: [{ name: "Material", value: "Cotton" }],
        },
      ],
      images: [
        {
          url: "/assets/images/shoes-1.webp",
          altText: "Sample Product 3",
          position: "object-center",
        },
      ],
      featuredImage: {
        url: "/assets/images/shoes-1.webp",
        altText: "Sample Product 3",
        position: "object-center",
      },
      priceRange: { maxVariantPrice: { amount: "39.99", currencyCode: "USD" } },
    },
  ];

  const [firstProduct, secondProduct, thirdProduct] = sampleProducts;

  return (
    <section className="mx-auto w-full grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 min-h-[700px] h-[calc(100svh-375px)] lg:max-h-[calc(100vh-375px)]">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
