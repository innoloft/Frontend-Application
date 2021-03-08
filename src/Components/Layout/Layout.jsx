import React from "react";

// Components
import TopNavBar from "Components/Layout/TopNavBar/TopNavBar";
import SideBar from "Components/Layout/SideBar/SideBar";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <div className="layout-container__header-container">
        <TopNavBar />
      </div>
      <div className="layout-container__content-container">
        <div className="layout-container__content-container__sidebar">
          <SideBar data={children.props} />
        </div>
        <div className="layout-container__content-container__content">
          {children}
        </div>
      </div>
    </div>
  );
}
