import React from 'react';
import Tab from "../Tab";
import MainForm from "./MainForm";
import AdditionalForm from "./AdditionalForm";

const Account = () => {
    return (
        <Tab
            items={[
                {label:"Main Information",content:<MainForm/>},
                {label:"Additional Information",content:<AdditionalForm/>}
                ]}
        />
    );
};

export default Account;
