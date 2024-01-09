import * as yup from "yup";
export const signInSchema = yup.object({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email must be a valid email")
    .nullable(),
  password: yup.string().required().nullable(),
});
export const signUpSchema = yup.object({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email must be a valid email")
    .nullable(),
  password: yup.string().required("Password is a required field").min(8,"8 characters").nullable(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwordn't confirm")
    .required("Confirm Password is a required field"),
});

export const emailSendSchema = yup.object({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email must be a valid email")
    .nullable(),
});

export const contactSendSchema = yup.object({
  yourName: yup
  .string(),
  email: yup.string().email().required(),
  yourPhone: yup.string(),
  about: yup.string().required().max(200)
});