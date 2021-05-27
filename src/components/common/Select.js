import React from 'react';
import "./Select.scss"

const Select = (props) => {
    const{label,items,error,value,touched,onChange,name,onBlur,type}=props;

    return (
        <div className={"select-container "+(touched&&error?"select-container-has-error":"")}>
            <label className="text-field">
                <select name={name} onBlur={onBlur} onChange={onChange} value={value} placeholder=" ">
                    <option value="">Select an Item</option>
                    {
                        items&&items.map((item)=>{
                           return (<option value={item.value}>{item.label}</option>);
                        })
                    }
                </select>
                <span>{label}</span>
            </label>
            <div className={touched&&error?"show-error":""}>{touched&&error}</div>
        </div>
    );
};

export default Select;
