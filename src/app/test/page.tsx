"use client";

import useZustandStore from "@/zustand/store";
import React from "react";

const Page = () => {
  //zustand 사용방식
  const { user, setSignIn } = useZustandStore((state) => ({
    user: state.user,
    setSignIn: state.setSignIn,
  }));
  return <div>test</div>;
};

export default Page;
