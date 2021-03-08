import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(theme => ({
  chip: {
    padding: "0 12px",
    backgroundColor: "rgb(224, 224, 224)",
    borderRadius: 100,
    display: "inline-flex",
    margin: 4,
    color: "rgba(0, 0, 0, 0.87)",
    alignItems: "center",
    height: 32,
    fontSize: 14,
    cursor: "pointer",
    border: "none"
  }
}));
const Chip = ({ text }) => {
  const classes = useStyles();
  return <div className={classes.chip}>{text}</div>;
};

export default Chip;
