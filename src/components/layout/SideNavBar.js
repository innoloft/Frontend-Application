import React from "react";
import { Link } from "react-router-dom";

import SideNavData from "./SideNavData";
import styles from "../../assets/styles/navbar.module.scss";

const SideNavBar = () => {
  return (
    <>
      <nav className={styles.sidebar}>
        <ul>
          {SideNavData.map((item, index) => (
            <li key={index}>
              <Link to={`${item.path}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideNavBar;
