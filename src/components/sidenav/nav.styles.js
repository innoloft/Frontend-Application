import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {device} from '../../breakpoints'

const activeClassName = "nav-item-active";
export const Container = styled.div`
  height: 90vh;
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  @media ${device.TabletMd} {
    display: flex;
    flex-direction: column;
    height: 3rem;
    width: 100%;
  }
  @media ${device.phone} {
    display: flex;
    flex-direction: column;
    height: 3rem;
    width: 100%;
    // border: 1px solid red;
  }
`;
export const SideNav = styled.div`
  width: 20%;
  height: 100%;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  @media ${device.TabletMd} {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color:white
  }
  @media ${device.phone} {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background-color:white
   
  }
`;
export const SideNavbar = styled.div`
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 20rem;
  @media ${device.TabletMd} {
    width: 100%;
    flex-direction: row;
  }
  @media ${device.phone} {
    width: 100%;
    flex-direction: row;
  }
`;
export const Navbaritem = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: #272e71;
  }
  width: 100%;
  padding: 15px 10px;
  height: auto;
  text-decoration: none;
  list-style: none;
  font-size: 1.1rem;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 79%;
  height: 100%;
  align-items: center;
  font-display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${device.TabletMd} {
   
    width: 100%;
   
  }
  @media ${device.phone} {
   
    width: 100%;
  }
`;
