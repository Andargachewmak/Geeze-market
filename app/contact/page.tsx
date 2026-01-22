"use client";

import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", phone: "", comments: "" });
  };

  return (
    <main className="bg-gray-50 py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">

        {/* ================= CONTACT FORM ================= */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          whileHover={{ y: -6 }}
          className="bg-white p-8 rounded-2xl shadow-lg flex flex-col"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#af9e05]">Leave a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-[#af9e05] focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-[#af9e05] focus:outline-none transition"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-[#af9e05] focus:outline-none transition"
            />
            <textarea
              name="comments"
              placeholder="Your message..."
              value={formData.comments}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 w-full h-36 md:h-40 resize-none focus:ring-2 focus:ring-[#af9e05] focus:outline-none transition"
            />
            <button
              type="submit"
              className="w-full bg-[#af9e05] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d0b82b] transition"
            >
              Send Now
            </button>
          </form>
        </motion.div>

        {/* ================= MAP + GET IN TOUCH SIDE-BY-SIDE ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Map */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.877203350506!2d-122.15656302365825!3d37.722560115165344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8fd9dafe8bf1%3A0x81a125404a78ede2!2zR2XigJlleiBNYXJrZXQ!5e0!3m2!1sen!2set!4v1768296229980!5m2!1sen!2set"
              className="w-full h-72 md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Get in Touch Info */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold text-[#af9e05]">Get in Touch</h2>
            <div className="flex items-start gap-4">
              <FiMapPin className="text-[#af9e05] w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                159 Pelton Center Way, San Leandro, CA 94577-4815, United States
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FiPhone className="text-[#af9e05] w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-gray-700">+1 408-449-6553</p>
            </div>
            <div className="flex items-start gap-4">
              <FiMail className="text-[#af9e05] w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Geezmarket1@gmail.com</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
