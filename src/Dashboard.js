import React from 'react';
import "./Dashboard.scss"
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Content from "./components/Content";

const Dashboard = (props) => {
    return (
        <div className="dash-container">
            <Header/>
            <div className={"wrapper"}>
                <SideMenu/>
                <Content/>
            </div>
        </div>
    );
};

export default Dashboard;
