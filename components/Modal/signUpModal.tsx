"use client";

import { Dialog, Transition } from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { Fragment, Suspense, useRef, useState } from "react";
import CloseModal from "./close-modal";
import { LoginValues } from "@/api/auth/values/loginValues";
import OpenModalSignUp from "./open-modal-signup";
import { SignUpValues } from "@/api/auth/values/signUpValues";
import { signUpSchema } from "../utils/custom/valitaions";
import cx from "../utils";
import toast from "react-hot-toast";
import Link from "next/link";
import { BloglogoProps, DarkBloglogoProps } from "../Icons";
import SignInModal from "./signInModal";
import OpenCartSignIn from "@/components/Modal/open-modal-signin";
import { Backend_URL } from "@/lib/Constants";
import axios from "axios";

export default function SignUpModal() {
  const [send, setSend] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  async function onSubmit(
    values: LoginValues,
    { resetForm }: any
  ): Promise<void> {
    setSend(false);
    register(values, resetForm);
  }

  const register = async (values: LoginValues, resetForm: any) => {
    try {
      const { data, status } = await axios.post<any>(
        `${Backend_URL}/auth/local/signup`,
        {
          email: values.email,
          password: values.password,
          roles: [],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      toast.success(`Successful:${data}`);
      setSend(true);
      resetForm();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(`error message: ${error.message}`);
        return error.message;
      } else {
        toast.error(`unexpected error:${error}`);

        return "An unexpected error occurred";
      }
    } finally {
      setSend(true);
    }
  };

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
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[400px] ">
              <div className="flex items-center justify-between">
                <div className="h-8 w-8">
                  <Link href="/">
                    <DarkBloglogoProps className="dark:hidden block" />
                    <BloglogoProps className="hidden dark:block" />
                  </Link>
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
                    onSubmit={onSubmit}
                  >
                    {(formikProps: FormikProps<SignUpValues>) => (
                      <Form className="space-y-3" noValidate autoComplete="off">
                        <div>
                          <div className="flex justify-between items-baseline">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-dark dark:text-light leading-6 inline-block"
                            >
                              Email address
                            </label>
                            <div>
                              <span className="inline-block text-xs mr-1 text-dark/70 dark:text-light/70">
                                Already have an account?
                              </span>
                              <div className="inline-block text-xs">
                                <Suspense fallback={<OpenCartSignIn />}>
                                  <SignInModal />
                                </Suspense>
                              </div>
                            </div>
                          </div>

                          <div className="mt-1">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              className={cx(
                                "block w-full rounded-md border-0 p-1.5 dark:text-dark bg-light/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6",
                                formikProps.errors.email &&
                                  formikProps.touched.email
                                  ? "focus:ring-2 focus:ring-inset focus:ring-red-600"
                                  : "focus:ring-2 focus:ring-inset focus:ring-blue-600"
                              )}
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="mt-1 -mb-2 text-rose-600 text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-90 dark:text-white "
                            >
                              Password
                            </label>
                          </div>
                          <div className="mt-1">
                            <Field
                              type="password"
                              name="password"
                              id="password"
                              className={cx(
                                "block w-full rounded-md border-0 py-1.5 dark:text-dark shadow-sm bg-light/90 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6",
                                formikProps.errors.password &&
                                  formikProps.touched.password
                                  ? "focus:ring-2 focus:ring-inset focus:ring-red-600"
                                  : "focus:ring-2 focus:ring-inset focus:ring-blue-600"
                              )}
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="mt-1 -mb-2 text-rose-600 text-sm"
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
                          <div className="mt-1">
                            <Field
                              type="password"
                              name="passwordConfirm"
                              id="passwordConfirm"
                              className={cx(
                                "block w-full rounded-md border-0 py-1.5 bg-light/90 dark:text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6",
                                formikProps.errors.passwordConfirm &&
                                  formikProps.touched.passwordConfirm
                                  ? "focus:ring-2 focus:ring-inset focus:ring-red-600"
                                  : "focus:ring-2 focus:ring-inset focus:ring-blue-600"
                              )}
                            />
                            <ErrorMessage
                              name="passwordConfirm"
                              component="div"
                              className="mt-1 -mb-2 text-rose-600 text-sm"
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
                            {send ? (
                              "Sign up"
                            ) : (
                              <div className="flex justify-center items-center gap-2">
                                <svg
                                  aria-hidden="true"
                                  className=" w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                  />
                                </svg>
                                Processing...
                              </div>
                            )}
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
