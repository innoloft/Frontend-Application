import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/product/product.actions";

import styles from "../assets/styles/product.module.scss";
import Tabs from "../components/Tabs";
import Map from "../components/map/Map";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.product_lhs}>
          <div className={styles.product_lhs_productImage}>
            <img src={product?.picture} alt={product?.name} />
          </div>
          <div className={styles.product_lhs_productMainInfo}>
            <p>
              Product title: <span>{product?.name}</span>
            </p>
            <p>
              Product type: <span>{product?.type.name}</span>
            </p>
          </div>
          <div className={styles.product_lhs_productTab}>
            <Tabs product={product} />
          </div>
        </div>
        <div className={styles.product_rhs}>
          <div className={styles.product_rhs_user}>
            <img src={product?.user.profilePicture} alt="user profile" />
            <p>
              {product?.user.firstName} {product?.user.lastName}
            </p>
            <span>{product?.company.name}</span>
          </div>
          <div className={styles.product_rhs_map}>
            <Map product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
