import styled from "styled-components";

export const InputBox = styled.input<{ $inputStyle?: string }>`
  border: none;
  outline: none;
  ${({ $inputStyle }) => $inputStyle}
`;
