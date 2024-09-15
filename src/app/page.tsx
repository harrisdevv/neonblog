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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-purple-900 text-white">
      <header className="flex justify-between items-center w-11/12 mx-auto p-[0.8px] rounded-full sticky top-0 z-50 bg-black/30 backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-500">
        <span className="flex justify-between items-center w-full bg-gray-900 text-white rounded-full pr-2 pl-8 py-2">
          <div className="text-2xl font-bold">Hien The Phan</div>
          <nav className="flex gap-6">
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-all duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-all duration-300"
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
            <button className="bg-purple-800 font-bold text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-all duration-300 text-lg">
              Contact me
            </button>
          </div>
        </span>
      </header>


        <div className="absolute top-[190px] flex-none w-7 h-96 overflow-hidden">
          <div className="top-30 left-0 w-full h-full flex flex-col gap-11">
            <div className="w-full h-1 bg-purple-500 transform rotate-45 origin-left"></div>
            <div className="w-full h-1 bg-purple-500 transform rotate-45 origin-left"></div>
            <div className="w-full h-1 bg-purple-500 transform rotate-45 origin-left"></div>
            <div className="w-full h-1 bg-purple-500 transform rotate-45 origin-left"></div>
            <div className="w-full h-1 bg-purple-500 transform rotate-45 origin-left"></div>
          </div>
        </div>

      <main className="flex justify-between items-center px-20 py-16 gap-12">

        <div className="flex flex-grow flex-col items-start">
          <h1 className="text-4xl mb-4 animate-fadein text-gray-400 uppercase">
            FULL-STACK WEB DEVELOPER
          </h1>
          <h2 className="text-8xl font-bold mb-8 animate-slideInLeft">
            Hien
            <br />
            The Phan
          </h2>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl flex items-center hover:bg-purple-700 transition-all duration-300">
            <DownloadIcon />
            <span className="ml-2">CV</span>
          </button>
          <p className="mt-8 max-w-md text-lg animate-fadeIn text-gray-400 border-l-2 border-gray-500 pl-4">
            I&apos;m a full-stack web developer and I work remotely from South
            of Vietnam.
          </p>
        </div>
        <div className="relative animate-float">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-50 blur-3xl animate-pulse"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full opacity-40 blur-2xl animate-pulse delay-200"></div>
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-30 blur-2xl animate-pulse delay-400"></div>
          <Image
            src="/avatar.png"
            alt="Hien The Phan"
            width={400}
            height={400}
            className="rounded-full relative z-10 shadow-lg"
          />
        </div>
      </main>
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
        <a
          href="#"
          className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <DiscordIcon />
        </a>
        <a
          href="#"
          className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <FacebookIcon />
        </a>
        <a
          href="#"
          className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <InstagramIcon />
        </a>
        <a
          href="#"
          className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <TwitterIcon />
        </a>
        <a
          href="#"
          className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <YoutubeIcon />
        </a>
        <a
          href="#"
          className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <SendIcon />
        </a>
      </div>

      <About />
      <Skills />
      <Projects />
      <BlogPosts />
      <Contact />
      <Footer />
    </div>
  );
}
