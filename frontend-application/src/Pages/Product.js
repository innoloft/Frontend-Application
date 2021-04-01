import React from "react";
import ProductInfo from "../components/ProductInfo";
import SideNav from "../components/SideNav";
import Tabs from "../components/Tabs";
import User from "../components/User";
import BackgroundImage from "../image/image.jpeg";

class Product extends React.Component {
  render() {
    return (
      <>
        <div className="product">
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
          <ProductInfo Product={this.props.data} />
        </div>
        <div className="contents">
          <Tabs />
        </div>
        <div className="user_info">
          <User />
        </div>
        <div className="map"></div>
      </>
    );
  }
}


export default Product;
