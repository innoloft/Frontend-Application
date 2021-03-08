import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, updateUserInfo } from "app/Actions";

// Utils
import axios from "axios";

export default function ProductPage(props) {
  const baseURL = process.env.REACT_APP_BASE_URL;

  const userInfo = useSelector((reduxState) => reduxState.userInfo);
  const dispatch = useDispatch();

  const [trl, setTrl] = useState(null);
  const [showDescription, setShowDescription] = useState(true);
  const [hasUserSection, setHasUserSection] = useState(true);

  function handleInitMap({ lat, lng }) {
    // The location of company
    const company = { lat: Number(lat), lng: Number(lng) };
    // The map, centered at company
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: company,
    });
    // The marker, positioned at company
    const marker = new window.google.maps.Marker({
      position: company,
      map: map,
    });
  }
  function handleChangeTRL(theTRL) {
    dispatch(updateUserInfo({ trl: theTRL }));
    handleUpdateProduct({
      ...userInfo,
      trl: theTRL,
    });
  }

  function handleUpdateProduct(theProductData) {
    axios
      .put(`${baseURL}/product/6781`, theProductData)
      .then((res) => {
        dispatch(updateUserInfo(res.data));
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  useEffect(() => {
    axios
      .get(`${baseURL}/product/6781`)
      .then((res) => {
        dispatch(setUserInfo(res.data));
        handleInitMap({
          lat: res.data.company.address.latitude,
          lng: res.data.company.address.longitude,
        });
      })
      .catch((err) => {
        console.warn(err);
      });

    axios
      .get(`${baseURL}/trl`)
      .then((res) => {
        setTrl(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });

    axios
      .get(`${baseURL}/configuration/${process.env.REACT_APP_ID}`)
      .then((res) => {
        setHasUserSection(res.data?.hasUserSection);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div className="product-page-container">
      <div
        className="product-page-container__product-info-section"
        style={{ width: !hasUserSection ? "100%" : "100%" }}
      >
        <div className="product-page-container__product-image-container">
          <img src={userInfo?.picture} alt="" />
        </div>
        <div className="product-page-container__product-main-info-container">
          <div className="product-page-container__product-main-info-container__info">
            <div className="product-page-container__product-main-info-container__info__title">
              Title:{" "}
            </div>
            <div className="product-page-container__product-main-info-container__info__name">
              {userInfo?.name}
            </div>
          </div>
          <div className="product-page-container__product-main-info-container__info">
            <div className="product-page-container__product-main-info-container__info__title">
              Type:{" "}
            </div>
            <div className="product-page-container__product-main-info-container__info__name">
              {userInfo?.type?.name}
            </div>
          </div>
        </div>
        <div className="product-page-container__description-and-attributes-tab-container">
          <div className="product-page-container__toggle-button-container">
            <button
              className={`${showDescription ? "active" : ""}`}
              onClick={() => setShowDescription(true)}
            >
              Description
            </button>
            <button
              className={`${!showDescription ? "active" : ""}`}
              onClick={() => setShowDescription(false)}
            >
              Attributes
            </button>
          </div>
          {showDescription && (
            <div className="product-page-container__description-container">
              {userInfo?.description}
            </div>
          )}
          {!showDescription && (
            <div className="product-page-container__attributes-container">
              <div className="product-page-container__categories-container">
                <div className="product-page-container__attribute">
                  <div className="product-page-container__attribute__title">
                    Categories:{" "}
                  </div>
                  {userInfo?.categories.map((category) => `${category.name}, `)}
                </div>
              </div>
              <div className="product-page-container__business-model-container">
                <div className="product-page-container__attribute">
                  <div className="product-page-container__attribute__title">
                    Business Models:{" "}
                  </div>
                  {userInfo?.businessModels.map(
                    (businessModel) => `${businessModel.name}, `
                  )}
                </div>
              </div>
              <div className="product-page-container__trl-container">
                <div className="product-page-container__attribute__title">
                  TRL:{" "}
                </div>
                <div className="product-page-container__attribute__trl">
                  {trl.map((theTRL) => {
                    return (
                      <div key={theTRL.id}>
                        <input
                          type="radio"
                          name={theTRL.name}
                          value={theTRL.id}
                          id={theTRL.id}
                          checked={theTRL.id == userInfo?.trl.id}
                          onClick={() => handleChangeTRL(theTRL)}
                        ></input>
                        <span>{theTRL.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}{" "}
        </div>
      </div>
      {hasUserSection && (
        <div className="product-page-container__user-info-section">
          <div className="product-page-container__user-info-container">
            <div className="product-page-container__user-image-container">
              <img src={userInfo?.user?.profilePicture} alt="" />
            </div>
            <div className="product-page-container__user-name">
              <div className="product-page-container__user-name__title">
                Name:{" "}
              </div>
              {userInfo?.user?.firstName &&
                `${userInfo?.user?.firstName} ${userInfo?.user?.lastName}`}
            </div>
            <div className="product-page-container__company-name">
              <div className="product-page-container__company-name__title">
                Company:{" "}
              </div>
              {userInfo?.company?.name}
            </div>
          </div>
          <div className="product-page-container__map-container">
            <div id="map"></div>
          </div>
        </div>
      )}{" "}
    </div>
  );
}

// email: "c.stirner@innoloft.com"
// firstName: "Christopher"
// id: 284
// lastName: "Stirner"
// position: "Chief Strategy Officer"
// profilePicture: "https://img.innoloft.de/users/user_8b245d25.png"
// sex: 1
