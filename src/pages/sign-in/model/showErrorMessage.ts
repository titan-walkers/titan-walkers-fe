export const showErrorMessage = (messasge: string | null | undefined) => {
  if (messasge === "no_id") {
    return "아이디를 입력해주세요.";
  }
  if (messasge === "no_password") {
    return "비밀번호를 입력해주세요.";
  }

  return "";
};
