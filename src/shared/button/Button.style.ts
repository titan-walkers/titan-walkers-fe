import styled from "styled-components";

export const Button = styled.button<{ buttonStyle?: string }>`
  ${({ buttonStyle }) => buttonStyle}
  display: flex;
  align-items: center;
  justify-content: center;
`;
