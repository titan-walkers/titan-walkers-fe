"use client";

import React, { useEffect, useState } from "react";

import { COOKIE_KEYS } from "@shared/constants/cookieKeys.constants";
import { useModal } from "@shared/hooks/useModal/useModal";
import { getCookie } from "@shared/utils/cookie/getCookie";
import { truncateString } from "@shared/utils/truncateString/truncateString";

import IconDropdownArrow from "../../icons/IconDropdownArrow";
import IconEmptyProfile from "../../icons/IconEmptyProfile";
import HeaderProfileDetail from "../HeaderProfileDetail/HeaderProfileDetail";
import * as S from "./HeaderProfile.style";

const MAX_NAME_LENGTH = 5;

const HeaderProfile = () => {
  const { modalState, toggleModal, openModal } = useModal();
  const nickName = getCookie(COOKIE_KEYS.nickName) || "";
  const [userName, setUserName] = useState(nickName);

  useEffect(() => {
    setUserName(truncateString(nickName, MAX_NAME_LENGTH));
  }, [nickName]);

  const openUserProfile = () => {
    if (modalState) return;
    openModal();
  };
  return (
    <>
      <S.ProfileWrapper type="button" onMouseDown={openUserProfile}>
        <S.ProfileImageWrapper>
          <IconEmptyProfile width={24} height={24} />
        </S.ProfileImageWrapper>
        {/* <S.ProfileName>{userName}</S.ProfileName> */}
        <IconDropdownArrow />
      </S.ProfileWrapper>
      <HeaderProfileDetail modalState={modalState} toggleModal={toggleModal} />
    </>
  );
};

export default HeaderProfile;
