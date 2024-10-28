"use client";
import { Book } from "lucide-react"; // Import the desired icon from lucide-react
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../ImageIcon";
import {
  Code,
  Rocket,
  Mail,
  BriefcaseBusiness,
  CornerRightDown,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import blogPosts from "./[id]/blogPosts.json"; // Importing the blog posts JSON

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search input

  // Filter and sort blog posts based on the search query and date
  const filteredPosts = blogPosts
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort from most recent to oldest
    .slice(0, 10);

  return (
    <div className=" p-10 md:p-20 flex flex-col max-w-8xl mx-auto relative">
      <div className="flex">
        <div className="absolute top-0 left-0 bg-blue-400 w-96 rounded-full h-96 blur-3xl opacity-15 z-10"></div>
        <div className="absolute top-0 right-0 bg-blue-400 w-96 rounded-full h-96 blur-3xl opacity-15 z-10"></div>
        <div className="absolute top-1/4 right-0 bg-pink-400 w-96 rounded-full h-96 blur-3xl opacity-15 z-10"></div>
        <div className="flex-1 relative z-20">
          <a href="/blog" className="flex items-center justify-center mb-4">
            <Image
              width={128}
              height={128}
              src="/programmer.png"
              alt="Programmer"
              className="w-16 h-16 rounded-full mr-3"
            />
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary flex items-center">
              HinCode&apos;s space
              <Rocket className="ml-2" />
              <Code className="ml-2" />
              <Book className="ml-2" />
            </h1>
          </a>
          <p className="text-lg mb-10 text-center font-semibold text-gray-300 border-b-2 border-b-transparent pb-10 relative">
            My thoughts on technology and business, welcome to subscribe
            <CornerRightDown className="w-10 h-10 inline ml-2 transition-transform transform hover:scale-110 hover:animate-bounce text-primary" />
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></span>
          </p>
          <div className="flex flex-col mb-10 gap-4 md:flex-grow xl:flex-row md:items-center md:justify-between mx-auto max-w-3xl">
            <div className="flex flex-col md:flex-row md:items-center">
              <label className="text-gray-300 mb-2 md:mb-0 md:mr-2">
                Subscribe
              </label>
              <input
                type="email"
                placeholder="📧 Enter your email for the newsletter"
                className="input flex-1 w-full lg:w-96 p-2 border rounded mb-2 md:mb-0"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <button className="btn btn-outline btn-primary rounded-full transition-all duration-300 flex items-center justify-center text-center md:mr-2 mb-2 md:mb-0">
                <Mail className="mr-1" /> Subscribe
              </button>
              <a
                href="/"
                className="btn btn-outline btn-primary rounded-full transition-all duration-300 flex items-center justify-center"
              >
                <BriefcaseBusiness className="mr-1" /> Portfolio
              </a>
            </div>
          </div>
          {children}
        </div>
        <div className="w-1/4 ml-10 relative z-20">
          <h2 className="text-2xl font-bold mb-4 pt-4 pb-4 ">Search</h2>
          <input
            type="text"
            placeholder="Type something..."
            className="w-full p-2 input rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
          />
          <h2 className="text-2xl font-bold mb-4 pt-4 pb-4">Recent Posts</h2>
          <ul className="space-y-2">
            {filteredPosts.map((post) => (
              <li key={post.id}>
                <a href={`/blog/${post.id}`} className="text-primary ">
                  {post.title}
                </a>
                <span className="text-gray-500 block">{post.date}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-4 pt-4 pb-4 ">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(blogPosts.map((post) => post.tag))).map(
              (tag) => (
                <span key={tag} className="badge badge-primary">
                  {tag}
                </span>
              )
            )}
          </div>
          <h2 className="text-2xl font-bold mb-4 pt-4 pb-4 ">Follow Me</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#"
              className="btn btn-outline btn-primary border-2 p-3 transition-all rounded-full border-gray-900 flex items-center justify-center"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="btn btn-outline btn-primary border-2 p-3 transition-all rounded-full border-gray-900 flex items-center justify-center"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="btn btn-outline btn-primary border-2 p-3 transition-all rounded-full border-gray-900 flex items-center justify-center"
            >
              <DiscordIcon />
            </a>
            <a
              href="#"
              className="btn btn-outline btn-primary border-2 p-3 transition-all rounded-full border-gray-900 flex items-center justify-center"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="btn btn-outline btn-primary border-2 p-3 transition-all rounded-full border-gray-900 flex items-center justify-center"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full items-center border-t border-primary mt-14 pt-4">
        <p className="mb-4 md:mb-0">
          © 2024 Hien The Phan. All rights reserved
        </p>
        <div>
          <a href="#terms" className="mr-4 transition-colors duration-300">
            Terms of Use
          </a>
          <a href="#privacy" className=" transition-colors duration-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
