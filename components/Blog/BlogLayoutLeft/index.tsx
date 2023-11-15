import React from "react";
import LeftListItem from "./LeftListItem";
import { Blog } from "@/.contentlayer/generated";

export default function BlogLayoutLeft({ blogs }: { blogs: Blog[] }) {
  return (
    <section className="col-span-12  lg:col-span-8  max-w-max">
      {blogs.slice(3, 8).map((blog) => (
        <LeftListItem key={blog._id} blog={blog} />
      ))}
  </section>
  );
}
