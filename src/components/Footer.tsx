import React from 'react';
import { DiscordIcon, TwitterIcon, InstagramIcon, FacebookIcon, YoutubeIcon, SendIcon } from '../app/ImageIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start">
          <div className="mb-12 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Follow me</h2>
            <div className="flex space-x-2">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between w-full mb-12">
            <div className="grid grid-cols-3 gap-6">
              {[
                { name: 'discord', icon: DiscordIcon },
                { name: 'twitter', icon: TwitterIcon },
                { name: 'instagram', icon: InstagramIcon },
                { name: 'facebook', icon: FacebookIcon },
                { name: 'youtube', icon: YoutubeIcon },
                { name: 'telegram', icon: SendIcon },
              ].map(({ name, icon: Icon }, index) => (
                <a 
                  key={name} 
                  href={`#${name}`} 
                  className="bg-purple-600 rounded-full p-4 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-purple-600 transform hover:scale-110 hover:shadow-lg animate-fadeIn"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full items-center mb-8">
            <p className="text-2xl mb-4 md:mb-0">Hien The Phan</p>
            <nav>
              <ul className="flex flex-wrap justify-center md:space-x-6">
                <li><a href="#home" className="hover:text-purple-600 transition-colors duration-300">Home</a></li>
                <li><a href="#projects" className="hover:text-purple-600 transition-colors duration-300">Projects</a></li>
                <li><a href="#blog" className="hover:text-purple-600 transition-colors duration-300">Blog</a></li>
                <li><a href="#contact" className="hover:text-purple-600 transition-colors duration-300">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between w-full">
            <p className="mb-4 md:mb-0">© 2024 Hien The Phan. All rights reserved</p>
            <div>
              <a href="#terms" className="mr-4 hover:text-purple-600 transition-colors duration-300">Terms of Use</a>
              <a href="#privacy" className="hover:text-purple-600 transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
