import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: white;
    width: 100vw;
    font-family: Rubik;
    font-weight: normal;
    font-style: normal;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10%;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: blue;
  }
`;
