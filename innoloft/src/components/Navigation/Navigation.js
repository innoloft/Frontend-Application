import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAppId } from '../../redux/appIdSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/images/home.svg';
import ProductIcon from '../../assets/images/product.svg';
import DesignIcon from '../../assets/images/design.svg';
import axios from 'axios';

const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  @media only screen and (max-width: 43.75rem) {
    align-items: center;
    justify-content: center;
    margin: 1rem 0 1rem 0;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    padding: 0.5rem;
    font-size: 2rem;

    :hover {
      background-color: #dad8d8;
    }
  }

  div {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    padding: 0.5rem;
    font-size: 2rem;

    button {
      background-color: inherit;
      font-family: 'Open Sans', sans-serif;
      font-size: 2rem;
      border: none;
      cursor: pointer;

      :focus {
        outline: none;
      }
    }
    :hover {
      background-color: #dad8d8;
    }
  }
`;

const StyledIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.2rem;
`;

const Navigation = () => {
  const dispatch = useDispatch();
  const [appId, setAppId] = useState(true);

  const handleChangeDesign = () => {
    if (appId) {
      axios
        .get(`https://api-test.innoloft.com/configuration/1/`)
        .then((res) => {
          dispatch(getAppId(res.data));
        });
    } else {
      axios
        .get(`https://api-test.innoloft.com/configuration/2/`)
        .then((res) => {
          dispatch(getAppId(res.data));
        });
    }
  };

  return (
    <StyledWrapper>
      <Link to='/'>
        <StyledIcon src={HomeIcon} alt='home' />
        Home
      </Link>
      <Link to='/product'>
        <StyledIcon src={ProductIcon} alt='product' />
        Dashboard
      </Link>
      <div>
        <StyledIcon src={DesignIcon} alt='design' />
        <button
          onClick={() => {
            setAppId(!appId);
            handleChangeDesign();
          }}
        >
          Change design
        </button>
      </div>
    </StyledWrapper>
  );
};

export default Navigation;
