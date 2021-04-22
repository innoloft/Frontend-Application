import React from 'react';
import './Modal.scss';

const Modal = ({ show, children }) => {
  return <div className={show ? 'modal show' : 'modal'}>{children}</div>;
};

export default Modal;
