import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().required("이메일은 필수 입력입니다.").email("이메일 형식에 맞지 않습니다."),
  password: yup.string().required("비밀번호는 필수 입력입니다.").min(8, "비밀번호는 8자리 이상입니다"),
});
