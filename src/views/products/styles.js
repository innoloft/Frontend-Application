import { createUseStyles } from "react-jss";
import color from "color";
const useStyles = createUseStyles(theme => ({
  wrapper: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap"
  },
  product_image: {
    maxWidth: 500,
    backgroundColor: "#fcfcfc",
    border: "1px solid #f2f2f2",
    padding: 10,
    "& > img": {
      maxWidth: "100%",
      "@media (max-width: 1024px)": {
        maxWidth: "40%"
      }
    },
    "@media (max-width: 1024px)": {
      maxWidth: "100%",
      width: "100%",
      textAlign: "center"
    }
  },
  details: {
    paddingTop: theme.gutter,
    flex: 1,
    "@media (min-width: 1024px)": {
      paddingLeft: theme.gutter * 2
    }
  },
  title: {
    fontSize: 24,
    lineHeight: "24px",
    margin: 0,
    color: theme.colors.heading
  },
  subText: {
    color: theme.colors.dull,
    fontWeight: "normal",
    fontSize: 13
  },
  tabWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  tabsButtonGroup: {
    display: "flex",
    width: "100%",
    "& > button": {
      width: "50%",
      display: "block",
      backgroundColor: theme.themeColor,
      color: "#ffffff",
      border: 0,
      padding: 10,
      cursor: "pointer",
      outline: "none",
      "&:hover": {
        backgroundColor: color(theme.themeColor || "#fff").lighten(0.5).hex()
      },
      "&.active": {
        backgroundColor: color(theme.themeColor || "#fff").lighten(0.5).hex()
      }
    }
  },
  active:{
    backgroundColor: [[color(theme.themeColor || "#fff").lighten(0.5).hex()], '!important']
  },
  devider: {
    borderBottom: "1px solid #f2f2f2",
    borderTop: 0
  },
  extraInfo: {
    display: "flex",
    "@media (max-width: 767px)": {
      flexWrap: "wrap"
    }
  },
  userInfo: {
    width: "50%",
    "@media (max-width: 767px)": {
      width: "100%",
      marginBottom: "15px"
    }
  },
  map: {
    marginLeft: 15,
    width: "50%",
    height: 200,
    "@media (max-width: 767px)": {
      width: "100%",
      marginLeft:0
    }
  }
}));

export default useStyles;
