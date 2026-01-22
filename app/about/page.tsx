import React from "react";
import {
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiTag,
  FiCheckCircle,
  FiMapPin,
  FiHeart,
} from "react-icons/fi";

const About = () => {
  return (
    <main className="bg-gray-50 overflow-hidden">
      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left Image */}
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200 via-amber-100 to-transparent rounded-xl transform -rotate-3 scale-105" />
              <img
                src="/asset/geezeshop.jpg"
                alt="Ge’Ez Market African grocery store in San Leandro"
                className="relative rounded-xl shadow-2xl w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 space-y-8">
              <h5 className="text-[#af9e05] font-semibold uppercase tracking-widest">
                Who We Are
              </h5>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Ge’Ez Market – Proudly African-Owned in San Leandro
              </h1>

              <p className="text-gray-600 leading-relaxed text-lg">
                Ge’Ez Market is your trusted African grocery store in San Leandro,
                California. We provide premium Ethiopian and African products,
                including Teff, traditional spices, cookware, and beautiful
                cultural dresses.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Feature icon={<FiShoppingBag />} text="Premium Ethiopian & African products" />
                <Feature icon={<FiPackage />} text="Carefully selected spices and grains" />
                <Feature icon={<FiTag />} text="Traditional cookware & cultural clothing" />
                <Feature icon={<FiUsers />} text="Friendly and welcoming environment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-[#af9e05] font-semibold uppercase tracking-widest">
              Why Choose Us
            </h5>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
              More Than a Store — A Community
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We go beyond selling products by creating a place where culture,
              quality, and community come together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <WhyCard
              icon={<FiCheckCircle />}
              title="Authentic Products"
              text="We source genuine Ethiopian and African products you can trust."
            />
            <WhyCard
              icon={<FiMapPin />}
              title="Locally Trusted"
              text="Serving the San Leandro community with pride and consistency."
            />
            <WhyCard
              icon={<FiHeart />}
              title="Customer First"
              text="We value every customer and treat you like family."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

/* ================= COMPONENTS ================= */

const Feature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-start gap-4">
    <div className="text-2xl text-[#af9e05] mt-1">{icon}</div>
    <p className="text-gray-700 font-medium">{text}</p>
  </div>
);

const WhyCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
    <div className="text-3xl text-[#af9e05] mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);
