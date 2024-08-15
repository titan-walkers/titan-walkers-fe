import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-top: 30px;
  height: 120px;
  margin-bottom: 50px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

export const FormBox = styled.form`
  padding: 24px;
  width: 458px;
  height: 300px;
  border: 1px solid #000;
  border-radius: 10px;
`;

export const IdBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 5px 5px 0 0;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: #fff;
`;

export const PwBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 5px;
`;
export const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  background-color: #03c75a;
  color: #fff;
  border: none;
  border-radius: 5px;
`;
