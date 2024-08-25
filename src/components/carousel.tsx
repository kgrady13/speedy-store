import Link from "next/link";
import { GridTileImage } from "@/components/grid/tile";

export type Product = {
  handle: string;
  title: string;
  variants: ProductVariant[];
  images: Image[];
  featuredImage: Image;
  priceRange: {
    maxVariantPrice: Money;
  };
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
  position?: string;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export async function Carousel() {
  const products: Product[] = [
    {
      handle: "stylish-watch",
      title: "Vintage Lightwash Jeans",
      variants: [
        {
          id: "1",
          title: "Silver",
          availableForSale: true,
          selectedOptions: [
            {
              name: "Color",
              value: "Silver",
            },
          ],
          price: {
            amount: "199.99",
            currencyCode: "USD",
          },
        },
      ],
      images: [
        {
          url: "/assets/images/hat-1.webp",
          altText: "Vintage Lightwash Jeans",
          width: 600,
          height: 600,
        },
      ],
      featuredImage: {
        url: "/assets/images/jeans-1.webp",
        altText: "Vintage Lightwash Jeans",
        width: 600,
        height: 600,
        position: "object-bottom",
      },
      priceRange: {
        maxVariantPrice: {
          amount: "199.99",
          currencyCode: "USD",
        },
      },
    },
    {
      handle: "comfortable-sneakers",
      title: "Oversized Vntage Sweater",
      variants: [
        {
          id: "2",
          title: "White",
          availableForSale: true,
          selectedOptions: [
            {
              name: "Color",
              value: "White",
            },
          ],
          price: {
            amount: "89.99",
            currencyCode: "USD",
          },
        },
      ],
      images: [
        {
          url: "/assets/images/sweater-1.webp",
          altText: "Comfortable Sweater",
          width: 600,
          height: 600,
        },
      ],
      featuredImage: {
        url: "/assets/images/sweater-1.webp",
        altText: "Comfortable Sweater",
        width: 600,
        height: 600,
        position: "object-center",
      },
      priceRange: {
        maxVariantPrice: {
          amount: "89.99",
          currencyCode: "USD",
        },
      },
    },
    {
      handle: "wireless-earbuds",
      title: "Vintage Hard brimmed Hat",
      variants: [
        {
          id: "3",
          title: "Black",
          availableForSale: true,
          selectedOptions: [
            {
              name: "Color",
              value: "Black",
            },
          ],
          price: {
            amount: "129.99",
            currencyCode: "USD",
          },
        },
      ],
      images: [
        {
          url: "/assets/images/hat-1.webp",
          altText: "Vintage Hard brimmed Hat",
          width: 600,
          height: 600,
          position: "object-[bottom_left]",
        },
      ],
      featuredImage: {
        url: "/assets/images/hat-1.webp",
        altText: "Vintage Hard brimmed Hat",
        width: 600,
        height: 600,
        position: "object-center",
      },
      priceRange: {
        maxVariantPrice: {
          amount: "129.99",
          currencyCode: "USD",
        },
      },
    },
    {
      handle: "product-1",
      title: "Summer Vibes Vintage Dress",
      variants: [
        {
          id: "variant1",
          title: "Default Variant",
          availableForSale: true,
          selectedOptions: [
            {
              name: "Size",
              value: "Medium",
            },
          ],
          price: {
            amount: "89.99",
            currencyCode: "USD",
          },
        },
      ],
      images: [
        {
          url: "/assets/images/dress-1.webp",
          altText: "Summer Vintage Dress",
          width: 600,
          height: 600,
        },
      ],
      featuredImage: {
        url: "/assets/images/dress-1.webp",
        altText: "Summer Vintage Dress",
        width: 600,
        height: 600,
      },
      priceRange: {
        maxVariantPrice: {
          amount: "89.99",
          currencyCode: "USD",
        },
      },
    },
    {
      handle: "product-2",
      title: "Simple Vintage Watch",
      variants: [
        {
          id: "variant2",
          title: "Default Variant",
          availableForSale: true,
          selectedOptions: [
            {
              name: "Color",
              value: "Blue",
            },
          ],
          price: {
            amount: "29.99",
            currencyCode: "USD",
          },
        },
      ],
      images: [
        {
          url: "/assets/images/watch-1.webp",
          altText: "Vintage Watch",
          width: 600,
          height: 600,
        },
      ],
      featuredImage: {
        url: "/assets/images/watch-1.webp",
        altText: "Vintage Watch",
        width: 600,
        height: 600,
      },
      priceRange: {
        maxVariantPrice: {
          amount: "29.99",
          currencyCode: "USD",
        },
      },
    },
    {
      handle: "product-3",
      title: "Classic Low-Top Shoes",
      variants: [
        {
          id: "variant3",
          title: "Default Variant",
          availableForSale: true,
          selectedOptions: [
            {
              name: "Material",
              value: "Cotton",
            },
          ],
          price: {
            amount: "39.99",
            currencyCode: "USD",
          },
        },
      ],
      images: [
        {
          url: "/assets/images/shoes-1.webp",
          altText: "Sample Product 3",
          width: 600,
          height: 600,
        },
      ],
      featuredImage: {
        url: "/assets/images/shoes-1.webp",
        altText: "Sample Product 3",
        width: 600,
        height: 600,
      },
      priceRange: {
        maxVariantPrice: {
          amount: "39.99",
          currencyCode: "USD",
        },
      },
    },
  ];

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href="#" className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                position={product.featuredImage?.position}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
