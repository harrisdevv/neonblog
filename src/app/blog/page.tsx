'use client'
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import blogPosts from "./[id]/blogPosts.json"; // Import blog posts directly

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState(blogPosts); // Set initial state with imported blogPosts

  return (
    <>
      <div className="space-y-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex"
          >
            <Image
              width={200}
              height={200}
              src={`/${post.image}`}
              alt={post.title}
              className="w-1/3 h-full object-cover rounded-lg mr-6"
            />
            <div className="flex-1">
              <h2 className="text-4xl text-purple-300">
                <a href={`blog/${post.id}`} className="hover:underline">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-400 mt-2">{post.description}</p>
              <a
                href={`blog/${post.id}`}
                className="text-purple-500  transition-colors duration-300 mt-4 block"
              >
                Read More &gt;&gt;
              </a>
              <div className="flex justify-between items-center mt-4">
                <span className="bg-gray-600 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  {post.tag}
                </span>
                <span className="text-gray-400">
                  <span className="text-white">Date</span> {post.date} |{" "}
                  <span className="text-white">Read</span> {post.readTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <button className="flex items-center text-purple-500 ">
          <ArrowLeft className="mr-2" /> Previous
        </button>
        <button className="flex items-center text-purple-500 ">
          Next <ArrowRight className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default BlogPage;
