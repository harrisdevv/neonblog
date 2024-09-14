import Image from 'next/image';
import React from 'react';

interface BlogPost {
  title: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "React Suspense and React.lazy by Example",
    description: "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
    image: "/images/blog1.jpg",
  },
  {
    title: "10 Things to Know About ES6 before Learning React JS",
    description: "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
    image: "/images/blog2.jpg",
  },
  {
    title: "5 Command Line Tips and Tricks All Web Developers to Know",
    description: "When apps start to grow you can easily end up including too many components making it heavier and slow to load. One of the solutions to this problem is Code-Splitting and Webpack is probably ...",
    image: "/images/blog3.jpg",
  },
];

const BlogPosts: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 animate-fadeIn">My blog</h2>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full mb-8 hover:bg-purple-700 transition-all duration-300 animate-fadeIn">See all</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn" style={{animationDelay: `${index * 0.2}s`}}>
              <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors duration-300">Read more &gt;&gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
