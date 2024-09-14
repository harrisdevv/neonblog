import Image from "next/image";
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import BlogPosts from "../components/BlogPosts"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { ImageIcon, LinkIcon, DownloadIcon, DiscordIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, SendIcon } from "./ImageIcon";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-purple-900 text-white">
      <header className="flex justify-between items-center w-full p-4 sticky top-0 z-50 bg-black/30 backdrop-blur-md">
        <div className="flex gap-4">
          <button className="bg-black/30 text-white px-4 py-2 rounded-full flex items-center hover:bg-purple-600 transition-all duration-300">
            <ImageIcon />
            <span className="ml-2">More Like This</span>
          </button>
          <button className="bg-black/30 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all duration-300">Save</button>
          <button className="bg-black/30 text-white px-4 py-2 rounded-full flex items-center hover:bg-purple-600 transition-all duration-300">
            <LinkIcon />
            <span className="ml-2">Permalink</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span>Light</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span>Dark</span>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all duration-300">Contact me</button>
        </div>
      </header>
      <main className="flex-grow flex justify-between items-center px-20 py-16">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-light mb-4 animate-fadeIn">FULL-STACK WEB DEVELOPER</h1>
          <h2 className="text-8xl font-bold mb-8 animate-slideInLeft">Hien<br />The Phan</h2>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl flex items-center hover:bg-purple-700 transition-all duration-300 animate-fadeIn">
            <DownloadIcon />
            <span className="ml-2">CV</span>
          </button>
          <p className="mt-8 max-w-md text-lg animate-fadeIn">
            I&apos;m a full-stack web developer and I work remotely from South of Vietnam.
          </p>
        </div>
        <div className="relative animate-float">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-50 blur-3xl animate-pulse"></div>
          <Image src="/avatar.png" alt="Hien The Phan" width={400} height={400} className="rounded-full relative z-10" />
        </div>
      </main>
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
        <a href="#" className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"><DiscordIcon /></a>
        <a href="#" className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"><FacebookIcon /></a>
        <a href="#" className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"><InstagramIcon /></a>
        <a href="#" className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"><TwitterIcon /></a>
        <a href="#" className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"><YoutubeIcon /></a>
        <a href="#" className="text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"><SendIcon /></a>
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
