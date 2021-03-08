import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import { useNavigationContext } from "../../hooks/navigation";
import { Link } from "react-router-dom";
const useStyles = createUseStyles(theme => ({
  header: {
    backgroundColor: "#f2f2f2",
    color: "#ffffff",
    padding: 15,
    display: "flex",
    position: "fixed",
    top: 0,
    width: "100%"
  },
  logo: {
    width: theme.logo.width,
    display: "inline-flex",
    alignItems: "center",
    "& img": {}
  },
  menuIcon: {
    marginLeft: 15,
    border: "1px solid",
    borderColor: theme.themeColor,
    "@media (min-width: 1024px)": {
      display: "none"
    }
  },
  menuActive: {
    backgroundColor: theme.themeColor,
    "& svg": { fill: "#fff" }
  }
}));
const Header = (...props) => {
  const classes = useStyles();
  const app_logo = useSelector(state => state.appConfig.config.logo);
  const { toggle, isNavOpen } = useNavigationContext();

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        <img src={app_logo} alt="" />
      </Link>

      <button
        className={[classes.menuIcon, isNavOpen ? classes.menuActive : ""].join(
          " "
        )}
        onClick={toggle}
      >
        <svg width="18px" viewBox="0 -53 384 384">
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
