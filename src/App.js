import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import { Header, Sidebar } from "./layout";
import { Home, Product } from "./pages";
import { NotFound } from "./styled";

import "./App.css";

const AppSection = styled.section`
  min-height: 100vh;
  background-color: rgb(243, 244, 246);
`;

const MainSection = styled.section`
  display: flex;
  height: calc(100vh - 64px);
  max-width: 93rem;
  margin 0 auto;

  @media (max-width: 43.75rem) {
    height: auto;
  }
`;

const AppContent = styled.section`
  flex: 1;
  margin: 0 0.25rem;
`;

const App = () => {
  return (
    <AppSection>
      <Header />
      <MainSection>
        <Sidebar />
        <AppContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route
              path="*"
              component={() => <NotFound>404, PAGE NOT FOUND</NotFound>}
            />
          </Switch>
        </AppContent>
      </MainSection>
    </AppSection>
  );
};

export default App;
