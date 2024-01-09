"use client"
import  cx  from "../utils";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"
const Tag = ({ link = "#", name, ...props }: any) => {
  return (
    <Link href={link} className="w-full h-full">
       <button
    
        className={cx(
          "py-1.5 lg:py-2.5 px-3 lg:.px-5  me-2 mb-2 text-sm font-medium dark:text-light focus:outline-none  rounded-full border border-gray-400 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700   dark:hover:text-white dark:hover:bg-gray-700 hover:scale-105 transition-all ease duration-200 shadow-sm hover:shadow-2xl"
        )}
      >
        {name}
        {props.value && (
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {props.value}
          </span>
        )}
      </button>
    </Link>
  );
};

export default Tag;
