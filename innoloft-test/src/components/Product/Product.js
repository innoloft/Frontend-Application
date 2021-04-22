import React, { useEffect, useState } from 'react';
import {
  ProductImage,
  ProductMainInfo,
  UserInfo,
  Map,
  Description,
  Attributes,
} from './components';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../actions/productActions';
import './Product.scss';
import { Spinner } from '../index';

const Product = ({ hasUserSection }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(true);
  const [attributes, setAttributes] = useState(false);

  const product = useSelector((state) => state.product);
  const { loading, product: prod, error } = product;

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className='main'>
      {error ? (
        <div
          style={{
            margin: 'auto',
            color: 'red',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          {error.message}
        </div>
      ) : loading === true ? (
        <Spinner />
      ) : (
        <>
          {' '}
          <div className='Product'>
            <ProductImage product={prod} />
            <ProductMainInfo product={prod} />
            <div className='tabs'>
              <button
                className={description ? 'btn active' : 'btn'}
                onClick={() => {
                  setDescription(true);
                  setAttributes(false);
                }}
              >
                Description
              </button>
              <button
                className={attributes ? 'btn active' : 'btn'}
                onClick={() => {
                  setDescription(false);
                  setAttributes(true);
                }}
              >
                Attributes
              </button>
            </div>{' '}
            {description && <Description product={prod} />}
            {attributes && <Attributes product={prod} />}
          </div>
          {hasUserSection && (
            <div className='user'>
              <UserInfo product={prod} />
              <Map product={prod} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Product;
