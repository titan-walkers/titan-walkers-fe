"use client";

import React, { useState } from "react";

import InputBox from "@shared/InputBox/InputBox";
import Button from "@shared/button/Button";
import IconPencil from "@shared/icons/IconPencil";
import IconXMark from "@shared/icons/IconXMark";

import * as S from "./RecipientEmailInput.style";

type Props = {
  emailArray: { name: string; email: string }[];
  setEmailArray: React.Dispatch<
    React.SetStateAction<{ name: string; email: string }[]>
  >;
};

const RecipientEmailInput = ({ emailArray, setEmailArray }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [editModeIndex, setEditModeIndex] = useState<number | null>(null);
  const editInputRef = React.useRef<HTMLInputElement>(null); // 추가된 부분

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.key === "Enter") {
      setEmailArray([...emailArray, { name: "", email: inputValue }]);
      setInputValue("");
    }
  };

  const handleDeleteEmail = (index: number) => {
    const newEmailArray = emailArray.filter((_, i) => i !== index);
    setEmailArray(newEmailArray);
  };

  const handleEditEmail = (index: number) => {
    setEditModeIndex(index);
    setTimeout(() => {
      editInputRef.current?.focus();
      const range = document.createRange();
      const selection = window.getSelection();
      if (editInputRef.current) {
        range.selectNodeContents(editInputRef.current);
        range.collapse(false);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }, 0);
  };

  const onKeyUpWhenEditting = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.key === "Enter") {
      setEditModeIndex(null);
    }
  };

  const handleInputChangeWhenEditting = (
    e: React.ChangeEvent<HTMLDivElement>
  ) => {
    console.log(e);
    const newEmailArray = emailArray.map((email, i) =>
      i === editModeIndex
        ? { ...email, email: e.currentTarget.textContent ?? "" }
        : email
    );
    setEmailArray(newEmailArray);
  };

  return (
    <S.Wrapper>
      {emailArray.map((email, index) => (
        <S.EmailTag key={email.email + index}>
          {editModeIndex === index ? (
            <div
              contentEditable
              onChange={handleInputChangeWhenEditting}
              onKeyUp={onKeyUpWhenEditting}
              ref={editInputRef}
            >
              {email.email}
            </div>
          ) : (
            <>
              <span>{email.email}</span>
              <Button
                onClick={() => handleEditEmail(index)}
                icon={<IconPencil />}
              />
              <Button
                onClick={() => handleDeleteEmail(index)}
                icon={<IconXMark />}
              />
            </>
          )}
        </S.EmailTag>
      ))}
      <InputBox
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={onKeyUp}
        // inputStyle={S.inputStyle}
      />
    </S.Wrapper>
  );
};

export default RecipientEmailInput;
