import { allBlogs } from "@/.contentlayer/generated";
import TransitionEffect from "@/components/About/TransitionEffect";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import MostreadSection from "@/components/Home/MostReadSection";
import data from "@/public/data/news/news.json";
import dynamic from "next/dynamic";



export async function generateStaticParams() {
  return data;
}
const ServerComponent = dynamic(() => import('../components/Home/HomeCoverSection'))

export default function Home() {
  return (
    <>

      <main >
        <TransitionEffect />
        <ServerComponent />
        <FeaturedPosts blogs={allBlogs} />
        <hr className="border-1  bg-gray  dark:border-white  mt-12 lg:16" />
        <MostreadSection blogs={allBlogs} />
      </main>
    </>
  );
}
