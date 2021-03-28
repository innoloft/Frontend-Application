import React, { useState, useEffect } from "react";
import Map from "../Map/Map";
import ProductionInfo from "../ProductionInfo/ProductInfo";
import TabContent from "../TabContent/TabContent";
import UserInfo from "../UserInfo/UserInfo";
import { connect } from "react-redux";

const MainDiv = props => {
  const {
    id,
    name,
    description,
    picture,
    type,
    categories,
    trl,
    user,
    company,
    businessModels
  } = props.data;

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className="mainDIv">
      <ProductionInfo title={name} type={type}></ProductionInfo>
      <TabContent
      // description={description}
      // categories={categories}
      // businessModels={businessModels}
      // trl={trl}
      />
      <UserInfo user={user} companyName={company}></UserInfo>
      <Map find={company}></Map>
    </div>
  );
};

const mstp = state => {
  return {
    data: state.appData.data
  };
};

export default connect(mstp)(MainDiv);
