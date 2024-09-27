"use client";
import React from "react";
import HomeCoverItem from "./HomeCoverItem";
import data from "@/public/data/news/news.json";


export interface Source {
  id?: number | string | null;
  name?: number | string | null;
}

export interface News {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source?: Source;
  title?: string;
  url?: string;
  urlToImage?: string;
}

function HomeCoverSection() {
  //   const { data, isLoading, isError } = useQuery({
  //     queryKey: ["newsPapers"],
  //     queryFn: async () => {
  //       const { data } = await axios.get(
  //         "https://newsapi.org/v2/top-headlines?country=us&apiKey=72a3f19c66df4771b3d76c6b8e5416a6&category=technology&source=google-news"
  //       );

  // console.log(data);
  //       return data.articles as News[] ;
  //     },
  //   });

  //   if (isLoading || isError) return <ErrorCoverSection />;

  return (
    <div className="py-2  ms:py-6  ">
      <HomeCoverItem data={data as News[]} />
    </div>
  );
}

export default HomeCoverSection;
