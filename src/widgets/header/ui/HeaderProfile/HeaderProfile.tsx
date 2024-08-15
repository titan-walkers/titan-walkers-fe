"use client";

import React from "react";

import { useModal } from "@shared/hooks/useModal/useModal";
import { truncateString } from "@shared/utils/truncateString/truncateString";

import IconDropdownArrow from "../../icons/IconDropdownArrow";
import IconEmptyProfile from "../../icons/IconEmptyProfile";
import HeaderProfileDetail from "../HeaderProfileDetail/HeaderProfileDetail";
import * as S from "./HeaderProfile.style";

const MAX_NAME_LENGTH = 5;

const HeaderProfile = () => {
  const { modalState, toggleModal, openModal } = useModal();
  // TODO: API 통해 유저 이름을 포함한 정보 받아오기
  const userName = truncateString("Sarah Ra", MAX_NAME_LENGTH);

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
        <S.ProfileName>{userName}</S.ProfileName>
        <IconDropdownArrow />
      </S.ProfileWrapper>
      <HeaderProfileDetail modalState={modalState} toggleModal={toggleModal} />
    </>
  );
};

export default HeaderProfile;
