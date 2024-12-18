import React from "react";
import {
  DiscordIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  SendIcon,
} from "../app/ImageIcon";
import { motion, useInView } from "framer-motion";

const Footer: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="bg-black text-white py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-row w-full border-b border-violet-600 mb-12 pb-10"
          >
            <div className="mb-12 animate-fadeIn flex-1">
              <h2 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 whitespace-nowrap">
                Follow me
              </h2>
              <div className="flex space-x-2">
                {[...Array(22)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 xl:w-4 xl:h-4 bg-purple-600 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-end w-full mb-12 justify-end">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-2xl">
                {[
                  { name: "discord", icon: DiscordIcon },
                  { name: "twitter", icon: TwitterIcon },
                  { name: "instagram", icon: InstagramIcon },
                  { name: "facebook", icon: FacebookIcon },
                  { name: "youtube", icon: YoutubeIcon },
                  { name: "telegram", icon: SendIcon },
                ].map(({ name, icon: Icon }, index) => (
                  <motion.a
                    key={name}
                    href={`#${name}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-purple-600 p-6 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-purple-600 transform hover:scale-110 hover:shadow-lg animate-fadeIn rounded-full"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between w-full items-center mb-8">
            <p className="text-2xl mb-4 md:mb-0">Hien The Phan</p>
            <nav>
              <ul className="flex flex-wrap justify-center md:space-x-6 sm:space-x-2 space-x-2">
                <li>
                  <a
                    href="#home"
                    className=" transition-all duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className=" transition-all duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className=" transition-all duration-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className=" transition-all duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#blog-posts"
                    className=" transition-all duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className=" transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between w-full">
            <p className="mb-4 md:mb-0">
              © 2024 Hien The Phan. All rights reserved
            </p>
            <div>
              <a
                href="#terms"
                className="mr-4 hover:text-purple-600 transition-colors duration-300"
              >
                Terms of Use
              </a>
              <a
                href="#privacy"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-1/3 -left-10 bg-blue-500 w-96 h-96 blur-3xl opacity-20 rounded-full -z-0"></div>
      </div>
    </footer>
  );
};

export default Footer;
