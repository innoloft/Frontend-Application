import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleGetProduct, handlePutProduct } from "../redux/product/productActions";
import UserInfo from "./UserInfo";

function Product() {
  const product = useSelector((state) => state.product.productData);
  const configuration = useSelector((store) => store.configuration.configurationData);
  const dispatch = useDispatch();
  const [displayedTab, setDisplayedTab] = useState("description");

  useEffect(() => {
    dispatch(handleGetProduct());
  }, [dispatch]);

  const switchDisplayedTab = (tab) => {
    setDisplayedTab(tab);
  };

  return (
    <>
      <div className="product-page">
        <div className="product">
          <img src={product.picture} alt="product" className="product-picture" />
          {product.type && (
            <div className="product-info">
              <span className="product-title">{product.name}</span>
              <span className="product-type">{product.type.name}</span>
            </div>
          )}
        </div>

        <div className="tab-content">
          <div className="buttons">
            <button onClick={() => switchDisplayedTab("description")} className={`${displayedTab === "description" ? "selected" : ""} `}>
              Description
            </button>
            <button onClick={() => switchDisplayedTab("attributes")} className={`${displayedTab === "attributes" ? "selected" : ""} `}>
              Attributes
            </button>
          </div>
          {displayedTab === "description" ? (
            <div className="description-tab">{product.description}</div>
          ) : displayedTab === "attributes" ? (
            <div className="attributes-tab">
              <div className="categories">
                <h3>Categories</h3>
                {product.categories.map((category) => (
                  <input key={category.id} defaultValue={category.name} onChange={(e) => (category.name = e.target.value)} />
                ))}
              </div>
              <div className="business-models">
                <h3>Business models</h3>
                {product.businessModels.map((model) => (
                  <input key={model.id} defaultValue={model.name} onChange={(e) => (model.name = e.target.value)} />
                ))}
              </div>
              <div className="trl">
                <h3>TRL</h3>
                <select>
                  <option>{product.trl.name}</option>
                </select>
              </div>
              <button onClick={() => dispatch(handlePutProduct(product))} style={{ background: configuration.mainColor }}>
                Save product
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <UserInfo />
    </>
  );
}

export default Product;
