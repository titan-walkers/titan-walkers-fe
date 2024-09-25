import React from "react";

import dynamic from "next/dynamic";

import * as S from "./Header.style";
import HeaderLogo from "./ui/HeaderLogo/HeaderLogo";

const HeaderProfile = dynamic(() => import("./ui/HeaderProfile/HeaderProfile"));

const Header = () => {
  return (
    <S.HeaderWrapper>
      <HeaderLogo />
      <HeaderProfile />
    </S.HeaderWrapper>
  );
};

export default Header;
