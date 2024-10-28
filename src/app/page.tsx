'use client'
import Image from "next/image";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import BlogPosts from "../components/BlogPosts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
  DownloadIcon,
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  SendIcon,
} from "./ImageIcon";
import { useRouter } from "next/navigation";

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
      className="min-h-screen flex flex-col bg-gradient-to-br from-black to-purple-900 text-white"
    >
      <div className="min-h-screen">
        <header className="flex justify-center items-center w-11/12 mx-auto left-1/2 -translate-x-1/2 p-[0.9px] rounded-full fixed top-1 z-50 bg-black/30 backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-500">
          <span className="flex justify-between items-center w-full bg-gray-900 text-white rounded-full pr-2 pl-4 py-2">
            <div className="flex items-center text-2xl font-bold">
              <Image
                src="/programmer.png"
                alt="Programmer Icon"
                width={30}
                height={30}
                className="mr-2"
              />
              HinCode
            </div>
            <nav className="hidden md:flex ">
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
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Light</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
              <span className="text-sm font-medium">Dark</span>
              <a
                href="#contact"
                className="btn btn-primary font-bold text-white px-2 md:px-6 py-2 rounded-full  transition-all duration-300 md:text-lg text-sm "
              >
                Contact me
              </a>
            </div>
            <button className="md:hidden" aria-label="Toggle Navigation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </span>
        </header>

        <div className="absolute top-[190px] flex-none w-10 h-96 overflow-hidden">
          <div className="top-30 left-0 w-full h-full flex flex-col gap-11">
            <div className="w-full h-1  transform rotate-45 origin-left"></div>
            <div className="w-full h-1  transform rotate-45 origin-left"></div>
            <div className="w-full h-1  transform rotate-45 origin-left"></div>
            <div className="w-full h-1  transform rotate-45 origin-left"></div>
            <div className="w-full h-1  transform rotate-45 origin-left"></div>
          </div>
        </div>

        <main className="flex justify-between items-center px-20 py-16 gap-12 mt-24">
          <div className="flex flex-grow flex-col items-start">
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
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-md md:text-xl flex items-center hover: transition-all duration-300"
            >
              <DownloadIcon />
              <span className="ml-2">Github</span>
            </button>
            <p className="mt-8 max-w-md text-md md:text-lg animate-fadeIn text-gray-400 border-l-2 border-gray-400 pl-4">
              I&apos;m a full-stack web developer and I work remotely from South
              of Vietnam.
            </p>
          </div>
          <div className="relative animate-float">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-50 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full opacity-30 blur-2xl animate-pulse delay-400"></div>
            <Image
              src="/avatar.png"
              alt="Hien The Phan"
              width={400}
              height={400}
              className="rounded-full relative z-10 shadow-lg right-10"
            />
          </div>
        </main>
        <div className="absolute right-8 top-1/3 transform -translate-y-1/3 flex flex-col gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-primary transition-all duration-300 transform hover:scale-110 bg-black p-3 rounded-full"
            >
              {link.icon}
            </a>
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
