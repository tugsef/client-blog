"use client";
import BlogLogo from "@/components/Header/logo";
import { MoonIcon, SunIcon } from "@/components/Icons";
import { cx } from "@/components/utils";
import siteMetadata from "@/components/utils/siteMetadata";
import Link from "next/link";
import React, { useState } from "react";
import LoginAuth from "./loginAuth";

export default function Header() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <BlogLogo />

      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
    fixed top-4 right-1/2 translate-x-1/2  backdrop-blur-sm z-50
    transition-all ease duration-300
    "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 bg-dark text-light"
          )}
          aria-label="theme-switcher"
        >
          <MoonIcon className={"fill-dark"} />
        </button>
      </nav>

      <nav
        className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
    fixed top-4 right-1/2 translate-x-1/2  backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1"
          )}
          aria-label="theme-switcher"
        >
          <SunIcon className={"fill-dark"} />
        </button>
      </nav>
      <div className=" hidden sm:flex items-center">
        <LoginAuth />
      </div>
    </header>
  );
}
