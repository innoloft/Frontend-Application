import styled from 'styled-components'
import {device} from '../../breakpoints'

export const Product = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: whitesmoke;
  @media ${device.TabletMd} {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  @media ${device.phone} {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`; 
export const ProductDetails = styled.div`
  width: 70%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.TabletMd} {
    width: 100%;
  }
  @media ${device.phone} {
    width: 100%;
  }
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 35%;
  border-radius: 5px;
  background-color: rgb(249, 249, 249);
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  align-items: center;
  @media ${device.TabletMd} {
    width: 100%;
  }
  @media ${device.phone} {
    width: 100%;
  }
`;
export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
`;
export const ProfileSection = styled.div`
  width: 29%;
  height: inherit;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 1rem;
  @media ${device.TabletMd} {
    width: 100%;
  }
  @media ${device.phone} {
    width: 100%;
  }
`;
export const Profile = styled.div`
  background-color: rgb(249, 249, 249);
  border-radius: 5px;
  width: 70%;
  height: 60%;
  border-radius: 50px;
 
`;
export const Avarta = styled.img`
  width:100%;
  height: 100%;
  border-radius:30px;
 
`