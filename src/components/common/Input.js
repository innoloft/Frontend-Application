import React from 'react';
import "./Input.scss"

const Input = (props) => {
    const{label,error,value,touched,onChange,name,onBlur,type}=props;

    return (
        <div className={"input-container "+(touched&&error?"input-container-has-error":"")}>
            <label className="text-field">
                <input type={type?type:"text"} name={name} onBlur={onBlur} onChange={onChange} value={value} placeholder=" "/>
                <span>{label}</span>
            </label>
            <div className={touched&&error?"show-error":""}>{touched&&error}</div>
        </div>
    );
};

export default Input;
