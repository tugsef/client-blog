import BlogLogo from "@/components/Header/logo";
import PointerLogo, {
  BloglogoProps,
  DarkBloglogoProps,
} from "@/components/Icons";
import Link from "next/link";
import React from "react";

function Loading() {
  return (
    <div className="h-[100vh] top-0 left-0 fixed w-full backdrop-blur-sm bg-light dark:bg-dark flex justify-center items-center z-[1300]">
      {" "}
      <div className="flex gap-6">
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-1">
            <DarkBloglogoProps className=" block" />
            <BloglogoProps className="hidden dark:block " />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Loading;
