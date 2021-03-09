import React from 'react'
import { Container, Navbaritem, SideNav, SideNavbar, Content } from "./nav.styles";

function index({children}) {
    return (
      <Container>
        <SideNav>
          <SideNavbar>
            <Navbaritem to="/">Home</Navbaritem>
            <Navbaritem to="/product">Products</Navbaritem>
          </SideNavbar>
        </SideNav>
        <Content>{children}</Content>
      </Container>
    );
}

export default index
