// import axios from "axios";
import React, { useEffect } from "react";
import ProductInfo from "../components/ProductInfo";
import SideNav from "../components/SideNav";
import Tabs from "../components/Tabs";
import User from "../components/User";
import BackgroundImage from "../image/image.jpeg";
import { connect } from "react-redux";
import * as actionCreators from "../action/ProductAction";

const Product = ({ productData, fetchProducts }) => {
  // useEffect(() => {
  //   axios.get("https://api-test.innoloft.com/product/6781/").then((res) => {
  //     console.log(res)
  //   });
  // })
  useEffect(() => {
    fetchProducts();
    console.log(fetchProducts);
  }, [fetchProducts]);

  return (
    <>
      <div className="product">
        <div className="side_nav">
          <SideNav />
        </div>
        <div
          className="product_img"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "15rem",
            margin: "2rem 2rem",
          }}
        ></div>
        <div className="main_info">
          <ProductInfo />
        </div>
        <div className="contents">
          <Tabs />
        </div>
        <div className="user_info">
          <User />
        </div>
        <div className="map"></div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    productData: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(actionCreators.fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
