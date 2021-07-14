import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { ReactComponent as Logo } from "assets/images/innoloft-no-white-space.svg";

type Props = {};

const HeaderContainer = styled.div`
  background-color: #272e71;
  padding: 17px 2rem;
  display: flex;
`;

const HeaderItem = styled(NavLink)`
  color: white;
  margin-left: 16px;
  font-size: 16px;
  text-decoration: none;
`;

const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Logo width={"140px"} height={"26px"} />
      </NavLink>
      <HeaderItem to="/product">Product</HeaderItem>
    </HeaderContainer>
  );
};
export default Header;
