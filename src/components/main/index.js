import React from 'react';
import "./styles.scss";
import Sidebar from "../sidebar";
import User from "../user";

const Main = () => {
    return (
        <div className={'Main'}>
            <div className={'Sidebar'}>
                <Sidebar />
            </div>
            <div className={'User'}>
                <User />
            </div>
        </div>
    )
}

export default Main;
