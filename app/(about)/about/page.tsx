"use client";
import AnimatedText from "@/components/About/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/About/TransitionEffect";


export default function About() {


  return (
    <>
      <Head>
        <title>Awesome Portfolio Built with Nextjs </title>
        <meta
          name="description"
          content="Explore FocusShark's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <div className="inline-block  w-full  justify-center items-center py-4 lg:flex pt-8 lg:pe-32 lg:ps-20 lg:mt-14 lg:mb-2">
        <div className=" md:inline-block md:w-full">
          <Image
            src={profilePic}
            alt="FocusShark"
            className="h-full w-full  rounded-full drop-shadow-2xl	"
            sizes="90vw"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col items-center self-center lg:w-full text-center">
          <AnimatedText
            text="Turning vision into reality with code and design."
            className="text-lg  xl:text-5xl lg:text-center  sm:text-3xl"
          />
          <p className="my-4 text-sm font-medium md:text-base ">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="mt-2 flex items-center  self-center">
            <Link
              href="/sefa-demirtas.pdf"
              target={"_blank"}
              className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
              download
            >
              Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
            </Link>

            <Link
              href="mailto:sefa.demirtas91"
              className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
