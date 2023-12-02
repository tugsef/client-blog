import { Blog } from "@/.contentlayer/generated";
import React from "react";
import BlogTop from "./blogTop";
import { FiTrendingUp } from "react-icons/fi";

function BlogTopList({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="container px-6 lg-p-0 mt-5 md:mx-auto">
      <div className="flex items-center gap-x-2 lg:gap-x-4 mb-3   lg:mb-4 lg:text-lg text-base font-bold">
      <FiTrendingUp className="h-6 w-6" />
        <span>
        Trending on FocusSpark
        </span>
       
      </div>
      <dl className="grid  grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-3 lg:gap-y-10">
        {blogs.slice(0, 6).map((blog, index) => (
          <BlogTop key={index} sequence={index + 1} blog={blog} />
        ))}
      </dl>
    </div>
  );
}

export default BlogTopList;
