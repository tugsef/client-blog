"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorCoverSection from "./ErrorCoverSection";
import HomeCoverItem from "./HomeCoverItem"; 
export interface Source {
  id?: number | string | null;
  name?: number | string | null;
}

export interface News {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source?: Source;
  title?: string;
  url?: string;
  urlToImage?: string;
}
function HomeCoverSection() {
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["newsPapers"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=72a3f19c66df4771b3d76c6b8e5416a6&category=technology&source=google-news"
      );

      return data.articles as News[] ;
    },
  });

  if (isLoading || isError) return <ErrorCoverSection />;

  return (
  <div className="py-2  ms:py-6  ">
  <HomeCoverItem data={data} />
  </div>
  );
}

export default HomeCoverSection;
