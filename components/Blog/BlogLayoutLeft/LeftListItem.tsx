import { Blog } from "@/.contentlayer/generated";
import Image, { StaticImageData } from "next/image";
import React from "react";
import profileImg from "@/public/images/me.jpg";
import Link from "next/link";
import { format } from "date-fns";
import { slug } from "github-slugger";
import siteImg from "@/public/logo.png"
export default function LeftListItem({ blog }: { blog: Blog }) {
  let selectImg:StaticImageData = profileImg;

  if(blog?.author.toLowerCase()==="focusspark"){
    selectImg=siteImg;
  }
  const slugTag = blog.tags?.[0];
  return (
    <>
      <figure className="grid grid-cols-12 justify-items-stretch py-4 lg:py-8">
        <div className=" col-span-9 lg:col-span-8 justify-self-start">
          <div className="flex gap-2">
            <Image
              src={selectImg}
              alt={blog.author}
              width="30"
              height="30"
              className="flex-none rounded-full bg-slate-100"
            />
            <h2 className="font-semibold text-slate-900 truncate pr-20">
              {blog.author}
            </h2>
          </div>
          <article className="flex items-start">
            <div className="min-w-0 relative flex-auto">
              <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                <Link href={blog.url}>
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="lg:font-extrabold font-bold text-sm sm:text-xl ">
                      {blog.title}
                    </dd>
                  </div>
                  <div className="my-1 lg:my-3">
                    <dt className="sr-only">description</dt>
                    <dd className="hidden md:inline-flex text-lg">
                      {blog.description.slice(0, 120)}...
                    </dd>
                  </div>
                </Link>

                <div className="flex-none w-full mt-2 font-normal">
                  <dt className="sr-only">Runtime</dt>
                  <dd className="text-slate-400 text-xs lg:text-base">
                    {format(new Date(blog.publishedAt), "MMM dd")}·
                    {blog.readingTime.text}·
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
        <div className="col-span-3 lg:col-span-4 justify-self-center">
          <Link href={blog.url}>
            <Image
              src={blog.image?.filePath.replace("../public", "") as string}
              placeholder="blur"
              blurDataURL={blog.image?.blurhashDataUrl}
              alt={blog.title}
              width={blog.image?.width}
              height={blog.image?.height}
              className="rounded-lg mx-3 animate-fade"
            />
          </Link>
        </div>
      </figure>
    </>
  );
}
