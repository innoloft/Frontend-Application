import React from 'react';

import classes from "../components/Main.css";
import Sidebar from "./Sidebar";
import User from "./User";

const Main = () => {
    return (
        <div className={classes.Main}>
            <div className={classes.Sidebar}>
            <Sidebar></Sidebar>
            </div>
            <div className={classes.User}>
             <User></User>
            </div>
        </div>
    )
}

export default Main
