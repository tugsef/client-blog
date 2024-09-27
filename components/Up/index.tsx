"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
const Up: React.FC = () => {
  const floatingDivRef = useRef<HTMLAnchorElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!floatingDivRef.current) return;
      const threshold = 50;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsActive(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Link
        ref={floatingDivRef}
        href={"#header"}
        className={`${
          isActive
            ? "fixed bottom-4 right-4 lg:bottom-8 z-50 lg:right-8"
            : "hidden"
        }`}
      >
        <IoIosArrowDropupCircle className="w-10 h-10 lg:w-14 lg:h-14 dark:text-accent text-accentDark rounded-full shadow-2xl shadow-accentDark dark:shadow-accent" />
      </Link>
    </div>
  );
};

export default Up;
