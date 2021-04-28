/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import './modal.css';
import UseForm from './Logic';
import validate from '../Validators/Validator';

const Modal = ({ modal, mapData, hideModal }) => {
  const {
    handleChange, values, handleSubmit, errors,
  } = UseForm(validate, hideModal);

  values.id = mapData.product.id;

  return (
    <div className={`${modal} pop-up-modal`}>
      <form
        onSubmit={handleSubmit}
        className="update-product-fields"
      >
        <div className="update-section-header">
          Update
          {' '}
          {mapData.product.name}
          &apos;s Information
          <i
            onClick={hideModal}
            className="fas fa-times-circle"
          />
        </div>
        <div className="name-description-section">
          <div className="input-section">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter name"
            />
            <span>{errors.name}</span>
          </div>
          <div className="input-section">
            <input
              name="description"
              value={values.description}
              onChange={handleChange}
              type="text"
              placeholder="Enter description"
            />
            <span>{errors.description}</span>
          </div>
        </div>
        <div className="implementation-investment">
          <div className="input-section">
            <input
              name="implementation"
              value={values.implementation}
              onChange={handleChange}
              type="text"
              placeholder="Enter Implementation Effort"
            />
            <span>{errors.implementation}</span>
          </div>
          <div className="input-section">
            <input
              name="investment"
              value={values.investment}
              onChange={handleChange}
              type="text"
              placeholder="Enter Investment Effort"
            />
            <span>{errors.investment}</span>
          </div>
        </div>
        <div className="buttons-section">
          <button type="submit">Save</button>
          <button
            onClick={hideModal}
            className="cancel-button"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
