import React from "react";
import styled from "styled-components/macro";

import {
  ProductScreenWrapper,
  RightContent,
  LeftContent,
  ProductImage,
  ProductMainInfo,
} from "./styles";
import Tabs from "./TabMenu";

const UserInfo = styled.div`
  color: white;
  background-color: grey;
  text-align: center;
`;

type Props = {
  data: any;
};

const ProductScreen: React.FC<Props> = ({ data }) => {
  return (
    <ProductScreenWrapper>
      <LeftContent>
        <ProductImage>
          <img src={data.picture} alt="" />
        </ProductImage>
        <ProductMainInfo>
          <div>{data.name}</div>
          <div>{data.type.name}</div>
        </ProductMainInfo>
        <Tabs data={data} />
      </LeftContent>
      <RightContent>
        <UserInfo>
          <div>
            <img
              src={data.user.profilePicture}
              alt="profile"
              width={"50px"}
              height={"50px"}
            />
          </div>
          <div>{data.user.firstName + " " + data.user.lastName}</div>
          <div>{data.company.name}</div>
        </UserInfo>
      </RightContent>
    </ProductScreenWrapper>
  );
};
export default ProductScreen;
