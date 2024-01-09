"use client";
import  cx  from "@/components/utils";
import Link from "next/link";
import React, { useState } from "react";
import LoginAuth from "./loginAuth";
import { useTheme } from "next-themes";
import OpenSearchModal from "../SearchBar/open-search-model";
import { motion } from "framer-motion";
import { BloglogoProps, DarkBloglogoProps } from "../Icons";
import { IoSearchCircle } from "react-icons/io5";

interface SpringProps {
  type: "spring";
  stiffness: number;
  damping: number;
}

const spring: SpringProps = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: {
  href: string;
  title: string;
  className: string;
  toggle: () => void;
}) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <Link
      href={href}
      className={`${className}  rounded relative group hover:dark:text-accentDark hover:text-accent dark:text-light text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={cx(
          "inline-block h-[1px]   absolute left-0 -bottom-0.5  group-hover:w-full  ease duration-300 w-0 bg-accent dark:bg-accentDark/70 "
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function Header() {
  const { theme, setTheme } = useTheme();

  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSwitch = async () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const toggle = () => {
    setClick(!click);
  };

  const [local] = React.useState((): string => {
    if (typeof window !== "undefined") {
      const from_localStorage = window.localStorage.getItem(
        "navbar_selected_item"
      );
      if (from_localStorage === null || from_localStorage === undefined) {
        return "home";
      }

      return `${from_localStorage}` ? from_localStorage : "home";
    }
    return "";
  });
  const [selected, setSelected] = React.useState<string>(local);
  const [selectedOption, setSelectedOption] = React.useState<string>();

  React.useEffect(() => {
    window.localStorage.setItem("navbar_selected_item", `${selected}`);

    setSelectedOption(`${selected}`);
  }, [local, selected]);

  return (
    <header
      id="header"
      className="w-full p-4  px-5 sm:px-10 flex items-center justify-between"
    >
      <div className="flex gap-2 lg:gap-10">
        <Link href="/">
          <DarkBloglogoProps className="dark:hidden block" />
          <BloglogoProps className="hidden dark:block" />
        </Link>

        <div className="flex items-center">
          <OpenSearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <button
        className="inline-block sm:hidden z-50 mr-[10px]"
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
      {click ? (
        <motion.div
          className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-32 dark:bg-dark/90 bg-light/75 rounded-lg z-50 backdrop-blur-md md:hidden
      "
          initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="flex items-center justify-center mb-4 gap-2">
            {" "}
            <div
              className={cx(
                "w-14 h-7 items-center   flex dark:bg-accent bg-accentDark  rounded-[50px] p-2 justify-start dark:justify-end cursor-pointer "
              )}
              onClick={toggleSwitch}
            >
              <motion.div
                layout
                transition={spring}
                className="w-5 h-5  rounded-[40px] bg-accent dark:bg-accentDark"
              />
            </div>
          </div>

          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              toggle={toggle}
              className="mx-4 lg:m-0 lg:my-3"
              href="/"
              title="Home"
            />
            <CustomMobileLink
              toggle={toggle}
              className="mx-4 lg:m-0 lg:my-3"
              href="/about"
              title="About"
            />
            <CustomMobileLink
              toggle={toggle}
              className="mx-4 lg:m-0 lg:my-3"
              href="/projects"
              title="Not Found"
            />
            <div onClick={() => setIsOpen(true)} className="hover:scale-125 transition-all ease duration-200 cursor-pointer dark:bg-dark mt-2 bg-white pr-2 ps-1 rounded-full">
              <IoSearchCircle className="w-8 h-8 dark:bg-transparent dark:text-white inline-block" /> Search
            </div>
          </nav>
          <nav
            className="flex items-center justify-center  mt-2
      "
          >
            <div className="mt-3">
              <LoginAuth />
            </div>
          </nav>
        </motion.div>
      ) : null}

      <nav
        className=" w-max py-3 px-8 border border-solid border-dark/50 dark:border-light/70 rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-4 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 dark:bg-dark/80"
      >
        <Link
          href="/"
          onClick={() => setSelected("home")}
          className={cx(
            "mr-2 relative group hover:text-accent dark:hover:text-accentDark/70",
            selectedOption === "home" && "text-accent dark:text-accentDark"
          )}
        >
          Home
          <span
            className={cx(
              "inline-block h-[1px] bg-light  absolute left-0 -bottom-0.5   ",
              selectedOption === "home"
                ? "lg:bg-accent dark:lg:bg-accentDark w-full"
                : " group-hover:w-full  ease duration-300 w-0 lg:bg-accent dark:lg:bg-accentDark/70"
            )}
          >
            &nbsp;
          </span>
        </Link>
        <Link
          href="/about"
          onClick={() => setSelected("about")}
          className={cx(
            "mx-2 relative group hover:text-accent dark:hover:text-accentDark/70",
            selectedOption === "about" && "text-accent dark:text-accentDark"
          )}
        >
          About
          <span
            className={cx(
              "inline-block h-[1px] bg-light  absolute left-0 -bottom-0.5   ",
              selectedOption === "about"
                ? "lg:bg-accent dark:lg:bg-accentDark w-full"
                : " group-hover:w-full  ease duration-300 w-0 lg:bg-accent dark:lg:bg-accentDark"
            )}
          >
            &nbsp;
          </span>
        </Link>
        <div
          className={cx(
            "w-14 h-7 items-center   flex dark:bg-accent bg-accentDark  rounded-[50px] p-2  justify-start dark:justify-end cursor-pointer "
          )}
          onClick={toggleSwitch}
        >
          <motion.div
            layout
            transition={spring}
            className="w-5 h-5  rounded-[40px] bg-accent dark:bg-accentDark"
          />
        </div>
        {/* <button
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
        </button> */}
      </nav>
      <div className=" hidden sm:flex items-center">
        <LoginAuth />
      </div>
    </header>
  );
}
