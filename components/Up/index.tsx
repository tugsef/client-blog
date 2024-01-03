"use client"
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const Up: React.FC = () => {
  const floatingDivRef = useRef<HTMLAnchorElement   >(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!floatingDivRef.current) return;

      // Eşik değeri, sayfanın üst kısmına ulaşıldığında aktif/pasif durumu değiştirmek için kullanılır
      const threshold = 50;

      // Sayfanın scroll değeri
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Eğer scroll değeri eşik değerinden küçükse, div aktif olur; değilse pasif olur
      setIsActive(scrollY > threshold);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check on component mount
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div >
    <Link
        ref={floatingDivRef}
        href={"#header"}
        className=  {`${isActive?"fixed bottom-4 right-4 lg:bottom-8 z-50 lg:right-8":"hidden"}`} 
      >
        <IoIosArrowDropupCircle className=" w-10 h-10 lg:w-20 lg:h-20 dark:text-accent text-accentDark rounded-full shadow-2xl shadow-accentDark dark:shadow-accent" />
      </Link>
    </div>
  );
};

export default Up
