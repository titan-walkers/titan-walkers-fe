import React from "react";

import * as S from "./HeaderLogo.style";
import IconMailWord from "./icons/IconMailWord";
import IconNaver from "./icons/IconNaver";

const HeaderLogo = () => {
  return (
    <S.HeaderLogo>
      <S.LogoLink href="/">
        <IconNaver />
        <IconMailWord />
      </S.LogoLink>
    </S.HeaderLogo>
  );
};

export default HeaderLogo;
