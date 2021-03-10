import React from "react";
import PropTypes from "prop-types";

import styles from "./Home.module.scss";

const Home = props => (
  <div className={styles.home}>
    <h2>Home</h2>
  </div>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired
};

export default Home;
