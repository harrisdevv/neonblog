import React from "react";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold my-3" {...props} />,
  h3: (props) => <h3 className="text-xl font-medium my-2" {...props} />,
  p: (props) => <p className="my-2" {...props} />,
  // Add more components as needed
};

const MdxProvider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MdxProvider;
