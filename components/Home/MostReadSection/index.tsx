import { Blog } from "@/.contentlayer/generated";
import BlogLayoutLeft from "@/components/Blog/BlogLayoutLeft";
import BlogLayoutRight from "@/components/Blog/BlogLayoutRight";
import React from "react";

export default function MostreadSection({ blogs }: { blogs: Blog[] }) {
  return (
    <article>
      <div className="container mx-auto grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-1">
        <BlogLayoutLeft blogs={blogs} />

        <div className="col-span-12  lg:col-span-4">
          <div className="sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto">
          <BlogLayoutRight blogs={blogs}/>
          </div>
        </div>
      </div>
    </article>
  );
}
