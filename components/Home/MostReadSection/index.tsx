"use client";
import { Blog } from "@/.contentlayer/generated";
import BlogLayoutLeft from "@/components/Blog/BlogLayoutLeft/BlogLayoutLeft";
import BlogLayoutRight from "@/components/Blog/BlogLayoutRight";
import React, { useState } from "react";

let increment = 3;
let starItem = 4;

export default function MostreadSection({ blogs }: { blogs: Blog[] }) {
  const [currentTotal, setCurrentTotal] = useState(starItem);
  const totalItems = blogs.length;

  const onNextClick = () => {
    if (currentTotal === totalItems) return false;
    setCurrentTotal(currentTotal + increment);
  };
  const displayedItems = blogs.slice(0, currentTotal);
  return (
    <article className="py-4  ms:py-6 lg:py-8 ">
      <div className="container mx-auto grid grid-cols-12  gap-y-4 lg:gap-4 sxl:gap-12 mt-8 px-5 md:px-1">
        <BlogLayoutLeft
          displayedItems={displayedItems}
          onNextClick={onNextClick}
          totalItems={totalItems}
        />

        <div className="col-span-12  lg:col-span-4">
          <div className="sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto">
            <BlogLayoutRight blogs={blogs} />
          </div>
        </div>
      </div>
    </article>
  );
}
