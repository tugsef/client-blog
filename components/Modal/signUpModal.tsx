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

export default function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  async function handleSubmit(values: LoginValues, bag: any): Promise<void> {}

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
                <p className="text-lg font-semibold">Sign In</p>

                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseModal />
                </button>
              </div>
              <div className="flex min-h-full flex-1 flex-col  px-6 py-12 lg:px-8 justify-center">
                {" "}
                  <div className="flex mx-auto">
                  <BlogLogo />
                  </div>
                   
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                    Sign up to your account
                  </h2>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                      passwordConfirm: "",
                    }}
                    validationSchema={signUpSchema}
                    onSubmit={handleSubmit}
                  >
                    {(formikProps: FormikProps<SignUpValues>) => (
                      <Form className="space-y-6" noValidate autoComplete="off">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              className="peer block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                              type="password  "
                              name="passwordConfirm"
                              id="passwordConfirm"
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                  <div className="h-32"></div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
