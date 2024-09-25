import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  input.test-input-test {
    background-color: red;
  }
`;

export const EmailTag = styled.div`
  background-color: ${({ theme }) => theme.color.gray2};
  border-radius: 30px;
  padding: 5px 10px;
  margin-right: 5px;
`;

export const inputStyle = `
`;
