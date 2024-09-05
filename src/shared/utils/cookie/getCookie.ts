// 쿠키를 가져오는 함수

import { CookieKey } from "@shared/types/cookie.types";

export const getCookie = (name: CookieKey): string | null => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};
