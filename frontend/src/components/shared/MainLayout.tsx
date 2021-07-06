import React, { FC } from "react";
import styled, { StyledComponent } from "styled-components";
import SideNav from "./SideNav";

const MainLayoutContainer: StyledComponent<any, any> = styled.div`
  background: #f3f3f3;
  display: flex;
  padding: 100px 0;
  width: 60%;
  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    width: 95%;
    padding: 50px 0;
  }
  @media (max-width: 750px) {
    width: 100%;
    padding: 0;
  }
  margin: 0 auto;
`;

const ContentContainer: StyledComponent<any, any> = styled.div`
  flex: 1;
  @media (max-width: 750px) {
    padding: 50px 20px;
  }
`;

const MainLayout: FC = ({ children }) => {
  return (
    <MainLayoutContainer>
      <SideNav />
      <ContentContainer>{children}</ContentContainer>
    </MainLayoutContainer>
  );
};

export default MainLayout;
