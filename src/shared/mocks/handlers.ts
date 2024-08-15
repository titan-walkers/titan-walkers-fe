import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/logout", () => {
    console.log("로그아웃");
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "titan=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),

  http.post("/api/users", async ({ request }) => {
    console.log("로그인");
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });
    return HttpResponse.json(
      { message: "success" },
      {
        headers: {
          "Set-Cookie": "titan=msw-cookie;HttpOnly;Path=/",
        },
      }
    );
  }),
];
