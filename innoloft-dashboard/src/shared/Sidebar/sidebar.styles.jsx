import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    height: 50px;
    display: grid;
    place-items: center;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`;

export const RouteContainer = styled(Link)`
  width: calc(100% - 4px);
  border-left: ${(props) =>
    props.active ? "4px solid rgba(39, 46, 113, 1)" : "4px solid transparent;"};
  background-color: ${(props) =>
    props.active ? "rgba(39, 46, 113, 0.1)" : "transparent;"};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  transition: all 0.2s ease-out;
  font-size: 18px;

  &:hover {
    background-color: rgba(39, 46, 113, 0.1);
  }
`;
