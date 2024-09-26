import React from "react";

import * as S from "./Button.style";
type Props = {
  onClick: () => void;
  buttonStyle?: string;
  content?: string;
  icon?: React.ReactNode;
};

const Button = ({ buttonStyle, onClick, content, icon }: Props) => {
  return (
    <S.Button $buttonStyle={buttonStyle} onClick={onClick} type="button">
      {content}
      {icon && icon}
    </S.Button>
  );
};

export default Button;
