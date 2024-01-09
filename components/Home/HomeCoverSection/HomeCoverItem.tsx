"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import errorImage from "@/public/blogs/css-position-fixed.png";

import { News } from ".";
function HomeCoverItem({ data }: { data?: News[] }) {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.title}>
              {" "}
              <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
                <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />

                <img
                  src={`${
                    item.urlToImage === "" || undefined || null
                      ? errorImage
                      : item.urlToImage
                  }`}
                  placeholder="blur"
                  alt={item?.title as string}
                  className="absolute w-full h-full object-center object-cover rounded-3xl -z-10"
                />

                <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light">
                  <a
                    href={item?.url}
                    className="inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-2 group border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base"
                  >
                    World News {item?.source?.name}
                  </a>
                  <a href={item?.url} className="mt-6">
                    <h1 className="font-bold capitalize  text-lg sm:text-xl md:text-3xl lg:text-4xl">
                      <span
                        className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
  dark:to-accentDark/50 bg-[length:0px_6px]
  hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                      >
                        {item?.title}
                      </span>
                    </h1>
                  </a>
                  <p className="hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
                    {item?.description}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}

          <div
            className="absolute right-7  sm:right-14 bottom-6 sm:bottom-4 w-6 h-6 z-10 sm:w-12 sm:h-12 flex items-center justify-center text-xs sm:font-bold text-white"
            slot="container-end"
          >
            <svg
              style={{
                position: "absolute",
                left: "0",
                top: "0px",
                zIndex: "10",
                width: "100%",
                height: "100%",
                strokeWidth: "4px",
                stroke: "var(--swiper-theme-color)",
                fill: "none",
                strokeDashoffset: "calc(125.6 * (1 - var(--progress)))",
                strokeDasharray: "125.6",
                transform: "rotate(-90deg)",
                opacity:"0.5"
              }}
              viewBox="0 0 48 48"
              ref={progressCircle}
            >
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent} className="opacity-50"></span>
          </div>
        </Swiper>
    
    </>
  );
}

export default HomeCoverItem;
