import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("titan");
  const pathname = request.nextUrl.pathname;

  if (!cookie) {
    // 쿠키가 없는데 경로가 루트가 아니라면
    if (pathname !== "/" && pathname !== "/sign-in") {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  } else {
    // 쿠키가 있는데 루트로 접근하면
    if (pathname === "/" || pathname === "/sign-in") {
      return NextResponse.redirect(new URL("/inbox", request.url));
    }
  }

  // 경우에는 원래 요청 그대로 반환
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.png$|.*\\.ico$).*)"],
};
