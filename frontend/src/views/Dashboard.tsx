import React, { FC, useState } from "react";
import styled, { StyledComponent } from "styled-components";
import MainInfoTab from "../components/MainInfoTab";
import AdditionalInfoTab from "../components/AdditionalInfoTab";

const DashboardContainer: StyledComponent<any, any> = styled.div`
  background: white;
`;

const DashboardHeader: StyledComponent<any, any> = styled.div`
  background: white;
  display: flex;
  width: 100%;
  height: 54px;
  & .tabpane {
    display: inline-flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    &:not(.active) {
      background: #d8d8d8;
      cursor: pointer;
    }
  }
  @media (max-width: 400px) {
    font-size: 14px;
    text-align: center;
  }
`;

const DashboardContent: StyledComponent<any, any> = styled.div`
  padding: 40px 20px;
`;

enum TabPane {
  MainInfo,
  AdditionInfo,
}

const Dashboard: FC<any> = () => {
  const [currentOpenTab, setCurrentOpenTab] = useState<TabPane>(
    TabPane.MainInfo
  );

  return (
    <DashboardContainer>
      <DashboardHeader>
        <div
          className={`tabpane ${
            currentOpenTab === TabPane.MainInfo && "active"
          }`}
          onClick={() => setCurrentOpenTab(TabPane.MainInfo)}>
          Main Information
        </div>
        <div
          className={`tabpane ${
            currentOpenTab === TabPane.AdditionInfo && "active"
          }`}
          onClick={() => setCurrentOpenTab(TabPane.AdditionInfo)}>
          Additional Information
        </div>
      </DashboardHeader>
      <DashboardContent>
        {currentOpenTab === TabPane.MainInfo ? (
          <MainInfoTab />
        ) : (
          <AdditionalInfoTab />
        )}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
