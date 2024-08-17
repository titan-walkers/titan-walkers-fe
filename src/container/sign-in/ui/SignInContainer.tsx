"use client";

import React, { LegacyRef, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { useOutsideClick } from "@shared/hooks/useModal/useOutsideClick";

import { onSubmit } from "../lib/onSubmit/onSubmit";
import { showErrorMessage } from "../lib/showErrorMessage/showErrorMessage";
import * as S from "./SignInContainer.style";

const SignInContainer = () => {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();

  const [isActiveIDInput, setIsActiveIDInput] = useState(false);
  const [isActivePWInput, setIsActivePWInput] = useState(false);

  const idLabelRef = useOutsideClick(() => {
    if (idInputRef.current?.value === "") {
      setIsActiveIDInput(false);
    }
  });
  const pwLabelRef = useOutsideClick(() => {
    if (pwInputRef.current?.value === "") {
      setIsActivePWInput(false);
    }
  });
  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo src="images/NaverLogo.png" alt="NAVER" />
      </S.LogoContainer>

      <S.FormBox action={formAction}>
        <div>
          <S.IdBox>
            <S.LabelAndInputBox>
              <S.IDLabel
                htmlFor="id"
                $isActive={isActiveIDInput}
                onClick={() => setIsActiveIDInput(true)}
                ref={idLabelRef as LegacyRef<HTMLLabelElement>}
              >
                아이디 또는 전화번호
              </S.IDLabel>
              {isActiveIDInput && (
                <S.Input
                  id="id"
                  name="id"
                  type="text"
                  placeholder=""
                  required
                  maxLength={25}
                  onInvalid={(e) => {
                    e.preventDefault();
                  }}
                  ref={idInputRef}
                />
              )}
            </S.LabelAndInputBox>
            {isActiveIDInput && (
              <S.DeleteButton>
                <S.DeleteButtonSpan
                  onClick={() => {
                    if (idInputRef.current) {
                      idInputRef.current.value = "";
                      setIsActiveIDInput(false);
                    }
                  }}
                >
                  x
                </S.DeleteButtonSpan>
              </S.DeleteButton>
            )}
          </S.IdBox>
          <S.PwBox>
            <S.LabelAndInputBox>
              <S.PWLabel
                htmlFor="password"
                $isActive={isActivePWInput}
                onClick={() => setIsActivePWInput(true)}
                ref={pwLabelRef as LegacyRef<HTMLLabelElement>}
              >
                비밀번호
              </S.PWLabel>
              {isActivePWInput && (
                <S.Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=""
                  required
                  maxLength={20}
                  onInvalid={(e) => {
                    e.preventDefault();
                  }}
                  ref={pwInputRef}
                />
              )}
            </S.LabelAndInputBox>
            {isActivePWInput && (
              <S.DeleteButton
                onClick={() => {
                  if (pwInputRef.current) {
                    pwInputRef.current.value = "";
                    setIsActivePWInput(false);
                  }
                }}
              >
                <S.DeleteButtonSpan>x</S.DeleteButtonSpan>
              </S.DeleteButton>
            )}
          </S.PwBox>
          <div>{showErrorMessage(state?.message)}</div>

          <S.Button type="submit" disabled={pending}>
            로그인
          </S.Button>
        </div>
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
