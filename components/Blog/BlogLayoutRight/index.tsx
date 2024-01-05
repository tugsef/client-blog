"use client";
import { Blog } from "@/.contentlayer/generated";
import Tag from "@/components/Element/tag";
import React, { useState } from "react";
import { ITag, tagMapList } from "./service";
import { motion } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";

let increment = 3;
let starItem = 10;

export default function BlogLayoutRight({ blogs }: { blogs: Blog[] }) {
  const tagList: ITag[] = tagMapList(blogs);
  const [currentTotal, setCurrentTotal] = useState(starItem);
  const totalItems = tagList.length;

  const onNextClick = () => {
    setCurrentTotal(currentTotal + increment);
  };
  const displayedItems = tagList.slice(0, currentTotal);
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="w-full text-center"
    >
      <span className="block text-lg font-extrabold  p-0  mb-3 lg:mb-0 lg:p-6">
        <span className="shadow-md rounded-lg p-2 m-2">#</span>{" "}
        <h1 className="tracking-wide inline-block">
          Topics that might interest you
        </h1>
      </span>
      {displayedItems.map((tag, index) => (
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
          className="mt-1 opacity-60   font-sans text-lg   rounded-full py-2 px-3 hover:text-[#FF9119]"
        >
          <LuChevronDown className="w-5 h-5 lg:h-10 lg:w-10"/>
        </button>
      )}
    </motion.div>
  );
}
