import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
// import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as HomeIcon } from "assets/icons/web-house.svg";
import { ReactComponent as MembersIcon } from "assets/icons/members.svg";

type Props = {};

const SidebarContainer = styled.div`
  /* background: blue; */
  flex: 1;
`;

const SidebarItem = styled.div`
  display: flex;
  padding: 10px 1rem;
  align-items: center;
  &:hover {
    background-color: #a39999;
  }
`;
const SidebarItemText = styled.div`
  margin-left: 8px;
`;
const Header: React.FC<Props> = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <HomeIcon width="14px" height="14px" />
        <SidebarItemText>Home</SidebarItemText>
      </SidebarItem>
      <SidebarItem>
        <MembersIcon width="14px" height="14px" />
        <SidebarItemText>Members</SidebarItemText>
      </SidebarItem>
    </SidebarContainer>
  );
};
export default Header;
