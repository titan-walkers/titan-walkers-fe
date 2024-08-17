import React from "react";

import { useOutsideClick } from "@shared/hooks/useModal/useOutsideClick";
import { truncateString } from "@shared/utils/truncateString/truncateString";
import IconEmptyProfile from "@widgets/header/icons/IconEmptyProfile";

import * as S from "./HeaderProfileDetail.style";

type Props = {
  modalState: boolean;
  toggleModal: (modalState: boolean) => void;
};

const MAX_NAME_LENGTH = 5;
const SIGN_OUT_TEXT = "로그아웃";

const HeaderProfileDetail = ({ modalState, toggleModal }: Props) => {
  const ref = useOutsideClick(() => {
    toggleModal(modalState);
  });

  // TODO: API 통해 유저 이름을 포함한 정보 받아오기
  const userName = truncateString("Sarah Ra", MAX_NAME_LENGTH);
  const userEmail = "sarah@gmail.com";
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
            <S.SignOutButton>{SIGN_OUT_TEXT}</S.SignOutButton>
          </S.ProfileInfoRow>
          <S.Email href="/">{userEmail}</S.Email>
        </S.ProfileInfoWrapper>
      </S.ProfileContents>
    </S.ProfileDetailWrapper>
  );
};

export default HeaderProfileDetail;
