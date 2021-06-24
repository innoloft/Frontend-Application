import React from 'react';
import { useSelector } from 'react-redux';
import { getAppIdData } from '../../redux/appIdSlice';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';

const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ color }) => (color ? color : '#272e7F1')};
  height: 100%;
`;

const StyledLink = styled(Link)`
  margin: 1rem;
`;

const StyledImg = styled.img`
  height: 3rem;
  margin-left: 10rem;
  background-color: white;
  padding: 0.2rem;
`;

const Navbar = () => {
  const appData = useSelector(getAppIdData);
  return (
    <StyledWrapper color={appData.mainColor}>
      {console.log(appData)}
      <StyledLink to='/'>
        {appData ? (
          <StyledImg src={appData.logo} alt='logo' />
        ) : (
          <StyledImg src={Logo} alt='logo' />
        )}
      </StyledLink>
    </StyledWrapper>
  );
};

export default Navbar;
