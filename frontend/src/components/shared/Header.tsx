import React, { FC } from "react";
import styled, { StyledComponent } from "styled-components";
import energieloftLogo from "../../assets/energieloft.png";
import { AiTwotoneBell } from "react-icons/ai";
import { RiEarthFill } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";

const HeaderContainer: StyledComponent<any, any> = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 10px;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(217, 222, 93, 1) 0%,
    rgba(43, 121, 99, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  & .logoContainer img {
    width: 250px;
    @media (max-width: 900px) {
      width: 180px;
    }
    @media (max-width: 400px) {
      width: 150px;
    }
  }
  & .iconsContainer span {
    position: relative;
    padding: 0 15px;
    display: inline-flex;
    align-items: center;
    @media (max-width: 750px) {
      padding: 0 10px;
    }
    &.active:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      bottom: -4px;
      right: 10px;
      background: #daac10;
      border: 2px solid white;
      @media (max-width: 750px) {
        right: 4px;
      }
    }
    & svg {
      font-size: 22px;
      @media (max-width: 750px) {
        font-size: 18px;
      }
    }
  }
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <div className="logoContainer">
        <img src={energieloftLogo} alt="Energieloft Logo" />
      </div>
      <div className="iconsContainer">
        <span>
          <RiEarthFill /> &nbsp; EN
        </span>
        <span className="active">
          <FaRegEnvelope />
        </span>
        <span className="active">
          <AiTwotoneBell />
        </span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
