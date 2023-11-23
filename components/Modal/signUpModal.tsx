"use client";

import { Dialog, Transition } from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { Fragment, useState } from "react";
import CloseModal from "./close-modal";
import BlogLogo from "../Header/logo";
import { LoginValues } from "@/api/auth/values/loginValues";
import OpenModalSignUp from "./open-modal-signup";
import { SignUpValues } from "@/api/auth/values/signUpValues";
import { signUpSchema } from "../utils/custom/valitaions";
import { cx } from "../utils";
import toast from "react-hot-toast";
const tokenExample = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2LCJyb2xlcyI6W3siaWQiOjE3LCJyb2xlIjoiVVNFUiIsInVzZXJJZCI6MTZ9XSwiZW1haWwiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzAwNzM0NzA4LCJleHAiOjE3MDA3MzU2MDh9.OV9HwwBmeUWkp5MKopUdr7tynrWX8o90bGnrimtntX4",
  refresh_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2LCJyb2xlcyI6W3siaWQiOjE3LCJyb2xlIjoiVVNFUiIsInVzZXJJZCI6MTZ9XSwiZW1haWwiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzAwNzM0NzA4LCJleHAiOjE3MDEzMzk1MDh9.3MDzsI1eMR6sUWER4TswYitvIDJtfTxJvGLh5XjqbK4",
};
export default function SignUpModal() {
  const [send, setSend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  async function handleSubmit(values: LoginValues): Promise<void> {
    console.info(values);
    toast.success(`${values.email} Successfully email!`);
    setSend(true);
  }

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenModalSignUp />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[440px]">
              <div className="flex items-center justify-between">
                <div className="h-8 w-8">
                  <BlogLogo />
                </div>

                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseModal />
                </button>
              </div>
              <div className="flex min-h-full flex-1 flex-col  px-6 py-12 lg:px-8 justify-center">
                {" "}
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                  Sign up to your account
                </h2>
                <div className="mt-5 lg:mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                      passwordConfirm: "",
                    }}
                    validationSchema={signUpSchema}
                    onSubmit={async (values, { resetForm }) => {
                      handleSubmit(values);
                      resetForm();
                    }}
                  >
                    {(formikProps: FormikProps<SignUpValues>) => (
                      <Form className="space-y-6" noValidate autoComplete="off">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 dark:text-dark  dark:text-white"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              className={cx(
                                "block w-full rounded-md border-0 p-1.5 dark:text-dark  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6",
                                formikProps.errors.email &&
                                  formikProps.touched.email
                                  ? "focus:ring-2 focus:ring-inset focus:ring-red-600"
                                  : "focus:ring-2 focus:ring-inset focus:ring-blue-600"
                              )}
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="mt-3 text-rose-600"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-90 dark:text-white"
                            >
                              Password
                            </label>
                          </div>
                          <div className="mt-2">
                            <Field
                              type="password"
                              name="password"
                              id="password"
                              className={cx(
                                "block w-full rounded-md border-0 py-1.5 dark:text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6",
                                formikProps.errors.password &&
                                  formikProps.touched.password
                                  ? "focus:ring-2 focus:ring-inset focus:ring-red-600"
                                  : "focus:ring-2 focus:ring-inset focus:ring-blue-600"
                              )}
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="mt-3 text-rose-600"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="passwordConfirm"
                              className="block text-sm font-medium leading-6 text-gray-90 dark:text-white"
                            >
                              Confirm Password
                            </label>
                          </div>
                          <div className="mt-2">
                            <Field
                              type="password"
                              name="passwordConfirm"
                              id="passwordConfirm"
                              className={cx(
                                "block w-full rounded-md border-0 py-1.5 dark:text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6",
                                formikProps.errors.passwordConfirm &&
                                  formikProps.touched.passwordConfirm
                                  ? "focus:ring-2 focus:ring-inset focus:ring-red-600"
                                  : "focus:ring-2 focus:ring-inset focus:ring-blue-600"
                              )}
                            />
                            <ErrorMessage
                              name="passwordConfirm"
                              component="div"
                              className="mt-3 text-rose-600"
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            color="primary"
                            disabled={formikProps.isSubmitting}
                            className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Sign in
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                  <p className="mt-10 text-center text-sm text-gray-400 dark:text-white">
                    Not a member?{" "}
                    <a
                      href="#"
                      className="font-semibold leading-6 text-blue-400 hover:text-blue-500"
                    >
                      Start a ... day free trial
                    </a>
                  </p>
                  {send && (
                  <div className="overflow-auto	">
                    <span className="text-red-600">
                      JWT Token Example(Demo→)
                    </span>{" "}
                    <br />
                    <span className="text-green-500">reflesh_token:</span>
                    {JSON.stringify(tokenExample.access_token)} <br />{" "}
                    <span className="text-green-500">access_token:</span>
                    {JSON.stringify(tokenExample.refresh_token)}
                  </div>
                )}
                  <div className="h-24 lg:h-32 "></div>
                </div>
            
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
