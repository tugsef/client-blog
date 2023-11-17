"use client"
import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { contactSendSchema } from "@/components/utils/custom/valitaions";
import { ContactValues } from "@/api/auth/values/contactValues";


export default function ContactForm() {
  
  async function handleSubmit(values: ContactValues, bag: any): Promise<void> {
    console.log(values);
    
  }

  return (
    <div>
      <Formik
        initialValues={{
          yourName: "",
          email: "",
          yourPhone: "",
          about: "",
        }}
        validationSchema={contactSendSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps: FormikProps<ContactValues>) => (
          <Form
            className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
            noValidate
            autoComplete="off"
          >
            Hello! My name is{" "}
            <Field
              type="text"
              name="yourName"
              id="yourName"
              placeholder="your name"
              className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
            />
            <ErrorMessage
              name="yourName"
              component="div"
              className="mt-3 text-rose-600"
            />
            and I want to discuss a potential project. You can email me at
            <Field
              type="email"
              name="email"
              id="email"
              className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mt-3 text-rose-600"
            />
            or reach out to me on
            <Field type="text" name="yourPhone" id="yourPhone" className="" />
            <ErrorMessage
              name="yourPhone"
              component="div"
              className="mt-3 text-rose-600"
            />
            <Field
              type="textarea"
              name="about"
              id="about"
              placeholder="My project is about..."
              rows={3}
              className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
            />
            <ErrorMessage name="about" component="div" className="text-rose-600" />
            <input
              type="submit"
              disabled={formikProps.isSubmitting}
              value="send request"
              className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
