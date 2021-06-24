import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { List } from "../styled";

import logo from "../assets/svg/logo-white.svg";

const Nav = styled.nav`
  height: 3.5rem;
  background: #272e72;
`;

const Logo = styled.img`
  height: 1.68rem;
  cursor: pointer;
`;

const NavList = styled(List)`
  height: 100%;
  max-width: 92rem;
  padding: 0 1rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  .sm-nav {
    display: flex;
    list-style-type: none;

    li {
      padding: 0 1rem;
      a {
        color: white;
        text-decoration: none;
      }

      &:first-child {
        @media (max-width: 25rem) {
          display: none;
        }
      }
    }
  }
`;

export const Header = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </li>

        <ul className="sm-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </NavList>
    </Nav>
  );
};
