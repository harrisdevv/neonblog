"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import blogPosts from "./[id]/blogPosts.json"; // Import blog posts directly

const BlogPage: React.FC = () => {
  const filteredPosts = blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ); // Sort from most recent to oldest

  return (
    <>
      <div className="space-y-10">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="relative group bg-gray-900 p-6 rounded-lg flex flex-col md:flex-row overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-900/30 transition-all duration-500 transform origin-bottom scale-y-0 group-hover:scale-y-100" />
            <Image
              width={200}
              height={200}
              src={`/${post.image}`}
              alt={post.title}
              className="w-full md:w-1/3 h-48 md:h-full mt-4 object-cover rounded-lg mr-0 md:mr-6 z-10"
            />
            <div className="flex-1 z-10 relative">
              <h2 className="text-2xl md:text-3xl text-white">
                <a href={`blog/${post.id}`} className="hover:underline">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-400 my-4 text-sm md:text-base">
                {post.description}
              </p>
              <div className="flex flex-wrap justify-between items-center mt-4">
                <span className="badge badge-primary rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 sm:mb-0">
                  {post.tag}
                </span>
                <span className="text-gray-400 flex items-center text-sm md:text-base">
                  <span className="font-bold mr-2">Date:</span> {post.date}
                  <div className="divider divider-horizontal mx-1"></div>
                  <span className="font-bold mr-2">Read:</span> {post.readTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <button className="flex items-center text-primary">
          <ArrowLeft className="mr-2" /> Previous
        </button>
        <button className="flex items-center text-primary">
          Next <ArrowRight className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default BlogPage;
