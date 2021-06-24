import React, {useState, useEffect} from 'react';

import ProductMain from './ProductMain';
import Info from './Info';
import axios from '../api';

const Product = () => {
  const [product, setProduct] = useState({});

  async function fetchProduct() {
    const { data } = await axios.get("/product/6781/");
    setProduct(data);
  }
  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <div className="product">
      <ProductMain product={product} />
      <Info product={product} />
    </div>
  )
}

export default Product;