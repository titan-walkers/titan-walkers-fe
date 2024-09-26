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
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const inputStyle = `
all: unset;
display: inline-block;
min-width: fit-content;
all: unset;
background-color: orange;
`;
export const IconXMarkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
