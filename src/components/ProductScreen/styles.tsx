import styled from "styled-components/macro";

const ProductScreenWrapper = styled.div`
  padding: 8px 16px 10px 4px;
  display: flex;
`;

const LeftContent = styled.div`
  flex: 3;
`;
const RightContent = styled.div`
  flex: 2;
  margin-left: 12px;
`;
const ProductImage = styled.div`
  background-color: grey;
  margin-bottom: 8px;
`;

const ProductMainInfo = styled.div`
  background-color: grey;
  margin-bottom: 8px;
`;

export {
  ProductScreenWrapper,
  RightContent,
  LeftContent,
  ProductImage,
  ProductMainInfo,
};
