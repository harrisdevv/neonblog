'use client'

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white p-10 md:p-20 animate-fadeIn relative">
      <div className='absolute top-1/4 right-10 bg-gradient-to-b from-purple-400 to-pink-400 w-96 h-96 blur-3xl opacity-20 rounded-full z-10 hidden xl:block'></div>
      <div className='absolute top-1/4 left-10 bg-gradient-to-b from-purple-400 to-pink-400 w-96 h-96 blur-3xl opacity-20 rounded-full z-10 hidden xl:block'></div>
      
      <div className="max-w-2xl mx-auto ">
        <h1 className="text-7xl md:text-8xl font-bold mb-8 animate-slideInLeft text-center">Contact me</h1>
        <form className="space-y-8 mt-10 z-20">
          <div>
            <label htmlFor="fullName" className="block text-lg font-bold mb-2 ml-4">Full name *</label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name ..."
              required
              className="w-full px-6 py-4 bg-pink-400/10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-bold mb-2 ml-4">Email *</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email ..."
              required
              className="w-full px-6 py-4 bg-pink-400/10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-bold mb-2 ml-4">Message *</label>
            <textarea
              id="message"
              placeholder="Enter your message ..."
              required
              className="w-full px-6 py-4 bg-pink-400/10 rounded-3xl h-32 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-900 font-bold text-white px-8 py-3 rounded-full text-xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
