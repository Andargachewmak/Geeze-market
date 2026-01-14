"use client";

import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", phone: "", comments: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* Contact Info */}
          <div className="lg:w-1/4 space-y-6 text-gray-700">
            <div className="flex gap-3">
              <FiMapPin className="text-[#af9e05] w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1 text-[#af9e05]">
                  Our Location
                </h4>
                <p className="text-sm md:text-base">
                  159 Pelton Center Way, San Leandro, CA 94577-4815, United States
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <FiPhone className="text-[#af9e05] w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1 text-[#af9e05]">
                  Phone
                </h4>
                <p>+1 408-449-6553</p>
              </div>
            </div>

            <div className="flex gap-3">
              <FiMail className="text-[#af9e05] w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1 text-[#af9e05]">
                  Email
                </h4>
                <p>Geezmarket1@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/5 bg-white p-6 md:p-8 rounded-xl shadow-lg relative z-10">
            <h2 className="text-2xl font-bold mb-6 text-[#af9e05]">
              Leave a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border rounded-lg p-3 w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border rounded-lg p-3 w-full"
                />
              </div>

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
              />

              <textarea
                name="comments"
                placeholder="Please describe what you need."
                value={formData.comments}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 w-full h-36 md:h-40 resize-none"
              />

              <button
                type="submit"
                className="w-full md:w-auto bg-[#af9e05] text-white px-6 py-3 rounded-xl font-semibold"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="lg:w-2/5 h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg lg:-ml-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.877203350506!2d-122.15656302365825!3d37.722560115165344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8fd9dafe8bf1%3A0x81a125404a78ede2!2zR2XigJlleiBNYXJrZXQ!5e0!3m2!1sen!2set!4v1768296229980!5m2!1sen!2set"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
