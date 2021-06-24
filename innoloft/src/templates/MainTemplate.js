import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import Navigation from '../components/Navigation/Navigation';
import GlobalStyles from '../assets/styles/globalStyles';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem 30rem 1fr 10rem;
  grid-template-rows: 7rem auto;
  height: 100vh;

  @media only screen and (max-width: 71.25rem) {
    grid-template-columns: 2rem auto 1fr 2rem;
  }

  @media only screen and (max-width: 43.75rem) {
    grid-template-columns: 1rem 1fr 1rem;
    grid-template-rows: 7rem auto 1fr;
  }
`;

const StyledNavbarWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
`;

const StyledNavigationWrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  min-height: 100vh;
  margin-right: 1rem;

  @media only screen and (max-width: 43.75rem) {
    grid-row: 2;
    min-height: auto;
  }
`;

const StyledChildren = styled.div`
  grid-column: 3;
  grid-row: 2;

  @media only screen and (max-width: 43.75rem) {
    grid-column: 2;
    grid-row: 3;
  }
`;

const MainTemplate = ({ children }) => (
  <StyledWrapper>
    <GlobalStyles />
    <StyledNavbarWrapper>
      <Navbar />
    </StyledNavbarWrapper>
    <StyledNavigationWrapper>
      <Navigation />
    </StyledNavigationWrapper>
    <StyledChildren>{children}</StyledChildren>
  </StyledWrapper>
);

export default MainTemplate;
