import styled, { createGlobalStyle } from 'styled-components/macro';

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
export const ReleaseBody = createGlobalStyle`
	html {
		background-color: #141414;
	}
  body {
    overflow: visible;
		color: #fff;
		background-color: #141414;
  }
	* {
    margin: 0;
	}
`;
export const Loading = styled.div``;
