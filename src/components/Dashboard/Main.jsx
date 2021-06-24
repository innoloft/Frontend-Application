import React, { useState } from "react";
import AccountSetting from "./SettingContent/Account";
import UserSetting from "./SettingContent/User";

export default function Feed() {
  const [setting, setSetting] = useState("account");

  function changeSettingContent(content) {
    setSetting(content);
  }

  return (
    <div className="main-content">
      <h1 className="main-content__heading">User Profile Setting</h1>

      <div className="main-content__subheading">
        Edit you account and personal information here
      </div>

      <div className="main-card">
        <div className="main-card__tabs all-center">
          <div
            className={`account-setting-tab ${
              setting === "account" && "active"
            }`}
            onClick={() => changeSettingContent("account")}
          >
            Account Setting
          </div>
          <div
            className={`user-setting-tab ${setting === "user" && "active"}`}
            onClick={() => changeSettingContent("user")}
          >
            User Setting
          </div>
        </div>

        <div className="main-card__content">
          {setting === "account" && <AccountSetting />}
          {setting === "user" && <UserSetting />}
        </div>
      </div>
    </div>
  );
}
