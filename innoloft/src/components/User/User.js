import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 18rem;
    width: 18rem;
    border-radius: 100rem;
  }

  h4,
  h5 {
    margin: 1rem 0 0 0;
    font-size: 2rem;
  }

  h5 {
    font-size: 1.8rem;
  }
`;

const User = () => {
  const [user, getUser] = useState([]);
  useEffect(() => {
    axios.get('https://api-test.innoloft.com/product/6781/').then((res) => {
      getUser(res.data.user);
    });
  }, []);
  return (
    <StyledUserInfoWrapper>
      <img src={user.profilePicture} alt='user' />
      <h4>{user.firstName + ' ' + user.lastName}</h4>
      <h5>{user.position}</h5>
    </StyledUserInfoWrapper>
  );
};

export default User;
