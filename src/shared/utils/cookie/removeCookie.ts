import { CookieKey } from "@shared/types/cookie.types";

export const removeAllCookie = () => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=; Path=/; Max-Age=0";
  }
};

export const removeCookie = (key: CookieKey) => {
  document.cookie = key + "=; Path=/; Max-Age=0";
};
