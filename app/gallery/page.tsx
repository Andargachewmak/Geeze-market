"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

// export const metadata = {
//   title: "Gallery | Geez Market",
//   description:
//     "Explore authentic Ethiopian and African products in our gallery, including teff, spices, cookware, and cultural dresses.",
// };

type GalleryItem = {
  id: number;
  title: string;
  image: string;
  featured?: boolean;
  subImages?: string[];
};

const galleryItems: GalleryItem[] = [
  {
    id: 4,
    title: "Cultural Dresses",
    image: "/asset/tradress.jpg",
    featured: true,
    subImages: [
      "/asset/dresstra.jpg",
      "/asset/dresstraditio.jpg",
      "/asset/tradi.jpg",
      "/asset/cloth.jpg",
    ],
  },
  {
    id: 1,
    title: "Teff & Grains",
    image: "/asset/teffgrain.jpg",
    subImages: ["/asset/teffgrain.jpg", "/asset/injera.jpg"],
  },
  {
    id: 2,
    title: "African Spices",
    image: "/asset/teff.jpg",
    subImages: ["/asset/teff.jpg", "/asset/teff.jpg"],
  },
  {
    id: 3,
    title: "Traditional Cookware",
    image: "/asset/cookwares.jpg",
    subImages: ["/asset/coffee.jpg", "/asset/cookware2.jpg", "/asset/teff.jpg"],
  },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h5 className="text-[#af9e05] font-semibold uppercase tracking-widest">
            Our Gallery
          </h5>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900">
            Item Showcase
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setActiveSubIndex(0);
              }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-md ${
                item.featured ? "sm:row-span-2" : "h-64 sm:h-auto"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                <h4 className="text-white text-lg font-semibold mb-4">
                  {item.title}
                </h4>
                <div className="w-12 h-12 rounded-full bg-[#af9e05] text-white flex items-center justify-center scale-0 group-hover:scale-100 transition">
                  <FiPlus className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-3"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center text-lg shadow-lg hover:bg-black transition"
                onClick={() => setSelectedItem(null)}
                aria-label="Close"
              >
                ✕
              </button>

              {/* Main Image */}
              {selectedItem.subImages && (
                <img
                  src={selectedItem.subImages[activeSubIndex]}
                  alt={selectedItem.title}
                  className="w-full h-64 sm:h-96 object-cover rounded-xl"
                />
              )}

              {/* Thumbnails */}
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {selectedItem.subImages?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      activeSubIndex === index
                        ? "border-[#af9e05]"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${selectedItem.title} ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-center text-gray-900">
                {selectedItem.title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
