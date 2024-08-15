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
            <label htmlFor="id">아이디 또는 전화번호</label>
            <S.Input id="id" name="id" type="text" placeholder="" required />
          </S.IdBox>
          <S.PwBox>
            <label htmlFor="password">비밀번호</label>
            <S.Input
              id="password"
              name="password"
              type="password"
              placeholder=""
              required
            />
          </S.PwBox>
          <S.Button type="submit" disabled={pending}>
            로그인
          </S.Button>
        </div>

        {/* <div>{showErrorMessage(state?.message)}</div> */}
      </S.FormBox>
    </S.Container>
  );
};

export default SignInContainer;
