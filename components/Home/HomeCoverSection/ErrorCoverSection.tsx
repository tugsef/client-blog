"use client";
import React from "react";
import { delay, motion } from "framer-motion";
import Link from "next/link";

export default function HomeCoverSection() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="bg-blue-300 dark:bg-dark">
      <div className="flex items-center lg:h-[40rem] h-[20rem] container px-3 lg:mx-auto ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex-1"
        >
          <span className="font-mono lg:text-6xl text-2xl text-light">
            Reading or writing?
          </span>
          <br />
          <br />
          <span className="font-mono lg:text-3xl text-xl opacity-50 text-light">
            Follow authors and features <br />
            in the software field.{" "}
          </span>
          <br />
          <br />
          <button className=""></button>
          <Link href={"/categories/all"} className="text-sm lg:text-xl ">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="inline-block rounded-full px-2 py-2 lg:px-3 lg:p-3  bg-transparent border-light text-light dark:border-white border-2 font-mono  lg:mt-5 mt-3  "
          >
           <span >Now reading</span>
          </motion.div>
          </Link>
        </motion.div>
        <div className="hidden xl:block">
          <div className="flex-1">
            <motion.div
              className="grid grid-rows-4 grid-flow-col gap-10 justify-items-center"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {[
                0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 11, 11, 12, 13,
                13, 14, 15, 15, 16, 17, 17, 18, 19, 19, 20, 21, 21,
              ].map((repeat, index) => {
                if (repeat % 2 === 0) {
                  return (
                    <motion.div
                      key={index}
                      variants={item}
                      animate={{ rotate: 360 }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="text-light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        className="opacity-15"
                      >
                        <g transform="rotate(180 12 12)">
                          <path
                            fill="currentColor"
                            d="M8 2H3a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V4h4a1 1 0 0 0 0-2Zm0 18H4v-4a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2ZM21 2h-5a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Zm0 13a1 1 0 0 0-1 1v4h-4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"
                          />
                        </g>
                      </svg>
                    </motion.div>
                  );
                } else {
                  return <div key={index} className="h-1"></div>;
                }
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
