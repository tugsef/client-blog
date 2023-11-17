import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";

import { Blog } from "@/.contentlayer/generated";
import ViewCounter from "../ViewCounter";

const BlogDetails = ({ blog, slug:blogSlug}:{blog:Blog,slug:string}) => {
  return (
    <div className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      {/* <ViewCounter slug={blogSlug} /> */}
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${blog.tags?.[0].replace(" ","-")}`} className="m-3">
        #{blog.tags?.[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;