"use client"
import { slug } from "github-slugger";
import React, { useState } from "react";
import Category from "../Category";
import { PiPlusCircleBold } from "react-icons/pi";
let increment = 4;
let starItem = 8;
const Categories = ({ categories, currentSlug }:{categories:string[],currentSlug:string}) => {
  const [currentTotal, setCurrentTotal] = useState(starItem);
  const totalItems = categories.length;

  const onNextClick = () => {
    setCurrentTotal(currentTotal + increment);
  };
  const displayedItems = categories.slice(0, currentTotal);
  return (
    <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {displayedItems.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
          className=""
        />
      ))}
    {displayedItems.length < totalItems && (   <button   onClick={onNextClick}>
      <PiPlusCircleBold className="h-8 w-8"/>

      </button>)}
    </div>
  );
};

export default Categories;