import React, { useState } from "react";
import styled from "styled-components";

const TabsWrapper = styled.article`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 0.5rem;

  hr {
    border: 0.1rem solid #272072;
    background: #272072;
    width: 100%;
    border-radius: 0.25rem;
    margin: 0.1rem 0;
  }
`;

const Content = styled.aside`
  flex: 1;
  width: 100%;
  padding-top: 1rem;
`;

const TabList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: ${(props) => props.breakPoint}) {
    button {
      flex: 1;
      width: 100%;
    }
  }
`;

const TabButton = styled.button`
  height: 2.5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 0.15rem;
  transition: background-color 0.2s ease-in;
  color: ${(props) => (props.selected ? "white" : "#272072")};
  background-color: ${(props) => (props.selected ? "#272072" : "#ddd")};

  @media (max-width: 43.75rem) {
    flex: 1;
  }
`;

const TabContent = styled.div`
  flex: 1;
  width: 100%;
  min-height: 16.5rem;
`;

export const TabPanel = ({ children }) => (
  <TabContent role="tabpanel" tabindex="0">
    {children}
  </TabContent>
);

export const TabContainer = ({ tabBreak = "268px", children }) => {
  const [{ selectedTab }, setState] = useState({ selectedTab: 0 });
  const selectTab = (tabIndex) => setState({ selectedTab: tabIndex });

  return (
    <TabsWrapper>
      <TabList breakPoint={tabBreak} role="tablist">
        {React.Children.map(children, ({ props: { label } }, index) => (
          <TabButton
            role="tab"
            selected={selectedTab === index}
            aria-selected={selectedTab === index ? "true" : "false"}
            onClick={() => selectTab(index)}
          >
            {label}
          </TabButton>
        ))}
      </TabList>
      <hr />
      <Content>
        {React.Children.map(children, (comp, index) =>
          selectedTab === index ? comp : undefined
        )}
      </Content>
    </TabsWrapper>
  );
};
