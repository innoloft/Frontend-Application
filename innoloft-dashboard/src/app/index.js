import styled from "styled-components";
import Header from "../shared/Header/header.component";
import Sidebar from "../shared/Sidebar/sidebar.component";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ProductPage from "../pages/Product/product.page";
import IndexPage from "../pages/Index/index.page";

const HeaderStyle = styled.header`
  height: 55px;
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  margin-top: 55px;
  width: calc(100% - 225px);
  min-height: calc(100% - 55px);
  margin-left: 225px;

  @media (max-width: 700px) {
    margin-left: 0;
    width: 100%;
  }
`;

const SidebarStyle = styled.div`
  width: 225px;
  margin-top: 55px;
  left: 0;
  top: 0;
  height: calc(100vh - 55px);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  position: fixed;

  @media (max-width: 700px) {
    display: none;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeaderStyle>
        <Header />
      </HeaderStyle>
      <SidebarStyle>
        <Sidebar />
      </SidebarStyle>
      <Switch>
        <Content>
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/" component={IndexPage} />
        </Content>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
