import { Blog } from "@/.contentlayer/generated";
import BlogTopList from "@/components/Blog/BlogTopList";
import { sortBlogs } from "@/components/utils";
import React from "react";

function FeaturedPosts({ blogs }: { blogs: Blog[] }) {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="py-4  ms:py-6 lg:py-8">
      <BlogTopList blogs={sortedBlogs} />
    </section>
  );
}

export default FeaturedPosts;
