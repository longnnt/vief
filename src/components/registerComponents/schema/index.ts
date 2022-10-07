import * as yup from "yup";

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const schemaRegister = yup
  .object()
  .shape({
    name: yup.string().required("Vui lòng nhập thông tin vào ô trống.").min(2),
    phone: yup.string().required("Vui lòng nhập thông tin vào ô trống.").min(10),
    email: yup.string().required("Vui lòng nhập thông tin vào ô trống.").email(),
    password: yup.string().required("Vui lòng nhập thông tin vào ô trống.").matches(passwordRegex),
    rePassword: yup
      .string()
      .required("Vui lòng nhập thông tin vào ô trống.")
      .oneOf([yup.ref("password"), null]),
  })
  .required();
