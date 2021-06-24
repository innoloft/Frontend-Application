import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import UserDetails from "./userDetail";
import UserInput from "./userInput";
import "./styles.scss";

const User = () => {
    return (
        <div>
            <Tabs className={'tabs'} defaultIndex={1}>
                <TabList className={'tablist'}>
                    <Tab className={'tablist__1'}>Account Settings</Tab>
                    <Tab className={'tablist__2'}>User Information</Tab>
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

export default User;
