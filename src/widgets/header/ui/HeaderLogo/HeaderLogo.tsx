import React from "react";

import IconMailWord from "../../icons/IconMailWord";
import IconNaver from "../../icons/IconNaver";
import * as S from "./HeaderLogo.style";

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
