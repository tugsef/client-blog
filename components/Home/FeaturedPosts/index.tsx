import { Blog } from "@/.contentlayer/generated";
import BlogTopList from "@/components/Blog/BlogTopList";
import { sortBlogs } from "@/components/utils";
import React from "react";

function FeaturedPosts({ blogs }: { blogs: Blog[] }) {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section>
      <BlogTopList blogs={sortedBlogs} />
    </section>
  );
}

export default FeaturedPosts;
