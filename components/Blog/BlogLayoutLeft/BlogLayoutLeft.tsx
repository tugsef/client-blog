"use client";
import React from "react";
import LeftListItem from "./LeftListItem";
import { Blog } from "@/.contentlayer/generated";
import { FaBookReader } from "react-icons/fa";
import { cx } from "@/components/utils";


export default function BlogLayoutLeft({
  displayedItems, onNextClick, totalItems,
}: {
  displayedItems: Blog[];
  onNextClick: any;
  totalItems: number;
}): React.JSX.Element {
  return (
    <section className="col-span-12  lg:col-span-8  max-w-max ">
      <span className="flex items-center gap-3 font-bold text-lg pb-6 ">
        {" "}
        <FaBookReader className="animate-rotate-y animate-infinite" /> Our picks
        for you
      </span>

      {displayedItems.map((blog) => (
        <LeftListItem key={blog._id} blog={blog} />
      ))}
      {displayedItems.length < totalItems && (
        <div className="w-full text-center">
          <button
            onClick={onNextClick}
            className={cx(
              "text-lg   opacity-60 border-y-stone-700 hover:text-[#FF9119] py-4  ms:py-6 lg:py-8 "
            )}
          >
            Load more...
          </button>
        </div>
      )}
    </section>
  );
}
