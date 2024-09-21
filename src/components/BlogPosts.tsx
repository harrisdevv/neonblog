import Image from "next/image";
import React from "react";

interface BlogPost {
  title: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "React Suspense and React.lazy by Example",
    description:
      "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
    image: "/publiccoding.jpg",
  },
  {
    title: "10 Things to Know About ES6 before Learning React JS",
    description:
      "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
    image: "/coding2.jpg",
  },
  {
    title: "5 Command Line Tips and Tricks All Web Developers to Know",
    description:
      "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
    image: "/coding3.jpg",
  },
];

const BlogPosts: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white relative z-3">
      <div className="container mx-auto px-4 relative z-3">
        <h2 className="text-7xl font-bold mb-8 animate-fadeIn">My blog</h2>
        <a href="/blog">
          <button className="bg-purple-600 font-bold text-white px-6 py-2 rounded-full mb-8 hover:bg-purple-700 transition-all duration-300 animate-fadeIn relative z-10">
            See all
          </button>
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className=" relative z-10 border-gray-900 bg-transparent rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Image
                src={`${post.image}`}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font mb-4">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <a
                  href="#"
                  className="text-purple-500 hover:text-purple-400 transition-colors duration-300 text-xl"
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
