"use client";
import React from "react";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { EmailSend } from "@/api/other/values";
import { emailSendSchema } from "../utils/custom/valitaions";
import siteMetadata from "../utils/siteMetadata/index.js";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import toast from 'react-hot-toast';

const Footer = () => {
  async function handleSubmit(values: EmailSend): Promise<void> {
    console.info(values);
    toast.success( `${values.email} Successfully email!`)    
  }

  return (
    <footer className="bg-blue-300 dark.bg-dark   flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
      We are renewed every day | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={emailSendSchema}
        onSubmit={async (values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {(formikProps: FormikProps<EmailSend>) => (
          <Form noValidate autoComplete="off" className="text-center">
            <div className="flex relative z-0 mt-3">
              <Field
                type="text"
                name="email"
                id="email"
                placeholder=" "
                className="py-2.5 px-0 w-[300px] text-white text-base bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-G-DARK focus:outline-none focus:ring-0 focus:border-bg-dark peer"
              />
              <label
              htmlFor="email"
              className="absolute text-sm  text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                example@example.com
              </label>
          
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="mt-3 text-rose-600"
            />
      
          
            <button
              type="submit"
              color="primary"
              disabled={formikProps.isSubmitting}
              className="mt-4 text-white bg-blue-200 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5 text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </Form>
        )}
      </Formik>

      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <FaLinkedin className="hover:scale-125 transition-all ease duration-200 w-8 h-8" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <FaSquareXTwitter className="hover:scale-125 transition-all ease duration-200 w-8 h-8" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <FaGithubSquare className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200 h-8 w-8" />
        </a>
        <a
          href={siteMetadata.dribbble}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <FaDribbbleSquare className="hover:scale-125 transition-all ease duration-200 w-8 h-8" />
        </a>
      </div>

      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 FocusSpark. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a
            href="https://sefademirtas.netlify.app/"
            className="underline"
            target="_blank"
          >
            FocusSpark
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
