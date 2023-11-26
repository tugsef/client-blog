import React from "react";
import PointerLogo from "../../Icons";
import Link from "next/link";

export default function BlogLogo() {
  return (
    <div className="flex gap-6">
      <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="flex items-center gap-1">
          <PointerLogo className="w-8 lg:w-12 " />
          <span className="font-bold text-xs lg:text-lg  tracking-tight">FocusSpark</span>
        </div>
      </Link>
    </div>
  );
}
