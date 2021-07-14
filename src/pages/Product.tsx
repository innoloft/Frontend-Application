import React from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { Page, Content } from "components/Shared";
import ProductScreen from "../components/ProductScreen";
import { useProduct } from "api/calls";

type Props = {};

const Product: React.FC<Props> = () => {
  const { data, isLoading, isError, error, isSuccess, refetch } = useProduct();

  console.log(data);
  console.log(data?.data?.picture);
  console.log(isLoading);
  console.log(error);
  return (
    <div>
      <Header />
      <Page>
        <Sidebar />
        <Content>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ProductScreen data={data.data} />
          )}
        </Content>
      </Page>
    </div>
  );
};
export default Product;
