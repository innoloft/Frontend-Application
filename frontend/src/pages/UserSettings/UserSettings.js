import React, { useState, useCallback } from 'react';
import { useGlobalState, setUser, setMessage, setError } from '../../store';
import Tab from '../../components/Tab';
import AccountSettings from '../../components/AccountSettings';
import UserInformation from '../../components/UserInformation';
import {updateUser} from '../../api';

import './usersettings.scss';

const tabList = [
  {key: "account-settings", title: "Account Settings"}, 
  {key: "user-information", title: "User Information"}
];

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

const UserSettings = () => {
  const forceUpdate = useForceUpdate();
  
  const [user] = useGlobalState('user');
  const setUserData = (user) => {
    updateUser(user)
    .then((res) => {
      setUser({...res.user});
      setMessage(res.message);
      setTimeout(() => setMessage(''), 3000);
    })
    .catch((err) => {
      setError(err.error);
      forceUpdate();
      setTimeout(() => setError(''), 3000);
    });
  }

  return (
    <div className="col-xl-8">
      <Tab tabList={tabList}>
        <Tab.Item key="account-settings">
          <AccountSettings user={user} setUser={setUserData}/>
        </Tab.Item>

        <Tab.Item key="user-information">
          <UserInformation user={user} setUser={setUserData}/>
        </Tab.Item>
      </Tab>
    </div>
  );
}

export default UserSettings;