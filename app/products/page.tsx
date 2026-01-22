import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export const metadata = {
  title: "Products | Geez Market",
  description:
    "Explore authentic Ethiopian products including teff grain, spices, cookware, and traditional dresses.",
};

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Teff Grain",
    description:
      "Authentic Ethiopian teff, carefully sourced for purity and quality. A nutritious ancient grain traditionally used to prepare injera.",
    image: "/asset/teffgrain.jpg",
  },
  {
    id: 2,
    name: "Mixed Spices",
    description:
      "Traditional Ethiopian and African spice blends crafted to deliver rich aroma and bold flavors for classic dishes.",
    image: "/asset/teff.jpg",
  },
  {
    id: 3,
    name: "Cookware",
    description:
      "Durable traditional and modern cookware designed for preparing authentic Ethiopian meals with time-honored techniques.",
    image: "/asset/cookware.jpg",
  },
  {
    id: 4,
    name: "Traditional Dresses",
    description:
      "Beautiful handcrafted Ethiopian cultural dresses inspired by heritage patterns, celebrations, and timeless craftsmanship.",
    image: "/asset/tradress.jpg",
  },
];

export default function ProductsPage() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Products
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover authentic Ethiopian and African essentials, carefully selected for quality and tradition.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center relative"
            >
              {/* Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#af9e05]/20 mb-6 group-hover:scale-105 transition">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Hover Icon */}
              <span
                className="
                  absolute bottom-6
                  w-12 h-12 flex items-center justify-center
                  rounded-full bg-[#af9e05] text-white
                  opacity-0 scale-75 translate-y-2
                  group-hover:opacity-100
                  group-hover:scale-100
                  group-hover:translate-y-0
                  transition-all duration-300
                "
                aria-hidden
              >
                <FiArrowRight className="text-xl" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
