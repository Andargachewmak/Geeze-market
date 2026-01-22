// app/layout.tsx
"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loader on route change
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600); // adjust time for smoothness
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {loading && <Loader />}
        <div className={`${loading ? "opacity-50 pointer-events-none" : ""}`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
