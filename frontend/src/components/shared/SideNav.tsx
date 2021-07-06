import React, { FC, useState } from "react";
import styled, { StyledComponent } from "styled-components";
import {
  FaHome,
  FaBullhorn,
  FaRegBuilding,
  FaRegNewspaper,
  FaChartArea,
} from "react-icons/fa";
import { BsFillGearFill } from "react-icons/all";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const MobileSideNavToggler: StyledComponent<any, any> = styled.div`
  display: none;
  position: absolute;
  width: 30px;
  height: 30px;
  top: 95px;
  z-index: 20;
  cursor: pointer;
  & svg {
    width: 100%;
    height: 100%;
  }
  &.right {
    right: 20px;
    color: #f3f3f3;
  }
  &.left {
    left: 20px;
  }
  @media (max-width: 750px) {
    display: block;
  }
`;

const SideNavContainer: StyledComponent<any, any> = styled.div`
  max-width: 500px;
  width: 20%;
  display: block;
  & ul.navitem-list {
    list-style: none;
    margin: 0;
    padding: 0;
    & li {
      padding-bottom: 30px;
      cursor: pointer;
      & svg {
        margin-right: 12px;
      }
    }
    @media (max-width: 750px) {
      width: fit-content;
      height: 100%;
      padding: 40px 60px 20px 40px;
      background: #f3f3f3;
    }
  }
  @media (max-width: 750px) {
    display: none;
    position: absolute;
    padding: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    &.active {
      display: block;
    }
  }
`;

const SideNav: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <MobileSideNavToggler
        className={active ? "right" : "left"}
        onClick={() => setActive((prevActive: boolean) => !prevActive)}>
        {active ? <IoMdClose /> : <HiMenu />}
      </MobileSideNavToggler>
      <SideNavContainer className={active ? "active" : ""}>
        <ul className="navitem-list">
          <li key="home">
            <FaHome /> Home
          </li>
          <li key="my-account">
            <FaBullhorn /> My Account
          </li>
          <li key="my-company">
            <FaRegBuilding /> My Company
          </li>
          <li key="my-settings">
            <BsFillGearFill /> My Settings
          </li>
          <li key="news">
            <FaRegNewspaper /> News
          </li>
          <li key="analytics">
            <FaChartArea /> Analytics
          </li>
        </ul>
      </SideNavContainer>
    </>
  );
};

export default SideNav;
