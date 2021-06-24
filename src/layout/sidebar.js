import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiBox } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

import { List } from "../styled";

const Nav = styled.nav`
  width: 18rem;
  padding-top: 10rem;
  margin: 0 .5rem 0;

  @media (max-width: 1080px) {
    position: absolute;
    left: -18rem;
  }
`;

const NavList = styled(List)`
  flex-direction: column;
`;

const ListItem = styled.li`
  display: flex;
  position: relative;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  background: ${(props) => (props.isActive ? '#ddd' : 'transparent')};

  &:hover {
    background: rgb(221, 221, 221);
  }

  a {
    flex: 1;
    padding: 0.6rem 0.75rem;
    display: flex;
    text-decoration: none;
    align-items: center;

    small {
      color: rgb(50, 59, 73);
      margin-left: 0.75rem;
      font-size: 0.92rem;
      font-family: "Open Sans";
    }
  }
`;

export const Sidebar = () => {
  const { pathname } = useLocation();
  const activePath = pathname.replace("/", "");
  return (
    <Nav>
      <NavList>
        <ListItem title="Home" isActive={activePath === ''}>
          <Link to="/">
            <RiHomeLine color="#606060" size={18} />
            <small>Home</small>
          </Link>
        </ListItem>

        <ListItem title="Product" isActive={activePath === 'product'}>
          <Link to="/product">
            <FiBox color="#606060" size={18} />
            <small>Product</small>
          </Link>
        </ListItem>
      </NavList>
    </Nav>
  );
};
