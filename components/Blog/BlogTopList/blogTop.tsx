"use client";
import React, { useRef } from "react";
import profileImg from "@/public/images/me.jpg";
import Image, { StaticImageData } from "next/image";
import { Blog } from "@/.contentlayer/generated";
import { format } from "date-fns";
import Link from "next/link";
import siteImg from "../../../public/blogs/Untitled design.png";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);
interface MovingImgProps {
  title: string;
  img: any;
  link: string;
}
const MovingImg: React.FC<MovingImgProps> = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouse = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  };
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          width={160}
          height={160}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};
export default function BlogTop({
  blog,
  sequence,
}: {
  blog: Blog;
  sequence: number;
}) {
  let selectImg: StaticImageData = profileImg;

  if (blog?.author.toLowerCase() === "focusspark") {
    selectImg = siteImg;
  }
  return (
    <article className="flex  items-start space-x-3 relative">
      <Image
        src={selectImg}
        alt=""
        width="30"
        height="30"
        className="lg:flex-none rounded-full bg-slate-100"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20 opacity-60 dark:text-light">
          {blog.author}
        </h2>
       

        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium relative">
        <MovingImg
          img={blog.image?.filePath.replace("../public", "") as string}
          title={blog.title}
          link={blog.url}
        />
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">
              0{sequence}
            </dd>
          </div>
        
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">RuneTime</dt>
            <dd className="text-slate-400  text-xs lg:text-base">
              {format(new Date(blog.publishedAt), "MMM dd")}·
              {blog.readingTime.text}·
              <Link
                href={`/categories/${blog.tags?.[0].replace(" ", "-")}`}
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
