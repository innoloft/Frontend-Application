/* eslint-disable no-nested-ternary */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useRouteMatch } from 'react-router';
import { useParams, useRouteMatch } from 'react-router';
import { NavLink, Route, Switch } from 'react-router-dom';
import { fetchProduct } from '../../actions/product';
import './product.css';
import Description from '../Pages/Description';
import Attribute from '../Pages/Attribute';
import User from '../User/User';
import Map from '../Map/Map';
import Spinner from '../Spinner/Spinner';

const Product = () => {
  const { id } = useParams();
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const productData = useSelector(state => state.productReducer);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);
  return productData.loading ? (
    <div className="spinner section">
      <Spinner />
    </div>
  ) : productData.error !== '' ? (
    <div>
      {' '}
      { productData.error }
    </div>
  ) : (
    <div className="product-details-section">
      <div className="product-details-left-section">
        <div className="product-image-section">
          <img src={productData.product.picture} alt="Product" />
        </div>
        <div className="product-main-info-section">
          <div className="product-title">
            <span>Title:</span>
            {' '}
            { productData.product.name}
          </div>
          <div className="product-type">
            <span>Type:</span>
            {
            Object.keys(productData.product).includes('type')
              ? productData.product.type.name
              : <span>Loading !!!</span>
            }
          </div>
        </div>
        <div className="product-tabs-section">
          <div className="description-attributes-Links">
            <NavLink
              activeClassName="active-tabs-navigation"
              className="tabs-navigation"
              exact
              to={{
                pathname: `${url}`,
              }}
            >
              Description
            </NavLink>
            <NavLink
              activeClassName="active-tabs-navigation"
              className="tabs-navigation"
              exact
              to={{
                pathname: `${url}/attributes`,
              }}
            >
              Attributes
            </NavLink>
          </div>
          <div className="description-attribute-data-section">
            <Switch>
              <Route exact path={`${path}`}>
                <Description description={productData.product.description} />
              </Route>
              <Route exact path={`${path}/attributes`}>
                <Attribute product={productData.product} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <div className="product-details-right-section">
        <div className="user-info-section">
          <User />
        </div>
        <div className="map-info-section">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Product;
