"use server";

import cookie from "cookie";
import { cookies } from "next/headers";

export const onSubmit = async (prevState: any, formData: FormData) => {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }

  let shouldRedirect = false;
  try {
    const response = await fetch(`http://localhost:9090/api/users`, {
      method: "post",
      body: formData,
      credentials: "include",
    });
    let setCookie = response.headers.get("Set-Cookie");
    if (setCookie) {
      const parsed = cookie.parse(setCookie);
      // 브라우저에 쿠키를 심어주는 코드
      cookies().set("titan", parsed["titan"], parsed);
    }
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    return response.json();
  } catch (err) {
    console.error(err);
    return { message: null };
  }

  // if (shouldRedirect) {
  //   redirect("/home"); // try/catch문 안에서 X
  // }
};
