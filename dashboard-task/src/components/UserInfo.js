import React from "react";
import { useSelector } from "react-redux";

function UserInfo() {
  const user = useSelector((store) => store.product.productData.user);
  const company = useSelector((store) => store.product.productData.company);
  const hasUserSection = useSelector((store) => store.configuration.configurationData.hasUserSection);
  return (
    <div className="info-and-map">
      {user && hasUserSection ? (
        <div className="user-info">
          <img src={user.profilePicture} alt="userPicture" />
          <div className="info-details">
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <h4>{company.name}</h4>
          </div>
        </div>
      ) : (
        ""
      )}
      {company && (
        <iframe
          className="google-map"
          title={company.name}
          src={`https://maps.google.com/maps?q=${company.address.latitude},${company.address.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
      )}
    </div>
  );
}

export default UserInfo;
