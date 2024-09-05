"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const onSubmit = async (prevState: any, formData: FormData) => {
  if (!formData.get("email") || !(formData.get("email") as string)?.trim()) {
    return { message: "no_email", focusField: "email" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password", focusField: "password" };
  }
  let shouldRedirect = false;
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const response = await fetch(
      `http://api.titanwalkers.casa/v1/member/signin`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );

    if (response.ok) {
      const responseData = await response.json();

      // 응답 본문에서 토큰 추출
      const { accessToken, refreshToken } = responseData;

      // accessToken 디코딩
      const decodedToken = jwtDecode(accessToken) as {
        nickname?: string;
        email?: string;
      };

      // 닉네임 쿠키 추가
      if (decodedToken && decodedToken.nickname) {
        cookies().set("nickname", decodedToken.nickname, {
          httpOnly: false, // 클라이언트에서 접근 가능하도록 설정
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 3600, // 1시간 (accessToken과 동일한 유효기간 설정)
        });

        // 이메일 쿠키 추가
        if (decodedToken.email) {
          cookies().set("email", decodedToken.email, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600,
          });
        }
      }

      // accessToken 쿠키 추가
      if (accessToken) {
        cookies().set("accessToken", accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 3600, // 1시간 (필요에 따라 조정)
        });
      }

      // refreshToken 쿠키 추가
      if (refreshToken) {
        cookies().set("refreshToken", refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60, // 7일 (필요에 따라 조정)
        });
      }

      shouldRedirect = true;
    } else if (response.status === 403) {
      return { message: "user_exists" };
    }
  } catch (err) {
    console.error(err);
  }

  if (shouldRedirect) {
    redirect("/");
  }
};
