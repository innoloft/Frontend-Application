import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 1rem;
  font-size: 1.375rem;
  line-height: 1.25;
  color: rgb(68, 80, 99);
`;

export const Home = () => {
  return <Heading>Welcome to the Home Page</Heading>;
};
