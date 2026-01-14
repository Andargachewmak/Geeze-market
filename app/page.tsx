import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Products from "./components/Products";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
