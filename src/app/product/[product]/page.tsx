import { cn } from "@/lib/utils";
import { BadgeDollarSignIcon, Globe, StarIcon } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductForm } from "./_components/product-form";
import Image from "next/image";

import dress1 from "../../../../public/assets/images/dress-1.webp";
import hat1 from "../../../../public/assets/images/hat-1.webp";
import jeans1 from "../../../../public/assets/images/jeans-1.webp";
import shoes1 from "../../../../public/assets/images/shoes-1.webp";

export async function generateMetadata({
  params,
}: {
  params: { product: string };
}): Promise<Metadata> {
  //   const product = await getProduct(params.product);

  //   if (!product) return notFound();

  //   const { url, width, height, altText: alt } = product.featuredImage || {};

  return {
    title: `${decodeURIComponent(params.product)} | Speedy Store`,
    description:
      "High-performance ecommerce store built with Next.js, Vercel, and Stripe. Designed + Developed by karson.cc.",
    openGraph: {
      type: "website",
    },
  };
}

export default function ProductInformationPage({
  params,
}: {
  params: { product: string };
}) {
  const title = decodeURIComponent(params.product);
  return (
    <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5 lg:col-start-8  backdrop-blur p-4 rounded-2xl border border-black/5">
          <div className="flex justify-between">
            <h1 className="text-xl font-medium text-gray-900">{title}</h1>
            <p className="text-xl font-medium text-gray-900">{product.price}</p>
          </div>
          {/* Reviews */}
          <div className="mt-4">
            <h2 className="sr-only">Reviews</h2>
            <div className="flex items-center">
              <p className="text-sm text-gray-700">
                {reviews.average}
                <span className="sr-only"> out of 5 stars</span>
              </p>
              <div className="ml-1 flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={cn(
                      reviews.average > rating
                        ? "text-yellow-400"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                  />
                ))}
              </div>
              <div className="border-l pl-4 ml-4 flex">
                <a
                  href="#"
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
                >
                  See all {reviews.totalCount} reviews
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image gallery */}
        <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 ">
          <h2 className="sr-only">Images</h2>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 place-items-stretch lg:gap-8">
            {product.images.map((image) => (
              <Image
                priority
                key={image.id}
                src={image.imageSrc}
                alt={image.imageAlt}
                width={697}
                height={607}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={cn(
                  image.primary ? "lg:col-span-2" : "hidden lg:block",
                  "rounded-lg object-cover"
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 lg:block lg:col-span-5 backdrop-blur p-4 rounded-2xl border border-black/5">
          {/* Color/Size picker */}
          <ProductForm product={product} />

          {/* Product details */}
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>

            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="prose prose-sm mt-4 text-gray-500"
            />
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-sm font-medium text-gray-900">
              Fabric &amp; Care
            </h2>

            <div className="prose prose-sm mt-4 text-gray-500">
              <ul role="list">
                {product.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Policies */}
          <section aria-labelledby="policies-heading" className="mt-10">
            <h2 id="policies-heading" className="sr-only">
              Our Policies
            </h2>

            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {policies.map((policy) => (
                <div
                  key={policy.name}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                >
                  <dt>
                    <policy.icon
                      aria-hidden="true"
                      className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                    />
                    <span className="mt-4 text-sm font-medium text-gray-900">
                      {policy.name}
                    </span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-500">
                    {policy.description}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      {/* Reviews */}
      <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
        <h2 id="reviews-heading" className="text-lg font-medium text-gray-900">
          Recent reviews
        </h2>

        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          {reviews.featured.map((review) => (
            <div
              key={review.id}
              className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
            >
              <div className="lg:col-span-8 backdrop-blur p-4 rounded-2xl border border-black/5 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={cn(
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    {review.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0 ">
                  <h3 className="text-sm font-medium text-gray-900">
                    {review.title}
                  </h3>

                  <div
                    dangerouslySetInnerHTML={{ __html: review.content }}
                    className="mt-3 space-y-6 text-sm text-gray-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">{review.author}</p>
                <time
                  dateTime={review.datetime}
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  {review.date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related products */}
      <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
        <h2 id="related-heading" className="text-lg font-medium text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid gap-4 gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-8">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="group relative max-w-44 lg:max-w-none"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  alt={relatedProduct.imageAlt}
                  src={relatedProduct.imageSrc}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover rounded-2xl object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex px-2 justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={relatedProduct.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {relatedProduct.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {relatedProduct.color}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {relatedProduct.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const product = {
  name: "Basic Tee",
  price: "$35",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc: dress1,
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: jeans1,
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: shoes1,
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};
const policies = [
  {
    name: "International delivery",
    icon: Globe,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: BadgeDollarSignIcon,
    description: "Don't look at other tees",
  },
];
const reviews = {
  average: 3.9,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
      `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
    // More reviews...
  ],
};
const relatedProducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: hat1,
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },

  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: hat1,
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
];
