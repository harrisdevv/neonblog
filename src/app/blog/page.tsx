"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import blogPosts from "./[id]/blogPosts.json"; // Import blog posts directly

const BlogPage: React.FC = () => {
  return (
    <>
      <div className="space-y-10">
        {blogPosts.map((post) => (
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
              <h2 className="text-3xl text-primary">
                <a href={`blog/${post.id}`} className="hover:underline">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-400 my-4">{post.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="badge badge-primary rounded-full px-3 py-1 text-sm font-semibold mr-2">
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
