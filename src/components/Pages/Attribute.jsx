/* eslint-disable react/prop-types */
import React from 'react';
import './pages.css';

const Attribute = ({ product }) => (
  <div className="attributes-section">
    <div className="business-category-section">
      <div className="categories-section">
        <div className="categories-header">Categories</div>
        <div className="categories-data-section">
          {
                Object.keys(product).length > 0 ? (
                  product.categories.map(category => (
                    <div
                      key={category.id}
                      className="category-display-section"
                    >
                      { category.name}
                    </div>
                  ))
                ) : (
                  <div className="loading-content">
                    Loading Content !!!
                  </div>
                )

              }
        </div>
      </div>
      <div className="business-models-section">
        <div className="business-modal-header">Business Modal</div>
        <div className="business-data-section">
          {
                Object.keys(product).length > 0 ? (
                  product.businessModels.map(model => (
                    <div
                      key={model.id}
                      className="category-display-section"
                    >
                      { model.name}
                    </div>
                  ))
                ) : (
                  <div className="loading-content">
                    Loading Content !!!
                  </div>
                )
              }
        </div>
      </div>
    </div>
    <div className="trl-section">
      {
              Object.keys(product).length > 0 ? (
                <div>
                  <div className="trl-data-section">
                    {product.trl.name}
                  </div>
                </div>
              ) : (
                <div className="loading-content">
                  Loading Content !!!
                </div>
              )
          }
    </div>
  </div>
);

export default Attribute;
