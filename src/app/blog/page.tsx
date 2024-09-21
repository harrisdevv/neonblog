import React from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "What does it take to become a web developer?",
    description:
      "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet...",
    date: "10.Oct 2023",
    readTime: "1 Min",
    tag: "Web Development",
    image: "project1.jpg",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    description:
      "React Hooks are functions that let you use state and other React features without writing a class...",
    date: "12.Oct 2023",
    readTime: "2 Min",
    tag: "React",
    image: "project2.jpg",
  },
  {
    id: 3,
    title: "A Guide to CSS Grid",
    description:
      "CSS Grid Layout is a two-dimensional layout system for the web that allows you to design web pages using a grid-based approach...",
    date: "15.Oct 2023",
    readTime: "3 Min",
    tag: "CSS",
    image: "project3.jpg",
  },
  {
    id: 4,
    title: "Exploring TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, providing better tooling at any scale...",
    date: "18.Oct 2023",
    readTime: "2 Min",
    tag: "TypeScript",
    image: "project4.jpg",
  },
  {
    id: 5,
    title: "The Future of Web Development",
    description:
      "The future of web development is bright, with new technologies and frameworks emerging every day to enhance user experience...",
    date: "20.Oct 2023",
    readTime: "4 Min",
    tag: "Future Trends",
    image: "coding2.jpg",
  },
];

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
              src={post.image}
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
                className="text-purple-500 hover:text-purple-400 transition-colors duration-300 mt-4 block"
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
        <button className="flex items-center text-purple-500 hover:text-purple-400">
          <ArrowLeft className="mr-2" /> Previous
        </button>
        <button className="flex items-center text-purple-500 hover:text-purple-400">
          Next <ArrowRight className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default BlogPage;
