import React, { useState, useEffect } from "react";

// Components
import ResponsiveSideBar from "./ResponsiveSideBar/ResponsiveSideBar";

// Utils
import { IoMdMenu } from "react-icons/io";

export default function TopNavBar() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [showSideBarIcon, setShowSideBarIcon] = useState(false);

  useEffect(() => {
    function handleShowSideBarIcon(theWindowWidth) {
      setShowSideBarIcon(theWindowWidth.matches);
    }

    const windowWidth = window.matchMedia("(max-width: 1021px)");
    handleShowSideBarIcon(windowWidth);
    windowWidth.addEventListener("change", handleShowSideBarIcon);
    setShowSideBarIcon(windowWidth.matches);
  }, []);

  return (
    <>
      <div className="top-nav-bar">
        {showSideBarIcon && (
          <div
            className="top-nav-bar__sidebar-container"
            onClick={() => setOpenSideBar((prevState) => !prevState)}
          >
            <div className="top-nav-bar__sidebar-container__icon">
              <IoMdMenu size={30} />
            </div>

            {showSideBarIcon && openSideBar && (
              <div className="top-nav-bar__sidebar-container__sidebar">
                <ResponsiveSideBar />
              </div>
            )}
          </div>
        )}
        <div className="top-nav-bar__image-container">
          {/* The image used differs from the given image as it did not match the background color */}
          <img
            src="https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
