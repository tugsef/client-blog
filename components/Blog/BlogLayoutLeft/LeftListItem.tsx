"use client"
import { Blog } from "@/.contentlayer/generated";
import Image, { StaticImageData } from "next/image";
import React from "react";
import profileImg from "@/public/images/me.jpg";
import Link from "next/link";
import { format } from "date-fns";
import { slug } from "github-slugger";
import siteImg from "@/public/logo.png";
import { motion } from "framer-motion";

export default function LeftListItem({ blog }: { blog: Blog }) {
  let selectImg: StaticImageData = profileImg;

  if (blog?.author.toLowerCase() === "focusspark") {
    selectImg = siteImg;
  }
  const slugTag = blog.tags?.[0];
  return (
    <motion.article
      initial={{ y: 100 }}
      whileInView={{
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="grid grid-cols-12 justify-items-stretch py-4   group hover:shadow-2xl px-4 hover:pl-3 hover:pe-5 hover:rounded-xl hover:dark:bg-slate-600 shadow-xl rounded-xl my-4 cursor-pointer"
    >
      <div className="col-span-9 lg:col-span-9 flex flex-col justify-center">
        <div className="flex gap-2 ite">
          <Image
            src={selectImg}
            alt={blog.author}
            width="30"
            height="30"
            className="flex-none rounded-full bg-slate-100"
          />
          <h2 className="font-semibold text-slate-900 truncate pr-20 opacity-60 dark:text-light">
            {blog.author}
          </h2>
        </div>
        <article className="flex items-start">
          <div className="min-w-0 relative flex-auto">
            <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
              <Link href={blog.url}>
                <div>
                  <dt className="sr-only">Title</dt>

                  <dd className="lg:font-extrabold font-bold text-sm sm:text-xl tracking-wider">
                    <span
                      className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
  dark:to-accentDark/50 bg-[length:0px_2px]
  group-hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                    >
                      {blog.title}
                    </span>
                  </dd>
                </div>
                <div className="my-1 lg:my-3">
                  <dt className="sr-only">description</dt>
                  <dd className="hidden md:inline-flex text-lg text-gray">
                    {blog.description.slice(0, 120)}...
                  </dd>
                </div>
              </Link>

              <div className="flex-none w-full font-normal">
                <dt className="sr-only">Runtime</dt>
                <dd className="text-slate-400 text-xs lg:text-base">
                  {format(new Date(blog.publishedAt), "MMM dd")}
                  &nbsp;·&nbsp;{blog.readingTime.text}&nbsp;·&nbsp;
                  <Link
                    href={`/categories/${slug(slugTag as string)}`}
                    className="px-1.5 ring-1 ring-slate-200 rounded-full"
                  >
                    {blog.tags?.[0]}
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
      <div className="col-span-3 lg:col-span-3 flex justify-end ml-1 items-center w-full h-full">
        <Link href={blog.url}>
          <Image
            src={blog.image?.filePath.replace("../public", "") as string}
            placeholder="blur"
            blurDataURL={blog.image?.blurhashDataUrl}
            alt={blog.title}
            width={blog.image?.width}
            height={blog.image?.height}
            className="rounded-lg  animate-fade object-cover group-hover:object-center shadow-sm w-20 h-14 lg:h-32 md:w-32 aspect-square object-center group-hover:scale-105 transition-all ease duration-300"
          />
        </Link>
      </div>
    </motion.article>
  );
}
