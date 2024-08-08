"use client";

import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    async function enableMocking() {
      if (typeof window !== "undefined") {
        if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
          require("@/shared/mocks/browser");
        }
      }
    }
    enableMocking();
  }, []);

  return null;
};
