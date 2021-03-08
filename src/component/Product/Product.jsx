import React, { useEffect, useState } from "react";

import "./Product.scss";
import Map from "../Maps/Map";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducStartAsnyc } from "../../redux/productActions";
import Spinner from "../Spinner/Spinner";

function Product() {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const [des, setDes] = useState(true);
  useEffect(() => {
    dispatch(fetchProducStartAsnyc());
  }, [dispatch]);

  const showDescription = () => {
    setDes(true);
  };
  const showAttributes = () => {
    setDes(false);
  };

  const renderProduct = () => {
    if (!product.picture) {
      return <Spinner />;
    } else if (product.picture) {
      return (
        <>
          <div className="product">
            <div className="product-details">
              <img src={product.picture} alt={product.name} />
              <div>
                <p className="product-name">{product.name}</p>
                <p>{product.type.name}</p>
              </div>

              <div className="description-header">
                <p
                  onClick={showDescription}
                  className={`${des ? "bottom-blue" : null}`}
                >
                  Description
                </p>
                <p
                  onClick={showAttributes}
                  className={`${!des ? "bottom-blue" : null}`}
                >
                  Attributes
                </p>
              </div>
              {des ? (
                <p className="product-description">{product.description}</p>
              ) : (
                <>
                  <div className="attributes">
                    <div>
                      <h4>Categories</h4>
                      <ul>
                        <>
                          {product.categories.map((category) => (
                            <li key={category.id}>{category.name}</li>
                          ))}
                        </>
                      </ul>
                    </div>
                    <div>
                      <h4>Business Models</h4>

                      <ul>
                        <>
                          {product.businessModels.map((model) => (
                            <li key={model.id}>{model.name}</li>
                          ))}
                        </>
                      </ul>
                    </div>
                  </div>
                  <p>{product.trl.name}</p>
                </>
              )}
            </div>
            <div className="user-info">
              <div className="user">
                <img src={product.user.profilePicture} alt="" />
                <p>
                  {product.user.firstName} {product.user.lastName}
                </p>
                <p>{product.company.name}</p>
              </div>

              <div className="map">
                <Map />
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return renderProduct();
}

export default Product;
