import { CheckCircle } from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <p className="mb-8 text-gray-300">{children}</p>,
        h1: ({ children }) => (
          <h1 className="mb-6 text-3xl font-bold text-blue-800">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-5 text-2xl font-semibold text-blue-700">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mb-4 text-xl font-medium text-blue-600">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="mb-3 text-lg font-medium text-blue-600">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="mb-2 text-base font-normal text-blue-500">
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6 className="mb-1 text-base font-normal text-blue-500">
            {children}
          </h6>
        ),
        ul: ({ children }) => <ul className="mb-4 text-sm">{children}</ul>,

        li: ({ children }) => (
          <div className="flex ">
            <CheckCircle className="mr-2 text-blue-500" size={14} />
            <li className="mb-2 text-gray-300 ">{children}</li>
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
