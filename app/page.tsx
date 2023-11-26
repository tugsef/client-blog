import { allBlogs } from "@/.contentlayer/generated";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import MostreadSection from "@/components/Home/MostReadSection";
import { sortBlogs } from "@/components/utils";

export default function Home() {
  const sortedBlogs = sortBlogs(allBlogs);

  return (
    <main>
      <hr className="border-1 bg-gray  dark:border-white " />
      <HomeCoverSection />
      <hr className="border-1  bg-gray  dark:border-white mb-8 lg:mb-12" />
      <FeaturedPosts blogs={allBlogs} />
      <hr className="border-1  bg-gray  dark:border-white  mt-12 lg:16" />
      <MostreadSection blogs={allBlogs} />
    </main>
  );
}
