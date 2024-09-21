"use client";
import React, { useState } from "react";
import { Book } from "lucide-react"; // Import the desired icon from lucide-react
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import the desired arrow icons from lucide-react

const BlogPost = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log({ comment, name, email });
    setComment("");
    setName("");
    setEmail("");
  };

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
        <button className="flex items-center text-purple-400 border border-purple-600 p-4 rounded-full hover:bg-purple-600 hover:text-white transition">
          <Book className="w-6 h-6" /> {/* Add the icon here */}
        </button>
      </div>
      <Image
        width={800}
        height={800}
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

      <div className="flex justify-between mt-6">
        <a
          href="/blog/previous-post"
          className="flex items-center text-purple-600 hover:underline"
        >
          <ArrowLeft className="mr-1" /> {/* Add the left arrow icon */}
          Previous Post
        </a>
        <a
          href="/blog/next-post"
          className="flex items-center text-purple-600 hover:underline"
        >
          Next Post
          <ArrowRight className="ml-1" /> {/* Add the right arrow icon */}
        </a>
      </div>

      <hr className="my-12" />
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-500">Comments</h2>
        <div className="mb-4">
          <p className="font-bold">Name</p>
          <p>
            Wow! Wonderful post. I found it very interesting and fascinating.
            Maybe you should type smith more. Id love to read your posts over
            and over again.
          </p>
          <p className="text-gray-500">2024-08-10, 10:02 pm</p>
        </div>
        <form
          onSubmit={handleCommentSubmit}
          className="border-t border-gray-300 pt-4"
        >
          <h3 className="font-bold my-4">Add comment</h3>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="comment">
              Comment *
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-full border border-gray-300 p-2"
              placeholder="Type your comment..."
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">
              Name *
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 p-2"
              placeholder="Name ..."
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-2"
              placeholder="Email ..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
