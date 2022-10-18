import * as yup from "yup";

export const schemaDownload = yup
  .object()
  .shape({
    email: yup.string().required("Vui lòng nhập thông tin vào ô trống.").email("Email không đúng định dạng."),
    name: yup
      .string()
      .required("Vui lòng nhập thông tin vào ô trống.")
      .min(2, "Dữ liệu không hợp lệ. Họ và tên có độ dài từ 2-100 kí tự.")
      .max(100, "Dữ liệu không hợp lệ. Họ và tên có độ dài từ 2-100 kí tự."),
  })
  .required();
