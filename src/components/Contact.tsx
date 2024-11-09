"use client";

import React, { useState } from "react";
import ArcComponent from "./ArcComponent";
import { motion, useInView } from "framer-motion";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const firstName = fullName.split(" ")[0]; // Extract first name

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, email, message }),
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="bg-black text-white p-10 md:px-20 py-36 animate-fadeIn relative">
      <div className="max-w-2xl mx-auto ">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-7xl md:text-8xl font-bold mb-8 text-center"
        >
          Contact me
        </motion.h1>
        <form className="space-y-8 mt-10 relative z-20" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="block text-lg font-bold mb-2 ml-4"
            >
              Full name *
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name ..."
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-6 py-4 bg-pink-400/10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-bold mb-2 ml-4"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email ..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-pink-400/10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-bold mb-2 ml-4"
            >
              Message *
            </label>
            <textarea
              id="message"
              placeholder="Enter your message ..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-6 py-4 bg-pink-400/10 rounded-3xl h-32 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            ></textarea>

            <span className="text-pink-500 ml-4 text-8xl hidden lg:inline-block md:absolute">
              ←
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#D017B8] font-bold text-white px-8 py-3 rounded-full text-xl transition-all duration-300 transform hover:scale-105 mx-auto block"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="absolute top-10 right-10  bg-purple-800 w-96 h-96 blur-3xl opacity-15 rounded-full z-10 hidden lg:block"></div>
      <div className="absolute top-10 left-10 bg-purple-800  w-96 h-96 blur-3xl opacity-15 rounded-full z-10 hidden lg:block"></div>
      <div className="absolute -top-0 left-60  hidden 2xl:block  z-10">
        <ArcComponent width={400} height={400} />
      </div>
      <div className="absolute -top-20 left-0 hidden 2xl:block  z-10 ">
        <ArcComponent width={800} height={800} />
      </div>
      <div className="flex items-center justify-center opacity-80 absolute right-40 top-60 hidden xl:block lg:hidden md:hidden sm:hidden">
        <div className="grid grid-cols-3 gap-10">
          {Array.from({ length: 27 }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-purple-500/50 rounded-full blur-none"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
