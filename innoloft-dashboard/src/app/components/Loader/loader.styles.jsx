import styled from "styled-components";

export const LoaderOverlay = styled.div`
  height: ${({ compo }) => (compo ? "100%" : "calc(100vh - 71px)")};
  width: 100%;
  display: grid;
  place-items: center;
`;

export const LoaderContainer = styled.div`
  width: ${({ compo }) => (compo ? "30px" : "50px")};
  height: ${({ compo }) => (compo ? "30px" : "50px")};
  border: 3px solid rgba(0, 128, 0, 0.2);
  border-radius: 50%;
  border-top-color: rgb(0, 128, 0);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
