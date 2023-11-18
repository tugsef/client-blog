"use client";
import { Blog } from "@/.contentlayer/generated";
import Tag from "@/components/Element/tag";
import React, { useState } from "react";
import { ITag, tagMapList } from "./service";

let increment = 3;
let starItem = 3;

export default function BlogLayoutRight({ blogs }: { blogs: Blog[] }) {
  const tagList:ITag[] = tagMapList(blogs);
  const [currentTotal, setCurrentTotal] = useState(starItem);
  const totalItems = tagList.length;

  const onNextClick = () => {
    setCurrentTotal(currentTotal + increment);
  };
  const displayedItems = tagList.slice(0, currentTotal);
  return (
    <div className="w-full text-center">
      <span className="block text-lg font-extrabold  p-0  mb-3 lg:mb-0 lg:p-6">
        # Topics that might interest you
      </span>
      {displayedItems.map((tag,index) => (
        <Tag
          link={`/categories/${tag.name.replace(" ", "-") as string} `}
          name={tag.name}
          key={index}
          value={tag.count}
        />
      ))}
      <br />
      {displayedItems.length < totalItems && (
        <button
          onClick={onNextClick}
          className="mt-1 text-sky-900 font-sans text-lg hover:border-2 hover:border-dark rounded-full py-2 px-3 hover:text-dark" 
        >
          Load more...
        </button>
      )}
    </div>
  );
}

