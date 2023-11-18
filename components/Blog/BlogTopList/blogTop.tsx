import React from "react";
import profileImg from "@/public/images/me.jpg";
import Image, { StaticImageData } from "next/image";
import { Blog } from "@/.contentlayer/generated";
import { format } from "date-fns";
import Link from "next/link";
import siteImg from "@/public/logo.png"
export default function BlogTop({
  blog,
  sequence,
}: {
  blog: Blog;
  sequence: number;
}) {
  let selectImg:StaticImageData = profileImg;

  if(blog?.author.toLowerCase()==="focusspark"){
    selectImg=siteImg;
  }
  return (
    <article className="flex  items-start space-x-3">
      <Image
        src={selectImg}
        alt=""
        width="30"
        height="30"
        className="lg:flex-none rounded-full bg-slate-100"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20">
          {blog.author}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">
              0{sequence}
            </dd>
          </div>
          <Link href={blog.url}>
            <div>
              <dt className="sr-only">title</dt>
              <dd className="font-extrabold text-sm lg:text-lg">
                {" "}
                {blog.title}
              </dd>
            </div>
          </Link>

          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">RuneTime</dt>
            <dd className="text-slate-400  text-xs lg:text-base">
              {format(new Date(blog.publishedAt), "MMM dd")}·
              {blog.readingTime.text}·
              <Link
                href={`/categories/${blog.tags?.[0].replace(" ","-")}`}
                className="px-1.5   ring-1 ring-slate-200 rounded-full"
              >
                {blog.tags?.[0]}
              </Link>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
