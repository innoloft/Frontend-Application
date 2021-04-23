import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS, GET_TRL } from "../../store/actions/Product.actions";
import GoogleMap from "../GoogleMap/GoogleMap";
import "./Product.scss";

function Product(props) {
  let product = useSelector((state) => state.product).product;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_POSTS });
    dispatch({ type: GET_TRL });
  }, []);
  const [activeTab, setTab] = useState("desc");
  if (product === undefined) {
    return <div>Loading Please wait...</div>;
  }

  if (Object.keys(product).length === 0) {
    return <div>No Product found</div>;
  }

  const categories = product.categories.map((cat) => {
    return <li>{cat.name}</li>;
  });

  const bussinessModels = product.businessModels.map((bus) => {
    return <li>{bus.name}</li>;
  });

  return (
    <div className="product">
      <div className="product__details">
        <img src={product.picture} alt="product" />
        <p>
          <span className="bold">Title :</span> {product.name}
        </p>
        <p>
          <span className="bold">Type :</span> {product.type.name}
        </p>

        <div className="product__tabs">
          <span
            className={activeTab === "desc" ? "active" : ""}
            onClick={() => setTab("desc")}
          >
            Description Tab
          </span>
          <span
            className={activeTab === "attr" ? "active" : ""}
            onClick={() => setTab("attr")}
          >
            Attributes Tab
          </span>

          <div className="product__tabs--result">
            {activeTab === "desc" && (
              <div className="description__tab">{product.description}</div>
            )}
            {activeTab === "attr" && (
              <div className="attributes__tab">
                <h3>Categories</h3>
                <ul>{categories}</ul>
                <h3>Bussiness Models</h3>
                <ul>{bussinessModels}</ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="user__details">
        <div className="user">
          <img src={product.user.profilePicture} alt="product" />
          <p>
            <span className="bold"> UserName : </span>
            {product.user.firstName + "" + product.user.lastName}
          </p>
          <p>
            <span className="bold"> Company Name :</span>
            {product.company.name}
          </p>
        </div>
        <div className="company-map">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default Product;
