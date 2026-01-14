import React from "react";
import { FiArrowRight } from "react-icons/fi";

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

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h5 className="text-[#af9e05] font-semibold uppercase tracking-widest">
            Our Products
          </h5>
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
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
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
              <a
                href="#"
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
                aria-label={`View ${product.name}`}
              >
                <FiArrowRight className="text-xl" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
