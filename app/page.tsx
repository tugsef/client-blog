import { allBlogs } from "@/.contentlayer/generated";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import MostreadSection from "@/components/Home/MostReadSection";

export default function Home() {
  return (
    <main>
      <hr className="border-2  border-black " />
      <HomeCoverSection />
      <hr className="border-2  border-black dark:bg-light mb-8 lg:mb-12" />
      <FeaturedPosts blogs={allBlogs} />
      <hr className="border-2  border-black dark:bg-light  mt-12 lg:16"  />
      <MostreadSection blogs={allBlogs} />
    </main>
  );
}
