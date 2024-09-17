"use client";

import React from "react";
import ArcComponent from './ArcComponent';

const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white p-10 md:p-20 animate-fadeIn relative">
      <div className="max-w-2xl mx-auto ">
        <h1 className="text-7xl md:text-8xl font-bold mb-8 animate-slideInLeft text-center">
          Contact me
        </h1>
        <form className="space-y-8 mt-10 relative z-20">
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
              className="w-full px-6 py-4 bg-pink-400/10 rounded-3xl h-32 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            ></textarea>

            <span className="text-pink-500 ml-4 text-8xl absolute">←</span>
          </div>
          <button
            type="submit"
            className="bg-[#D017B8] font-bold text-white px-8 py-3 rounded-full text-xl transition-all duration-300 transform hover:scale-105 mx-auto block"
          >
            Send Message
          </button>
        </form>
      </div>


      <div className="absolute top-10 right-10 bg-purple-700 w-96 h-96 blur-3xl opacity-20 rounded-full z-10 hidden xl:block"></div>
      <div className="absolute top-10 left-10 bg-purple-700 w-96 h-96 blur-3xl opacity-20 rounded-full z-10 hidden xl:block"></div>
      <div className="absolute -top-0 left-80 hidden xl:block lg:hidden md:hidden sm:hidden z-10">
        <ArcComponent width={400} height={400} />
      </div>
      <div className="absolute -top-20 left-100 xl:block lg:hidden md:hidden sm:hidden z-10 ">
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
