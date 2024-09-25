"use client";

import React, { useState } from "react";

import InputBox from "@shared/InputBox/InputBox";
import IconPencil from "@shared/icons/IconPencil";

import * as S from "./RecipientEmailInput.style";

type Props = {
  emailArray: { name: string; email: string }[];
  setEmailArray: React.Dispatch<
    React.SetStateAction<{ name: string; email: string }[]>
  >;
};

const RecipientEmailInput = ({ emailArray, setEmailArray }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      setEmailArray([...emailArray, { name: "", email: inputValue }]);
      setInputValue("");
    }
  };

  const handleDeleteEmail = (index: number) => {
    const newEmailArray = emailArray.filter((_, i) => i !== index);
    setEmailArray(newEmailArray);
  };
  return (
    <S.Wrapper>
      {emailArray.map((email, index) => (
        <S.EmailTag key={email.email + index}>
          <span>{email.email}</span>
          <IconPencil />
          <button onClick={() => handleDeleteEmail(index)}>x</button>
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
