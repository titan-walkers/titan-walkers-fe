import React from "react";

import * as S from "./Button.style";
type Props = {
  buttonStyle: string;
  onClick: () => void;
  content: string;
};

const Button = ({ buttonStyle, onClick, content }: Props) => {
  return (
    <S.Button buttonStyle={buttonStyle} onClick={onClick} type="button">
      {content}
    </S.Button>
  );
};

export default Button;
