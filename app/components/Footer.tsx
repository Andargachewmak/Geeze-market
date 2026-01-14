import React from "react";
import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#af9e05] text-black">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* About */}
        <div>
          <img
            src="/asset/Asset 3.svg"
            alt="Logo"
            className="w-36 mb-4"
          />
          <p className="text-black text-sm">
Ge’Ez Market in San Leandro, CA offers authentic African goods, including teff, mixed spices, cookware, and traditional dresses. Visit us today!          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-black font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-black text-sm">
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Empty Column or Recent Posts */}
        <div></div>

        {/* Contact Info */}
        <div>
          <h4 className="text-black font-semibold mb-4">Contact Info</h4>
          <ul className="text-black text-sm space-y-2">
            <li>
              <strong>Address:</strong> 159 Pelton Center Way, San Leandro, CA 94577-4815, United States
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@freshcorner.com"
                className="hover:text-white transition"
              >
                Geezmarket1@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="#" className="hover:text-white transition">
                +1 408-449-6553
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://web.facebook.com/profile.php?id=100066433460947"
              target="_blank"
              className="text-black hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/geez_market?igsh=ZW4zbW9oMnYybGx5"
              target="_blank"
              className="text-black hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/Fresh_Corner_Ethiopia"
              target="_blank"
              className="text-black hover:text-white transition"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-black">
        © {new Date().getFullYear()} Geeze Market. Designed by{" "}
        <a
          href="https://netibconsult.com/"
          target="_blank"
          className="hover:text-white transition"
        >
          Andargachew 
        </a>
        .
      </div>
    </div>
  </footer>
);

export default Footer;
