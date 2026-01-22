"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiHome, FiBox, FiImage, FiPhone } from "react-icons/fi";

// Nav items with icons
const navItems = [
  { label: "About", href: "/about", icon: <FiHome /> },
  { label: "Products", href: "/products", icon: <FiBox /> },
  { label: "Gallery", href: "/gallery", icon: <FiImage /> },
  { label: "Contact", href: "/contact", icon: <FiPhone /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/asset/Asset 3.svg"
            alt="Ge’ez Market Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Nav - ORIGINAL STYLE */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative group transition ${
                  isActive
                    ? "font-bold text-[#af9e05]"
                    : "text-gray-700 hover:text-[#af9e05]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#af9e05] transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800 hover:text-[#af9e05] transition-transform duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu - Floating Drawer hugging the right edge tightly */}
      <nav
        className={`md:hidden fixed top-28 right-0 bg-white/95 backdrop-blur-xl  shadow-lg z-50 transform transition-transform duration-500 flex flex-col p-2 gap-2 ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{ width: "150px" }} // narrower width to hug right edge
      >
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-2 py-2 rounded-md transition-all duration-300 ${
                isActive
                  ? "text-[#af9e05] scale-105 bg-yellow-50"
                  : "text-gray-700 hover:text-[#af9e05] hover:bg-yellow-50 hover:scale-105"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
