"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import { onSubmit } from "@shared/utils/onSubmit";

import * as S from "./SignInContainer.style";

const SignInContainer = () => {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();

  console.log(state);
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo src="images/NaverLogo.png" alt="NAVER" />
      </S.LogoContainer>

      <S.FormBox action={formAction}>
        <div>
          <S.IdBox>
            <S.IDLabel htmlFor="id">아이디 또는 전화번호</S.IDLabel>
            {/* <S.Input id="id" name="id" type="text" placeholder="" required /> */}
          </S.IdBox>
          <S.PwBox>
            <S.PWLabel htmlFor="password">비밀번호</S.PWLabel>
            {/* <S.Input
              id="password"
              name="password"
              type="password"
              placeholder=""
              required
            /> */}
          </S.PwBox>
          <S.Button type="submit" disabled={pending}>
            로그인
          </S.Button>
        </div>

        {/* <div>{showErrorMessage(state?.message)}</div> */}
      </S.FormBox>
      <S.BottomTextRow>
        <span>비밀번호 찾기</span>
        <S.Separator />
        <span>아이디 찾기</span>
        <S.Separator />
        <span>회원가입</span>
      </S.BottomTextRow>
      <S.AdsBox>ADs</S.AdsBox>
      <S.NameRow>
        <span>강지성</span>
        <S.Separator />
        <span>김경문</span>
        <S.Separator />
        <span>김휘림</span>
        <S.Separator />
        <span>나유진</span>
      </S.NameRow>
      <S.CopyrightRow>
        <span>Copyright</span>
        <S.TeamName>ⓒ TitanWalkers</S.TeamName>
        <span>All Rights Reserved.</span>
      </S.CopyrightRow>
    </S.Container>
  );
};

export default SignInContainer;
