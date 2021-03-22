import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F8F8FC;
    html {
      font-size: 24px;
    }
    a {
      &:hover{
        color: #786AFF;
        text-decoration: underline;
      }
    }
   

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    
      input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    
      }
    
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    
      }
    @media (max-width: 1400) {
      html { font-size: 16px; }
    }
    @media (max-width: 900px) {
      html { font-size: 15px; }
    }
    @media (max-width: 400px) {
      html { font-size: 13px; }
    }
  }
  body {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    width: 100% !important;
    overflow-y:scroll;

    
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .zoom-big-fast-enter, .zoom-big-fast-appear,
  .zoom-big-enter, .zoom-big-appear {
    transform: none !important;
  }
  *, *:before, *:after {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
