"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import { onSubmit } from "@/shared/utils/onSubmit";

const SignInPage = () => {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();

  console.log(state);
  return (
    <div>
      <div>
        <div>
          <div>계정을 생성하세요.</div>
        </div>
        <form action={formAction}>
          <div>
            <div>
              <label htmlFor="id">아이디</label>
              <input id="id" name="id" type="text" placeholder="" required />
            </div>
            <div>
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder=""
                required
              />
            </div>
          </div>
          <div>
            <button type="submit" disabled={pending}>
              가입하기
            </button>
            {/* <div>{showErrorMessage(state?.message)}</div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
