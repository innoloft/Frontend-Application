import React from "react";
import styled from "styled-components";

import { useFetch } from "../hooks";

import {
  GoogleMap,
  UserInfo,
  Attributes,
  Description,
  ProductImage,
  TabContainer,
  TabPanel,
} from "../components";

const Article = styled.article`
  display: flex;
  height: 100%;
  padding: 1rem 0;

  aside {
    &.left-section {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-right: 0.125rem;

      .product-info {
        margin: 1rem 0.5rem 2rem;
        color: rgb(50, 59, 73);
        font-size: 1.4rem;
      }
    }

    &.right-section {
      width: clamp(300px, 20rem, 22rem);
      margin-left: 0.125rem;
      display: flex;
      flex-direction: column;

      @media (max-width: 43.75rem) {
        margin: 2rem 0 0;
        width: 100%;
      }
    }
  }

  @media (max-width: 43.75rem) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  margin: 1rem;
  font-size: 1.375rem;
  line-height: 1.25;
  color: rgb(68, 80, 99);
`;

export const Product = () => {
  const { isLoading, error, data } = useFetch();
  const {
    picture,
    user,
    company,
    name,
    trl,
    description,
    businessModels,
    categories,
  } = data;

  if (isLoading) return <Content>Loading...</Content>;

  if (error)
    return <Content>Error occured while fetching product details.</Content>;

  if (!(Object.keys(data).length === 0 && data.constructor === Object))
    return (
      <Article>
        <aside className="left-section">
          <ProductImage image={picture} />
          <h3 className="product-info">{name}</h3>
          <TabContainer>
            <TabPanel label="Description">
              <Description description={description} />
            </TabPanel>
            <TabPanel label="Attributes">
              <Attributes
                businessModels={businessModels}
                categories={categories}
                trl={trl}
              />
            </TabPanel>
          </TabContainer>
        </aside>

        <aside className="right-section">
          <UserInfo user={user} />
          <GoogleMap company={company} />
        </aside>
      </Article>
    );

  return null;
};
