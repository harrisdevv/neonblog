"use client";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import BlogPosts from "../components/BlogPosts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  SendIcon,
} from "./ImageIcon";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import ImageAndIcons from "@/components/ImageAndIcons";
import TypingEffect from "@/components/TypingEffect";

const socialLinks = [
  { href: "#discord", icon: <DiscordIcon /> },
  { href: "#facebook", icon: <FacebookIcon /> },
  { href: "#instagram", icon: <InstagramIcon /> },
  { href: "#twitter", icon: <TwitterIcon /> },
  { href: "#youtube", icon: <YoutubeIcon /> },
  { href: "#send", icon: <SendIcon /> },
];

export default function Home() {
  const router = useRouter();
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col bg-gradient-to-br from-black to-purple-900 text-white relative"
    >
      <div className="min-h-screen bg-radial-gradient bg-animated-stars ">
        <header className="flex justify-center items-center w-11/12 mx-auto left-1/2 -translate-x-1/2 p-[1.2px] rounded-full fixed top-1 z-50 bg-black/30 backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-500">
          <span className="flex justify-between items-center w-full bg-gray-900 text-white rounded-full pr-2 pl-4 py-2">
            <div
              className="flex items-center  text-xl md:text-2xl font-bold cursor-pointer" // Added cursor-pointer for better UX
              role="button" // Added role for accessibility
              tabIndex={0} // Added tabIndex for keyboard accessibility
              onClick={() => router.push("/")}
              onKeyPress={(e) => {
                // Added keyboard support
                if (e.key === "Enter" || e.key === " ") {
                  router.push("/");
                }
              }}
            >
              <span className="text-primary -rotate-6 md:ml-2 ">Hien👨</span>
              <span className="rotate-6 text-gray-200">space</span>
            </div>
            <nav className="hidden lg:flex ">
              <a
                href="#home"
                className="btn btn-ghost transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="btn btn-ghost transition-all duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="btn btn-ghost transition-all duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="btn btn-ghost transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#blog-posts"
                className="btn btn-ghost transition-all duration-300"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="btn btn-ghost transition-all duration-300"
              >
                Contact
              </a>
            </nav>
            <div className="navbar-start lg:hidden pl-1">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-slate-900 rounded-box z-[1] mt-3 w-28 p-2 shadow"
                >
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#blog-posts">Blog</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="btn btn-primary font-bold text-white   rounded-full  transition-all duration-300 md:text-lg text-sm "
              >
                Contact me
              </a>
            </div>
          </span>
        </header>

        <div className="absolute top-[260px] flex-none w-10 h-96 overflow-hidden z-40">
          <div className="top-40 left-0 w-full h-full flex flex-col gap-11">
            <div className="w-full h-1 bg-primary transform rotate-45 origin-left"></div>
            <div className="w-full h-1 bg-primary transform rotate-45 origin-left"></div>
            <div className="w-full h-1  bg-primary transform rotate-45 origin-left"></div>
            <div className="w-full h-1 bg-primary transform rotate-45 origin-left"></div>
            <div className="w-full h-1 bg-primary  transform rotate-45 origin-left"></div>
          </div>
        </div>

        <main className="flex justify-between items-center px-20 py-10 gap-12 mt-24 max-w-8xl mx-auto relative z-40">
          <motion.div
            className="flex flex-grow flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-normal md:text-4xl mb-4 animate-fadein text-gray-400 uppercase">
              FULL-STACK WEB DEVELOPER
            </h1>
            <h2 className="text-5xl md:text-8xl font-bold mb-8 animate-slideInLeft">
              Hien
              <br />
              The Phan
            </h2>
            <button
              onClick={() => router.push("https://github.com/harrisdevv")}
              className="btn btn-primary  text-white rounded-full text-md md:text-xl flex items-center transition-all duration-300"
            >
              <Github />
              <span className="">Github</span>
            </button>
            <p className="mt-8 max-w-md text-md md:text-lg animate-fadeIn text-gray-400 border-l-2 border-gray-400 pl-4">
              I&apos;m a full-stack web developer and I work remotely from South
              of Vietnam.
            </p>
          </motion.div>
          <TypingEffect
            texts={["Hii! Nice to meet you 👐", "I''m Hien, a software monkey-neer 🐒", "Leet's connect! 🍵"]}
            speed={100}
            className="absolute top-2 right-36 2xl:top-1/2 2xl:left-1/2 2xl:transform 2xl:-translate-x-2 lg:top-8 transform translate-x-10 text-lg lg:text-xl"
          />
          <ImageAndIcons />
        </main>
        <div className="absolute right-8 top-1/3 transform -translate-y-1/3 flex flex-col gap-6 z-40 ">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="btn btn-primary btn-ghost transition-all duration-300 transform hover:scale-110  bg-black p-3 rounded-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="blog-posts">
        <BlogPosts />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
