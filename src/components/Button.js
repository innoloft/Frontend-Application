import React from 'react';

const Button = ({title, onClick, activeTab}) => {
  return (
    <div className={`tab--product ${activeTab ? 'active' : ''}`} onClick={() => onClick()}>
      <button>{title}</button>
    </div>
  )
}

export default Button;