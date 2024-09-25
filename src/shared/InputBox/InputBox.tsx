"use client";

import React from "react";

import * as S from "./InputBox.style";
type Props = {
  defaultvalue?: number | string;
  inputType?: string;
  inputStyle?: string;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 *
 * @param defaultvalue default input text값
 * @param icon input box 안에 넣을 icon
 * @param accept  input에 첨부가 허용되는 확장자
 * @param placeholder inputbox placeholder
 * @param inputType inputbox의 inputType
 */
const InputBox = ({ inputType, inputStyle, value, ...rest }: Props) => {
  return (
    <>
      <S.InputBox
        $inputStyle={inputStyle}
        value={value}
        type={inputType || "text"}
        {...rest}
      />
    </>
  );
};

export default React.memo(InputBox);
