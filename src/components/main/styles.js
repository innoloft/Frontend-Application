import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(theme => ({
  main: {
    display: "flex",
    padding: theme.gutter,
    marginTop: theme.header.height,
    "@media (min-width: 1024px)": {
      marginLeft: theme.navigation.width
    }
  }
}));

export default useStyles;
