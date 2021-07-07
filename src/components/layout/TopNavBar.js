import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import styles from "../../assets/styles/navbar.module.scss";

import SideNavData from "./SideNavData";

const TopNavBar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="innoloft logo" className={styles.logo} />
      <div className={styles.mobileMenu}>
        <ul>
          {SideNavData.map((item, index) => (
            <li key={index}>
              <Link to={`${item.path}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
