"use client"; // <-- Add this at the top

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

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
    image: "/asset/tradress.JPG",
    featured: true,
    subImages: ["/asset/dresstra.JPG", "/asset/dresstraditio.JPG","/asset/tradi.JPG","/asset/cloth.JPG"],
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
    subImages: ["/asset/spices1.jpg", "/asset/spices2.jpg"],
  },
  {
    id: 3,
    title: "Traditional Cookware",
    image: "/asset/cookwares.JPG",
    subImages: ["/asset/coffee.JPG", "/asset/cookware2.JPG"],
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  return (
    <section id="gallery" className="py-24 bg-white">
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
              className={`group relative overflow-hidden shadow-md cursor-pointer ${
                item.featured ? "sm:row-span-2" : "h-64 sm:h-auto"
              }`}
              onClick={() => {
                setSelectedItem(item);
                setActiveSubIndex(0);
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                <h4 className="text-white text-lg font-semibold mb-4">
                  {item.title}
                </h4>
                <div className="w-12 h-12 rounded-full bg-[#af9e05] text-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition duration-300">
                  <FiPlus className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-2xl p-6 max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>

              {/* Main Sub Image */}
              {selectedItem.subImages && (
                <img
                  src={selectedItem.subImages[activeSubIndex]}
                  alt={selectedItem.title}
                  className="w-full h-146 object-cover rounded-xl mb-4"
                />
              )}

              {/* Thumbnails */}
              <div className="flex gap-2 justify-center">
                {selectedItem.subImages?.map((img, index) => (
                  <div
                    key={index}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer ${
                      activeSubIndex === index
                        ? "border-[#af9e05]"
                        : "border-transparent"
                    }`}
                    onClick={() => setActiveSubIndex(index)}
                  >
                    <img
                      src={img}
                      alt={`${selectedItem.title} ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mt-4 text-center">
                {selectedItem.title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
