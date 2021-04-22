import React from 'react';
import './Button.scss';

const Button = ({ text, clicked, visible }) => {
  return (
    <button
      className={!visible ? `Button invisible` : 'Button'}
      onClick={clicked}
    >
      {text}
    </button>
  );
};

export default Button;
