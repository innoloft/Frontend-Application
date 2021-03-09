
import styled from 'styled-components'
import {device} from '../../breakpoints'

export const AppBar = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0px 0.1rem #ccc;
`
export const Navbar = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${device.TabletMd} {
    width: 98%;
  
  }
  @media ${device.phone} {
    width: 98%;
  
  }
`;
export const Brand = styled.div`
  display: flex;
  width: 20%;
  height: 80%;
  align-items: center;
  box-sizing: border-box;
  @media ${device.TabletMd} {
    width: 50%;
  }
  @media ${device.phone} {
    width: 50%;
  }
`;
export const BrandImage = styled.img`
  width: auto;
  height: 80%;
  color: white;
  cursor:pointer
`

;


