import React, { useEffect, useState } from "react";
import "./userInfo.css";

const UserInfo = ({ user, companyName }) => {
  // useEffect(() => {
  //   console.log(user, companyName);
  // }, []);

  return (
    <div className="userInfo">
      <img src={user.profilePicture} alt="user profile" className="userImage" />
      <p>User Name:{` ${user.lastName} ${user.firstName}`}</p>
      <p>Company: {companyName.name}</p>
    </div>
  );
};

export default UserInfo;
