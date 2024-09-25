"use client";

import React from "react";

import { COOKIE_KEYS } from "@shared/constants/cookieKeys.constants";
import { useOutsideClick } from "@shared/hooks/useOutsideClick/useOutsideClick";
import { getCookie } from "@shared/utils/cookie/getCookie";
import { truncateString } from "@shared/utils/truncateString/truncateString";
import IconEmptyProfile from "@widgets/header/icons/IconEmptyProfile";
import { useRouter } from "next/navigation";

import * as S from "./HeaderProfileDetail.style";

type Props = {
  modalState: boolean;
  toggleModal: (modalState: boolean) => void;
};

const MAX_NAME_LENGTH = 5;
const SIGN_OUT_TEXT = "로그아웃";

const HeaderProfileDetail = ({ modalState, toggleModal }: Props) => {
  const router = useRouter();
  const ref = useOutsideClick(() => {
    toggleModal(modalState);
  });

  // TODO: API 통해 유저 이름을 포함한 정보 받아오기
  const nickName = getCookie(COOKIE_KEYS.nickName) || "";
  const userEmail = getCookie(COOKIE_KEYS.email) || "";
  const userName = truncateString(nickName, MAX_NAME_LENGTH);

  const signOut = () => {
    router.push("/sign-out");
  };
  return (
    <S.ProfileDetailWrapper
      ref={ref as React.RefObject<HTMLDivElement>}
      $modalState={modalState}
    >
      <S.ProfileContents>
        <S.ProfileImage>
          <IconEmptyProfile width={80} height={80} />
        </S.ProfileImage>
        <S.ProfileInfoWrapper>
          <S.ProfileInfoRow>
            <S.Name>
              <span>{userName}</span> 님
            </S.Name>
            <S.SignOutButton onClick={signOut}>{SIGN_OUT_TEXT}</S.SignOutButton>
          </S.ProfileInfoRow>
          <S.Email href="/">{userEmail}</S.Email>
        </S.ProfileInfoWrapper>
      </S.ProfileContents>
    </S.ProfileDetailWrapper>
  );
};

export default HeaderProfileDetail;
