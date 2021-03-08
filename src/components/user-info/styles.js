import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(theme => ({
  wrapper: {
    display: "flex",
    flex: 1
  },
  userinfo: {
      marginLeft: 15
  },
  name:{
      fontWeight: 600,
      marginBottom: 2
  },
  smalltext:{
      fontSize: 14
  }
}));

export default useStyles;
