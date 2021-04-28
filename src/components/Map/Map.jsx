/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './map.css';
import Modal from '../Modal/Modal';

const Map = () => {
  const [modal, showModal] = useState('hide-modal');
  const mapData = useSelector(state => state.productReducer);
  const modalDisplay = () => showModal('show-modal');
  const hideModal = () => showModal('hide-modal');
  return mapData.loading ? (
    <div>Loading Content</div>
  ) : mapData.error !== '' ? (
    <div>
      {' '}
      { mapData.error }
    </div>
  ) : (
    <div className="outer-map-details-section">
      <Modal
        modal={modal}
        mapData={mapData}
        hideModal={hideModal}
      />
      {
            Object.keys(mapData.product).includes('company') ? (
              <div className="company-address-section">
                <div className="company-address-header">
                  Company Address
                </div>
                <div className="company-address-data">
                  <div className="city-section align-data">
                    <div className="align-data-label">City:</div>
                    <div
                      className="align-data-info"
                    >
                      { mapData.product.company.address.city.name }
                    </div>
                  </div>
                  <div className="country-section align-data">
                    <div className="align-data-label"> Country:</div>
                    <div
                      className="align-data-info"
                    >
                      {mapData.product.company.address.country.name}
                    </div>
                  </div>
                  <div className="house-nummer align-data">
                    <div className="align-data-label">House:</div>
                    <div
                      className="align-data-info"
                    >
                      {mapData.product.company.address.house}
                    </div>
                  </div>
                  <div className="latitude align-data">
                    <div className="align-data-label">Latitude:</div>
                    <div
                      className="align-data-info"
                    >
                      {mapData.product.company.address.latitude}
                    </div>
                  </div>
                  <div className="longitude align-data">
                    <div className="align-data-label">Longitude:</div>
                    <div
                      className="align-data-info"
                    >
                      {mapData.product.company.address.longitude}
                    </div>
                  </div>
                  <div className="street align-data">
                    <div className="align-data-label">Street:</div>
                    <div
                      className="align-data-info"
                    >
                      {mapData.product.company.address.street}
                    </div>
                  </div>
                  <div className="zip-code align-data">
                    <div className="align-data-label">Zip Code:</div>
                    <div
                      className="align-data-info"
                    >
                      {mapData.product.company.address.zipCode}
                    </div>
                  </div>
                </div>
                <div className="update-button-section">
                  <button
                    type="button"
                    className="update-button"
                    onClick={modalDisplay}
                  >
                    Update Product
                  </button>
                </div>
              </div>
            ) : (
              <div className="loading-content">
                Loading Content !!!
              </div>
            )
        }
    </div>
  );
};

export default Map;
