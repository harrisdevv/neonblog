import React from "react";
import { Book } from "lucide-react"; // Import the desired icon from lucide-react
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import the desired arrow icons from lucide-react
import blogPosts from "../[id]/blogPosts.json"; // Import blog posts directly
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const foundPost = blogPosts.find((p) => p.id === parseInt(params.id)); // Find post from imported blogPosts

  if (!foundPost) {
    return <div>Post not found</div>;
  }

  const markdownFilePath = path.join(
    process.cwd(),
    "src/app/blog/(content)",
    foundPost.file
  );
  const markdownContent = fs.readFileSync(markdownFilePath, "utf-8");

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-primary mb-8">
        {foundPost.title}
      </h1>
      <div className="flex justify-between text-gray-400 mb-4 border-y border-y-gray-600 p-4">
        <p className="flex gap-x-14 items-center align-middle">
          <p>
            <span className="font-bold"> Author</span>&nbsp; Hien Phan
          </p>
          <p>
            <span className="font-bold"> Date</span>&nbsp;{foundPost.date}
          </p>
          <p>
            <span className="font-bold">Read</span> &nbsp;{foundPost.readTime}
          </p>
        </p>
        <button className="flex items-center  border btn btn-circle btn-primary   transition">
          <Book className="w-6 h-6" /> {/* Add the icon here */}
        </button>
      </div>
      <Image
        width={800}
        height={800}
        src={`/${foundPost.image}`}
        alt="Blog Post"
        className="w-full h-96 object-cover rounded-lg my-12"
      />
      <MarkdownRenderer content={markdownContent} />
      {/* Render the Markdown content */}
      <div className="flex justify-between mt-6">
        <a
          href="/blog/previous-post"
          className="flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="mr-1" /> {/* Add the left arrow icon */}
          Previous Post
        </a>
        <a
          href="/blog/next-post"
          className="flex items-center text-primary hover:underline"
        >
          Next Post
          <ArrowRight className="ml-1" /> {/* Add the right arrow icon */}
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
