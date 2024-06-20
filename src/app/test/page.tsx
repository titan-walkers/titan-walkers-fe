"use client";
import React, { useState } from "react";

import useZustandStore from "@/zustand/store";

const Page = () => {
  const [d, setD] = useState(false);
  //zustand 사용방식
  const { user, setSignIn } = useZustandStore((state) => ({
    user: state.user,
    setSignIn: state.setSignIn,
  }));
  return <div>test</div>;
};

export default Page;
