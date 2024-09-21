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
  ArrowRight,
  Code,
  Rocket,
  Mail,
  BriefcaseBusiness,
  CornerRightDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

// Define the BlogPost interface
interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tag: string;
  image: string;
}
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch("/blogPosts.json");
      if (!response.ok) {
        console.error("Failed to fetch blog posts:", response.statusText);
        return;
      }
      const data = await response.json();
      setBlogPosts(data);
    };

    fetchBlogPosts();
  }, []);
  return (
    <div className="bg-black text-white p-10 md:p-20 flex flex-col max-w-8xl mx-auto relative">
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
            <h1 className="text-4xl md:text-7xl font-extrabold text-purple-500 flex items-center">
              HinCode&apos;s space
              <Rocket className="ml-2" />
              <Code className="ml-2" />
              <Book className="ml-2" />
            </h1>
          </a>
          <p className="text-lg mb-10 text-center font-semibold text-gray-300 border-b-2 border-b-transparent pb-10 relative">
            My thoughts on technology and business, welcome to subscribe
            <CornerRightDown className="w-10 h-10 inline ml-2 transition-transform transform hover:scale-110 hover:animate-bounce text-purple-500" />
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></span>
          </p>
          <div className="flex gap-4 mb-10">
            <label className="text-gray-300">
              I write 1 blog post per week (total 500+ post)
            </label>
            <ArrowRight className="mr-4 w-8 h-8 inline" />
            <input
              type="email"
              placeholder="Enter your email for the newsletter"
              className="w-2/3 p-2 border border-gray-300 rounded"
              required
            />
            <button className="bg-purple-700 text-white px-6 py-3 rounded-full mx-auto hover:bg-purple-500 transition-all duration-300 flex items-center">
              <Mail className="mr-2" /> Subscribe
            </button>
            <a
              href="/"
              className="bg-purple-700 text-white px-6 py-3 rounded-full mx-auto hover:bg-purple-500 transition-all duration-300 flex items-center"
            >
              <BriefcaseBusiness className="mr-2" /> Portfolio
            </a>
          </div>
          {children}
        </div>
        <div className="w-1/4 ml-10 relative z-20">
          <h2 className="text-2xl font-bold mb-4 pt-4 pb-4">Search</h2>
          <input
            type="text"
            placeholder="type smth..."
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <h2 className="text-2xl font-bold mb-4 pt-4 pb-4">Recent Posts</h2>
          <ul className="space-y-2">
            {blogPosts.map((post) => (
              <li key={post.id}>
                <a
                  href={`/blog/${post.id}`}
                  className="text-purple-500 hover:text-purple-400"
                >
                  {post.title}
                </a>
                <span className="text-gray-500 block">{post.date}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-4 pt-4 pb-4">Tags</h2>
          <div className="flex flex-wrap">
            {blogPosts.map((post) => (
              <span
                key={post.id}
                className="bg-gray-700 text-purple-500 rounded-full px-3 py-1 mr-2 mb-2"
              >
                {post.tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4 pt-4 pb-4">
            Landing Page Buttons
          </h2>
          <div className="space-y-2">
            <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition-all duration-300 w-full">
              Get Started
            </button>
            <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition-all duration-300 w-full">
              Contact Us
            </button>
            <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition-all duration-300 w-full">
              Learn More
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4 pt-4 pb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-purple-500 hover:text-white hover:bg-purple-500  border-2 p-3 transition-all rounded-full border-gray-900"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="text-purple-500 hover:text-white hover:bg-purple-500  border-2 p-3 transition-all rounded-full border-gray-900"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="text-purple-500 hover:text-white hover:bg-purple-500  border-2 p-3 transition-all rounded-full border-gray-900"
            >
              <DiscordIcon />
            </a>
            <a
              href="#"
              className="text-purple-500 hover:text-white hover:bg-purple-500  border-2 p-3 transition-all rounded-full border-gray-900"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="text-purple-500 hover:text-white hover:bg-purple-500  border-2 p-3 transition-all rounded-full border-gray-900"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full items-center border-t border-violet-600 mt-14 pt-4">
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
  );
}
