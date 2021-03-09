import styled from 'styled-components'
import {device} from '../../breakpoints'
export const CustomButt = styled.button`
  height: ${({ Header, product, detail }) =>
    Header ? "40px" : product ? "30px" : detail ? "40px" : "45px"};

  width: ${({ Header, product, detail }) =>
    Header ? "5%" : product ? "15%" : detail ? "3rem" : "10%"};
  font-size: 1.1rem;
  font-weight: 300;
  height: 2.5rem;
  padding: 10px;
  background-color: #272e71;
  color: white;
  border: none;
  border-radius: 5px;
  @media ${device.TabletMd} {
    width: 30%;
    font-size: 16px;
    font-weight: 300;
  }
  @media ${device.phone} {
    width: 30%;
    font-size: 16px;
    font-weight: 300;
  }
`;
