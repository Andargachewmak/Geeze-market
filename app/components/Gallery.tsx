"use client";

import React, { useEffect, useState } from "react";
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
    subImages: [
      "/asset/coffee.jpg",
      "/asset/cookware2.jpg",
      "/asset/teff.jpg",
    ],
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  // 🔄 Auto-slide images
  useEffect(() => {
    if (!selectedItem?.subImages) return;

    const interval = setInterval(() => {
      setActiveSubIndex((prev) =>
        prev === selectedItem.subImages!.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedItem]);

  // ⌨️ Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h5 className="text-[#af9e05] font-semibold uppercase tracking-widest">
            Our Gallery
          </h5>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Item Showcase
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setActiveSubIndex(0);
              }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-md ${
                item.featured ? "sm:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] sm:aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                <h4 className="text-white text-lg font-semibold mb-3">
                  {item.title}
                </h4>
                <div className="w-11 h-11 rounded-full bg-[#af9e05] text-white flex items-center justify-center scale-0 group-hover:scale-100 transition">
                  <FiPlus className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)} // background close
          >
            <div
              className="
                relative w-full h-full bg-white
                sm:max-w-3xl sm:h-auto sm:rounded-2xl
                sm:mx-auto sm:my-10
                overflow-y-auto
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="
                  fixed top-4 right-4 z-50
                  w-11 h-11 rounded-full
                  bg-black/80 text-white
                  flex items-center justify-center text-lg
                  sm:absolute sm:top-3 sm:right-3
                "
                onClick={() => setSelectedItem(null)}
                aria-label="Close"
              >
                ✕
              </button>

              {/* Main Image (Tap to Close) */}
              <div
                className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(null)} // 👈 tap image to close
              >
                <img
                  key={activeSubIndex}
                  src={selectedItem.subImages?.[activeSubIndex]}
                  alt={selectedItem.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                />
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {selectedItem.subImages?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeSubIndex === index
                        ? "bg-[#af9e05] scale-125"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex gap-2 px-4 pb-4 overflow-x-auto sm:justify-center">
                {selectedItem.subImages?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      activeSubIndex === index
                        ? "border-[#af9e05]"
                        : "border-transparent opacity-70"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Title */}
              <h3 className="pb-6 text-xl sm:text-2xl font-semibold text-center text-gray-900">
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
