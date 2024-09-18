"use client";
import React from "react";

import Button from "@shared/button/Button";
import SearchInput from "@widgets/SearchInput/SearchInput";

import * as S from "./CreateMailContainer.style";

const CreateMailContainer = () => {
  const onSend = () => {
    console.log("send");
  };

  return (
    <S.Wrapper>
      <S.UpWrapper>
        <S.TitleLineWrapper>
          <S.Title>메일쓰기</S.Title>
          <SearchInput />
        </S.TitleLineWrapper>

        <S.SendButtonLineWrapper>
          <Button
            buttonStyle={S.SendButton}
            onClick={onSend}
            content="보내기"
          />

          <S.DropdownIcon>▼</S.DropdownIcon>
        </S.SendButtonLineWrapper>

        <S.ContentArea>
          <S.RecipientField>
            <S.FieldLabel>받는 사람</S.FieldLabel>
            <S.InputWrapper>
              <S.Input type="text" />
            </S.InputWrapper>
          </S.RecipientField>
          <S.SubjectField>
            <S.FieldLabel>제목</S.FieldLabel>
            <S.InputWrapper>
              <S.Input type="text" placeholder="제목" />
            </S.InputWrapper>
          </S.SubjectField>
          <S.AttachmentArea>
            <S.FieldLabel>파일첨부</S.FieldLabel>
            <S.AttachmentButton>내 PC</S.AttachmentButton>
            <S.AttachmentButton>MYBOX</S.AttachmentButton>
            <S.AttachmentInfo>
              일반 0KB/10MB 대용량 0KB/2.00GB(0개)
            </S.AttachmentInfo>
          </S.AttachmentArea>
          <S.MessageArea>
            <S.MessageInput placeholder="내용을 입력하세요" />
          </S.MessageArea>
        </S.ContentArea>
      </S.UpWrapper>
    </S.Wrapper>
  );
};

export default CreateMailContainer;
