import React, {useState} from 'react';
import "./Tab.scss"

const Tab = (props) => {
    const {items} = props;
    const [checked, setChecked] = useState(0);

    const GetItems = () => {
        let data = [];
        items && items.map((item, index) => {
            data.push(
                <React.Fragment key={index}>
                    <label htmlFor={"tab-"+index} tabIndex={index} className="tab-panel-label two-tabs"></label>
                    <input onChange={(e) => {
                        if (e.target.checked) {
                            setChecked(index);
                        }}} id={"tab-"+index} type="radio" name="tabs" checked={checked === index ? "true" : ""} aria-hidden="true"/>
                    <h2 className="tab-title two-tabs">
                        {item.label}
                        {checked === index&&<span className="triangle"></span>}
                    </h2>

                    <div className="tab-panel-content">
                        {item.content}
                    </div>

                </React.Fragment>
            );
        });
        return data;
    };

    return (
        <>

            <div className="tab-wrapper">
                <div className="tab-panel">
                    {GetItems()}
                </div>
            </div>


        </>
    );
};

export default Tab;
