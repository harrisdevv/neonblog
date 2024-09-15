'use client'

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-black to-purple-900 text-white p-10 md:p-20 animate-fadeIn">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-slideInLeft">Contact me</h1>
        <form className="space-y-8">
          <div>
            <label htmlFor="fullName" className="block text-lg font-bold mb-2 ml-4">Full name *</label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name ..."
              required
              className="w-full px-6 py-3 bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-bold mb-2 ml-4">Email *</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email ..."
              required
              className="w-full px-6 py-3 bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-bold mb-2 ml-4">Message *</label>
            <textarea
              id="message"
              placeholder="Enter your message ..."
              required
              className="w-full px-6 py-4 bg-white/10 rounded-3xl h-32 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 font-bold text-white px-8 py-3 rounded-full text-xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
