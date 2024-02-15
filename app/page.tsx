import { allBlogs } from "@/.contentlayer/generated";
import TransitionEffect from "@/components/About/TransitionEffect";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import MostreadSection from "@/components/Home/MostReadSection";
import data from "@/public/data/news/news.json";
import Head from "next/head";

export async function generateStaticParams() {
  return data;
}
export default function Home() {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2524274909258845"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <TransitionEffect />
        <HomeCoverSection />
        <FeaturedPosts blogs={allBlogs} />
        <hr className="border-1  bg-gray  dark:border-white  mt-12 lg:16" />
        <MostreadSection blogs={allBlogs} />
      </main>
    </>
  );
}
