import * as yup from "yup";

export const schemaLogin = yup
  .object()
  .shape({
    email: yup.string().required("Vui lòng nhập thông tin vào ô trống.").email(),
    password: yup.string().required("Vui lòng nhập thông tin vào ô trống."),
  })
  .required();

export const schemaForgotPassword = yup
  .object()
  .shape({
    email: yup.string().required("Vui lòng nhập thông tin vào ô trống.").email(),
  })
  .required();
