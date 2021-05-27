import React from 'react';
import "./Button.scss";

const Button = (props) => {
    const {children, type} = props;

    return (
        <button type={type} className="simple-button">{children}</button>
    );
};

export default Button;
