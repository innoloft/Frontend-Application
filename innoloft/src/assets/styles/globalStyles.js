import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;

  @media only screen and (max-width: 43.75rem) {
    font-size: 50%;
  
  }
  @media only screen and (max-width: 21.875rem) {
    font-size: 30%;
  }
}

body {
  padding: 0 0 10rem 0;
  margin: 0;
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
  background-color: #F6F6F6;
}
`;

export default GlobalStyle;
