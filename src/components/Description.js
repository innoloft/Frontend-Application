import React from "react";
import styled from "styled-components";

const Wrapper = styled.aside`
  color: rgb(50, 59, 73);
`;

export const Description = ({ description }) => {
  return <Wrapper dangerouslySetInnerHTML={{ __html: description }} />;
};
