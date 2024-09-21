import React from "react";
import { Book } from "lucide-react"; // Import the desired icon from lucide-react
import Image from "next/image";
const BlogPost = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-purple-500 mb-8">
        What does it take to become a web developer?
      </h1>
      <div className="flex justify-between text-gray-400 mb-4 border-y border-y-gray-600 p-4">
        <p className="flex gap-x-14 items-center align-middle">
          <p>
            <span className="font-bold"> Author</span>&nbsp; Hien Phan
          </p>
          <p>
            <span className="font-bold"> Date</span>&nbsp;10.Oct 2023
          </p>
          <p>
            <span className="font-bold">Read</span> &nbsp;1 Min
          </p>
        </p>
        <p></p>
        <p></p>
        <button className="flex items-center text-purple-400 border border-purple-600 p-4 rounded-full hover:bg-purple-600 hover:text-white transition">
          <Book className="w-6 h-6" /> {/* Add the icon here */}
        </button>
      </div>
      <Image
        src="/coding3.jpg"
        alt="Blog Post"
        className="w-full h-96 object-cover rounded-lg my-12"
      />
      <p className="text-lg mb-4">
        Web development, also known as website development, encompasses a
        variety of tasks and processes involved in creating websites for the
        internet. It involves various specialized fields, each with its own set
        of skills and techniques. While some individuals might view web
        development as a holistic process, it can be broken down into several
        key areas that are essential for building a functional and visually
        appealing website.
      </p>
      <h2 className="text-2xl font-bold mt-4">Frontend Development:</h2>
      <p className="mb-4">
        Frontend development focuses on the visual aspects of a website,
        including layout, design, and interactivity. It involves using
        technologies like HTML, CSS, and JavaScript to create user-friendly
        interfaces.
      </p>
      <h2 className="text-2xl font-bold mt-4">Backend Development:</h2>
      <p className="mb-4">
        Backend development involves server-side programming, database
        management, and application logic. It ensures that the frontend can
        communicate with the server and retrieve data as needed.
      </p>
      <h2 className="text-2xl font-bold mt-4">Conclusion:</h2>
      <p>
        Becoming a web developer requires a blend of technical skills,
        creativity, and a willingness to learn. With the right tools and
        knowledge, anyone can embark on this exciting journey.
      </p>
    </div>
  );
};

export default BlogPost;
