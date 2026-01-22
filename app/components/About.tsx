import React from "react";
import Link from "next/link"; // <-- import Link
import { FiShoppingBag, FiPackage, FiUsers, FiTag } from "react-icons/fi";

const About: React.FC = () => {
  return (
    <section id="about" className="about-area bg-gray-50 overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200 via-amber-100 to-transparent rounded-xl transform -rotate-3 scale-105"></div>
            <img
              src="/asset/geezeshop.jpg"
              alt="Ge’Ez Market"
              className="relative rounded-xl shadow-2xl w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-8">
            <h5 className="text-[#af9e05] font-semibold uppercase tracking-widest">
              Who we are
            </h5>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Ge’Ez Market is proudly African-owned and serves the San Leandro community
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Your trusted African grocery store in San Leandro, California. Premium Teff, mixed spices, traditional cookware, and beautiful cultural dresses.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#af9e05] mt-1">
                  <FiShoppingBag />
                </div>
                <p className="text-gray-700 font-medium">
                  Premium Ethiopian & African products
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#af9e05] mt-1">
                  <FiPackage />
                </div>
                <p className="text-gray-700 font-medium">
                  Carefully selected spices and grains
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-1 text-[#af9e05] mt-1 text-2xl">
                  <FiTag />
                </div>
                <p className="text-gray-700 font-medium">
                  Traditional cookware & cultural clothing
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#af9e05] mt-1">
                  <FiUsers />
                </div>
                <p className="text-gray-700 font-medium">
                  Friendly and welcoming environment
                </p>
              </div>
            </div>

            {/* Link to About Page */}
            <Link
              href="/about" // <-- navigate to About page
              className="inline-block mt-4 bg-gradient-to-r from-[#af9e05] to-[#d0b82b] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              More About
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
