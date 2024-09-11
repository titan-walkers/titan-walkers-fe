"use client";

import React from "react";

import { useRouter } from "next/navigation";

import * as S from "./Sidebar.style";
const Sidebar = () => {

  const router = useRouter();

  const onClickCreateMail = () => {
    router.push("/create-mail");
  };

  return (
    <S.SidebarWrapper>
      <S.SidebarMenuSection>
        <S.SidebarButton onClick={onClickCreateMail}>메일쓰기</S.SidebarButton>
      </S.SidebarMenuSection>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
