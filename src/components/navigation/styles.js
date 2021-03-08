import { createUseStyles } from "react-jss";
import color from "color";
const useStyles = createUseStyles(theme => ({
  nav: {
    backgroundColor: theme.themeColor,
    color: "#ffffff",
    position: "fixed",
    left: 0,
    top: theme.header.height,
    bottom: 0,
    width: theme.navigation.width,
    overflow: "auto",
    "& ul": {
      listStyle: "none",
      padding: 0,
      margin: 0
    },
    "@media (max-width: 991px)": {
      transform: "translateX(-100%)",
      transition: "transform 0.1s ease"
    }
  },
  navOpen: {
    "@media (max-width: 991px)": {
      transform: "translateX(0)"
    }
  },
  navLink: {
    color: theme.navigation.color,
    textDecoration: "none",
    display: "flex",
    padding: theme.gutter,
    "&:hover": {
      backgroundColor: color(theme.themeColor || "#fff").darken(0.5).hex()
    },
    "&.active": {
      backgroundColor: color(theme.themeColor || "#fff").darken(0.5).hex()
    }
  }
}));

export default useStyles;
