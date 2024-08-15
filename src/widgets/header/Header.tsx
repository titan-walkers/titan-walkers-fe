import React from "react";

import * as S from "./Header.style";
import HeaderLogo from "./ui/HeaderLogo/HeaderLogo";
import HeaderProfile from "./ui/HeaderProfile/HeaderProfile";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <HeaderLogo />
      <HeaderProfile />
    </S.HeaderWrapper>
  );
};

export default Header;
