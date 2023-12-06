"use client"
import React, { useEffect, useState } from 'react'
import errorImage from "@/public/blogs/css-position-fixed.png"
import { News } from '.';
function HomeCoverItem({data}:{ data?:News[]}) {
    const [currentImage, setCurrentImage] = useState<News>(data?.[0] as News);
    useEffect(() => {
        const interval = setInterval(() => {
          const randomImage = data?.[Math.floor(Math.random() * data.length)];
          console.log(randomImage);
    
          setCurrentImage(randomImage as News);
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className="w-full inline-block">
    <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />

      <img
        src={`${currentImage.urlToImage==="" || undefined || null ?errorImage:currentImage.urlToImage}`}
        placeholder="blur"
        alt={currentImage?.title as string}
        className="absolute w-full h-full object-center object-cover rounded-3xl -z-10"
      />

      <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light">
        <a href={currentImage?.url} className="inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
        World News {currentImage?.source?.name}
        </a>
        <a href={currentImage?.url} className="mt-6">
          <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
            <span
              className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
        dark:to-accentDark/50 bg-[length:0px_6px]
        hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {currentImage?.title}
            </span>
          </h1>
        </a>
        <p className="hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
          {currentImage?.description}
        </p>
      </div>
    </article>
  </div>
  )
}

export default HomeCoverItem