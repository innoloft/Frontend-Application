import React from 'react';
import UserDetails from "./Userdetails";
import UserInput from "./Userinput";

import classes from "../components/User.css";

import {Tab,Tabs,TabList,TabPanel} from "react-tabs";

import 'react-tabs/style/react-tabs.css';

const User = () => {
    return (
        <div>
        <Tabs className={classes.tabs} defaultIndex={1} onSelect={index => console.log(index)} >
         <TabList className={classes.tablist}>
             <Tab className={classes.tablist__1}>Account Settings</Tab>
             <Tab className={classes.tablist__2}>User Information</Tab>
         </TabList>
         <TabPanel>
            <UserDetails />
         </TabPanel>
         <TabPanel> 
             <UserInput />
         </TabPanel>
         </Tabs>
        </div>
    )
}

export default User
