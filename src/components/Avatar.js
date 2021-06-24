import React from "react";
import styled from "styled-components";

export const Wrapper = styled.aside`
  width: max-content;
  border-radius: 50%;
  margin: 0 auto;
  background: white;
  overflow: hidden;

  img {
    height: 7.5rem;
  }
`;

export const Avatar = ({ profilePicture }) => {
  return (
    <Wrapper>
      <img src={profilePicture} alt="user profile" />
    </Wrapper>
  );
};
