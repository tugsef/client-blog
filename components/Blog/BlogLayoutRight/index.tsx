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
    <aside>
      <span className="block text-lg font-extrabold  p-0  mb-3 lg:mb-0 lg:p-6">
        <span className="shadow-md rounded-lg p-2 m-2">#</span>{" "}
        <h1 className="tracking-wide inline-block">
          Topics that might interest you
        </h1>
      </span>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{
          y: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="w-full text-center"
      >
        <ul className="dark:bg-slate-600/20 p-3 rounded-2xl max-h-[80vh] overflow-hidden overflow-y-auto">
          {displayedItems.map((tag, index) => (
            <li key={index} className="inline-block">
              <Tag
                link={`/categories/${tag.name.replace(" ", "-") as string} `}
                name={tag.name}
                value={tag.count}
              />
            </li>
          ))}
        </ul>

        <br />
        {displayedItems.length < totalItems && (
          <button
            onClick={onNextClick}
            className="opacity-60   font-sans text-lg   rounded-full   hover:text-accentDark"
          >
            <LuChevronDown className="w-5 h-5 lg:h-10 lg:w-10 -mt-5" />
          </button>
        )}
      </motion.div>
    </aside>
  );
}
