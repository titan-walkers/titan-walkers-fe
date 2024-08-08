export const showErrorMessage = (message: string | null | undefined) => {
  if (message === "no_id") {
    return "아이디를 입력해주세요.";
  }
  if (message === "no_password") {
    return "비밀번호를 입력해주세요.";
  }

  return "";
};
