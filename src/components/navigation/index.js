import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./styles";
import { useNavigationContext } from "../../hooks/navigation";
const Navigation = () => {
  const classes = useStyles();
  const { isNavOpen } = useNavigationContext();
  return (
    <nav className={[classes.nav, isNavOpen ? classes.navOpen : ""].join(" ")}>
      <ul>
        <li>
          <NavLink
            exact
            activeClassName={classes.active}
            className={classes.navLink}
            to="/"
          >
            Main
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName={classes.active}
            className={classes.navLink}
            to="/product"
          >
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
