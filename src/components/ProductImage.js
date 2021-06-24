import React from "react";
import styled from "styled-components";

export const Wrapper = styled.aside`
  flex: 1;
  display: grid;
  place-items: center;
  max-height: 31.25rem;
  background: white;
  margin: 0 0.5rem;
  border: 0.005rem solid lightgrey;
  border-radius: 0.25rem;

  img {
    height: 16rem;
  }
`;

export const ProductImage = ({
  image = "https://img.innoloft.de/products/product_783016a3.png",
}) => {
  return (
    <Wrapper>
      <img src={image} alt="product" />
    </Wrapper>
  );
};
