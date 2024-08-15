import { createGlobalStyle } from "styled-components";

import { reset } from "./reset.style";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body { 
    width: 100%;
    height: 100%;
    background-color: #fff;
    font-family: "Malgun Gothic", "맑은 고딕", -apple-system, BlinkMacSystemFont, system-ui, "Apple SD Gothic Neo", "Helvetica Neue", Helvetica, Arial, Dotum, "돋움", sans-serif;
    font-size: 16px;
    color: #1e1e23;
    letter-spacing: -0.5px;
    line-height: 1.2;
  }

  ul, ol {
    list-style: none;
  } 

  button {
    all: unset;
    cursor: pointer;
  }
`;
