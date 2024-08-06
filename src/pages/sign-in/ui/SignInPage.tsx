"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import { onSubmit } from "@/shared/utils/onSubmit";
import styled from "styled-components";

const SignInPage = () => {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();

  console.log(state);
  return (
    <Container>
      <LogoContainer>
        <Logo src="images/NaverLogo.png" alt="NAVER" />
      </LogoContainer>

      <FormBox action={formAction}>
        <div>
          <IdBox>
            <label htmlFor="id">아이디 또는 전화번호</label>
            <Input id="id" name="id" type="text" placeholder="" required />
          </IdBox>
          <PwBox>
            <label htmlFor="password">비밀번호</label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder=""
              required
            />
          </PwBox>
          <Button type="submit" disabled={pending}>
            로그인
          </Button>
        </div>

        {/* <div>{showErrorMessage(state?.message)}</div> */}
      </FormBox>
    </Container>
  );
};

export default SignInPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-top: 30px;
  height: 120px;
  margin-bottom: 50px;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

const FormBox = styled.form`
  padding: 24px;
  width: 458px;
  height: 300px;
  border: 1px solid #000;
  border-radius: 10px;
`;

const IdBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 5px 5px 0 0;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: #fff;
`;

const PwBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 5px;
`;
const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  background-color: #03c75a;
  color: #fff;
  border: none;
  border-radius: 5px;
`;
