import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ showNavbar }) {
  const [selectedPage, setSelectedPage] = useState("home");
  const configuration = useSelector((store) => store.configuration.configurationData);

  const handleSelectedPage = (page) => {
    setSelectedPage(page);
  };
  return (
    <div className={`navbar ${showNavbar ? "" : "hidden"}`}>
      <ul>
        <Link
          to="/"
          className={`${selectedPage === "home" ? "selected-page" : ""}`}
          onClick={() => handleSelectedPage("home")}
          style={{ color: configuration.mainColor }}
        >
          <span>Home</span>
        </Link>
        <Link
          to="/product"
          className={`${selectedPage === "product" ? "selected-page" : ""}`}
          onClick={() => handleSelectedPage("product")}
          style={{ color: configuration.mainColor }}
        >
          <span>Product</span>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
