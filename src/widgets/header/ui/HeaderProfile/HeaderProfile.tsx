import React from "react";

import { truncateString } from "@shared/utils/truncateString/truncateString";

import IconDropdownArrow from "../HeaderLogo/icons/IconDropdownArrow";
import IconEmptyProfile from "../HeaderLogo/icons/IconEmptyProfile";
import * as S from "./HeaderProfile.style";

const MAX_NAME_LENGTH = 5;

const HeaderProfile = () => {
  // TODO: 유저 이름 받아오기
  const userName = truncateString("Sarah Ra", MAX_NAME_LENGTH);
  return (
    <S.ProfileWrapper type="button">
      <S.ProfileImageWrapper>
        <IconEmptyProfile width={24} height={24} />
      </S.ProfileImageWrapper>
      <S.ProfileName>{userName}</S.ProfileName>
      <IconDropdownArrow />
    </S.ProfileWrapper>
  );
};

export default HeaderProfile;
