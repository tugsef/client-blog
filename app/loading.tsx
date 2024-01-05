import BlogLogo from "@/components/Header/logo";
import PointerLogo from "@/components/Icons";
import Link from "next/link";
import React from "react";

function Loading() {
  return (
    <div className="h-[100vh] top-0 left-0 fixed w-full backdrop-blur-sm bg-dark flex justify-center items-center z-[1300]">
      {" "}
      <div className="flex gap-6">
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-1">
            <PointerLogo className="w-16 lg:w-24  dark:text-white" />
            <span className="font-bold text-xs lg:text-lg  tracking-tight">
              FocusSpark
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Loading;
