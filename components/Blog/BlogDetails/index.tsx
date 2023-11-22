import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";

import { Blog } from "@/.contentlayer/generated";
import ViewCounter from "../ViewCounter";
import { slug } from "github-slugger";

const BlogDetails = ({ blog ,slugBlog}: { blog: Blog; slugBlog: string }) => {
  return (
    <div className="px-2 rounded-md bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mt-8  md:container md:mx-auto md:px-0">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      <ViewCounter slug={slugBlog} /> 
      <div className="m-3">{blog.readingTime.text}</div>
      <Link
        href={`/categories/${blog.tags?.[0].replace(" ", "-")}`}
        className="m-3"
      >
        #{slug(blog.tags?.[0] as string)}
      </Link>
    </div>
  );
};

export default BlogDetails;
