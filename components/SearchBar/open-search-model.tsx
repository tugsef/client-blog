"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SearchBar from ".";
import { allBlogs } from "@/.contentlayer/generated";

export default function OpenSearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openSearch = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Scroll'ü kapat
  };

  const closeSearch = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; // Scroll'ü aç
  };
  return (
    <>
      {isOpen && <SearchBar blogs={allBlogs} closeSearch={closeSearch} />}
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <button
          onClick={() => openSearch()}
          type="button"
          className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
        >
          <svg
            width={24}
            height={24}
            fill="none"
            aria-hidden="true"
            className="mr-3 flex-none"
          >
            <path
              d="m19 19-3.5-3.5"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx={11}
              cy={11}
              r={6}
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Quick search...
          <span className="ml-auto pl-3 flex-none text-xs font-semibold">
            ⌘K
          </span>
        </button>
      </motion.div>
      <button
        onClick={() => openSearch()}
        type="button"
        className="flex w-full lg:hidden items-center text-sm  text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm lg:p-2 p-0.5 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
      >
        <svg
          width={24}
          height={24}
          fill="none"
          aria-hidden="true"
          className="flex-none"
        >
          <path
            d="m19 19-3.5-3.5"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx={11}
            cy={11}
            r={6}
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
