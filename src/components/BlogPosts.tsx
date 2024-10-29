import Image from "next/image";
import React from "react";
import blogPosts from "../app/blog/[id]/blogPosts.json";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  file: string;
}

const BlogPosts: React.FC = () => {
  return (
    <section className="py-36 bg-black  relative z-3">
      <div className="container mx-auto px-4 relative z-3">
        <h2 className="text-7xl font-bold mb-8 animate-fadeIn">My blog</h2>
        <a href="/blog">
          <button className="btn btn-secondary btn-lg font-bold  px-6 py-2 rounded-full mb-8  transition-all duration-300 animate-fadeIn relative z-10">
            See all
          </button>
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {blogPosts.slice(0, 10).map((post: BlogPost, index: number) => (
            <div
              key={index}
              className=" relative z-10 border-gray-900 bg-transparent rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Image
                src={`/${post.image}`}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font mb-4">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <a
                  href={`blog/${post.id}`}
                  className="text-purple-500  transition-colors duration-300 text-xl"
                >
                  Read more &gt;&gt;
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-10 left-10 bg-blue-800 w-96 h-96 blur-3xl opacity-15 rounded-full z-1 "></div>
        <div className="absolute top-1/3 right-0 bg-purple-800 w-96 h-96 blur-3xl opacity-15 rounded-full z-1 "></div>
        <div className="absolute bottom-10 right-1/2 bg-pink-900 w-96 h-96 blur-3xl opacity-15 rounded-full z-1 "></div>
      </div>
    </section>
  );
};

export default BlogPosts;
