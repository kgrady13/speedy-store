import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import shoes from "../../public/assets/images/shoes-1.webp";
import jeans from "../../public/assets/images/hat-1.webp";
import { ScrollArea } from "./ui/scroll-area";

const featured = [
  {
    name: "Footwear",
    href: "#",
    imageSrc: shoes,
    imageAlt:
      "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc: jeans,
    imageAlt:
      "Model wearing minimalist watch with black wristband and white watch face.",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc: jeans,
    imageAlt:
      "Model wearing minimalist watch with black wristband and white watch face.",
  },
  {
    name: "Footwear",
    href: "#",
    imageSrc: shoes,
    imageAlt:
      "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
  },
];

const sections = [
  [
    {
      id: "shoes",
      name: "Shoes & Accessories",
      items: [
        { name: "Sneakers", href: "#" },
        { name: "Boots", href: "#" },
        { name: "Flats", href: "#" },
        { name: "Sandals", href: "#" },
        { name: "Heels", href: "#" },
        { name: "Socks", href: "#" },
      ],
    },
  ],
  [
    {
      id: "clothing",
      name: "All Clothing",
      items: [
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
        { name: "Tops", href: "#" },
        { name: "Bottoms", href: "#" },
        { name: "Swimwear", href: "#" },
        { name: "Underwear", href: "#" },
      ],
    },
  ],
  [
    {
      id: "brands",
      name: "Brands",
      items: [
        { name: "Full Nelson", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Significant Other", href: "#" },
      ],
    },
  ],
];

export default function MegaMenu() {
  return (
    <Popover>
      <PopoverTrigger
        aria-label="Menu"
        className="group transition-colors duration-200 p-4 hover:bg-brand-green hover:text-brand-beige border-r border-brand-green/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 group-data-[state=open]:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 group-data-[state=closed]:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </PopoverTrigger>
      <PopoverContent className="w-svw max-w-none rounded-none bg-brand-beige/80 backdrop-blur">
        <ScrollArea className="mx-auto h-svh min-h-96 md:h-auto sm:min-h-min max-w-7xl py-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-4 text-sm place-content-start">
              {featured.map((item) => (
                <div
                  key={item.name}
                  className="group aspect-h-1 bg-brand-beige aspect-w-1 relative overflow-hidden rounded-md"
                >
                  <Image
                    alt={item.imageAlt}
                    src={item.imageSrc}
                    className="object-cover md:max-h-48md:min-h-48 max-h-24 object-center group-hover:opacity-75"
                  />
                  <div className="flex flex-col justify-end">
                    <div className="bg-brand-beige bg-opacity-60 p-4 text-sm">
                      <a href={item.href} className="font-medium text-xl">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.name}
                      </a>
                      <p
                        aria-hidden="true"
                        className="mt-0.5 text-gray-700 sm:mt-1"
                      >
                        Shop now
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid bg-brand-beige p-6 mb-24 md:mb-0 rounded-md grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
              {sections.map((column, columnIdx) => (
                <div key={columnIdx} className="space-y-10">
                  {column.map((section) => (
                    <div key={section.name}>
                      <p
                        id={`${section.id}-heading`}
                        className="font-medium font-sans text-gray-500"
                      >
                        {section.name}
                      </p>
                      <ul
                        role="list"
                        aria-labelledby={`${section.id}-heading`}
                        className="mt-4 space-y-4"
                      >
                        {section.items.map((item) => (
                          <li key={item.name} className="flex">
                            <a href={item.href} className="hover:text-gray-800">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
