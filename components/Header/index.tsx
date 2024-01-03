"use client";
import BlogLogo from "@/components/Header/logo";
import { cx } from "@/components/utils";
import Link from "next/link";
import React, { useState } from "react";
import LoginAuth from "./loginAuth";
import { useTheme } from "next-themes";
import NavbarUp from "./navbar/index";
import { WiDaySunny } from "react-icons/wi";
import { GiNightSky } from "react-icons/gi";
import OpenSearchModal from "../SearchBar/open-search-model";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header id="header" className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <div className="flex gap-2 lg:gap-10">
        <BlogLogo />

        <div className="flex items-center">
          <OpenSearchModal />
        </div>
      </div>
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
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full dark:bg-dark/80 font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
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
        <NavbarUp />
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            theme === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {theme === "light" ? <GiNightSky /> : <WiDaySunny />}
        </button>
      </nav>

      <nav
        className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-4 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 dark:bg-dark/80"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            theme === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {theme === "" ||
            theme === undefined ||
            (theme === null && <GiNightSky />)}
          {theme === "light" ? <GiNightSky /> : <WiDaySunny />}
        </button>
      </nav>
      <div className=" hidden sm:flex items-center">
        <LoginAuth />
      </div>
    </header>
  );
}
