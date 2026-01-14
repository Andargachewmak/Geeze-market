const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/asset/geez.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Ge’Ez Market  Authentic African Groceries
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Serving San Leandro, CA with the finest African products. We’re best known for stocking premium Teff, a wonderful selection of mixed spices, traditional cookware, and beautiful cultural dresses. Visit our store to experience authentic African flavors and traditions!
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#products"
              className="bg-[#af9e05] hover:bg-[#d0b82b] transition px-6 py-3 rounded-xl font-semibold"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="border border-white/70 px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#af9e05] transition"
            >
              Visit Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
