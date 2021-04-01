import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchTRL } from '../actions';
import Map from './Map';
import Product from './Product';
import User from './User';

const ProductPage = () => {
   const productData = useSelector((state) => state?.product);
   const trl = useSelector(state => state?.trl)
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts());
      dispatch(fetchTRL());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const product = productData.data
   return (
      <section className='col-3-of-4 scrollable-element '>
         <div className='col-2-of-3'>
            <Product product={product ? product : null} trl={trl} />
         </div>

         <div className="col-1-of-3">
            <div className="other__info">
               <User product={product ? product : null} />
               <Map />
            </div>
         </div>

      </section>
   );
}

export default ProductPage
