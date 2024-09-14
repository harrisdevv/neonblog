import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-black to-purple-900 text-white p-10 md:p-20">
      <div className="flex-1 animate-fadeIn">
        <h2 className="text-6xl md:text-8xl font-bold mb-8 animate-slideInLeft">About<br />me</h2>
        <p className="text-lg mb-8 animate-fadeIn" style={{animationDelay: '0.3s'}}>
          I&apos;m a passionate web developer with a knack for creating dynamic and responsive web applications. 
          I specialize in using modern technologies like Next.js, React, and TypeScript to build user-friendly interfaces. 
          My goal is to deliver high-quality code and seamless user experiences. 
          I enjoy tackling challenges and continuously learning to improve my skills.
        </p>
        <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl hover:bg-purple-700 transition-all duration-300 animate-fadeIn" style={{animationDelay: '0.6s'}}>
          Contact me
        </button>
      </div>
      <div className="flex-1 relative mt-10 md:mt-0 animate-float">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden relative">
          <Image
            src="/coding-image.jpg"
            alt="Coding setup"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-50 blur-xl animate-pulse"></div>
      </div>
      <div className="absolute right-20 text-8xl text-purple-600 animate-bounce hidden md:block">→</div>
    </div>
  );
};

export default About;
