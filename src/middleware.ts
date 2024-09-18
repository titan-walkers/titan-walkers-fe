import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // /sign-out 페이지에 접근했을 때 쿠키 제거 및 리다이렉트
  if (pathname === "/sign-out") {
    const response = NextResponse.redirect(new URL("/sign-in", request.url));
    // 모든 쿠키 제거
    request.cookies.getAll().forEach((cookie) => {
      response.cookies.delete(cookie.name);
    });

    return response;
  }

  const cookie = request.cookies.get("email");

  if (!cookie) {
    // 쿠키가 없는데 경로가 루트가 아니라면
    if (pathname !== "/sign-in") {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  } else {
    // 쿠키가 있는데 /sign-in으로 접근하면
    if (pathname === "/sign-in" ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // 경우에는 원래 요청 그대로 반환
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.png$|.*\\.ico$).*)"],
};
