import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(theme => ({
  wrapper: {
    display: "flex",
    flexShrink: 0
  },
  "avatar-sm": {
    width: 80,
    height: 80
  },
  "avatar-md": {
    width: 100,
    height: 100
  },
  "avatar-xs": {
    width: 50,
    height: 50
  },
  "avatar-img": {
    maxWidth: "100%"
  }
}));
const Avatar = ({ src, alt, size }) => {
  const classes = useStyles();
  const _size = size || "sm";
  return (
    <div className={[classes[`avatar-${_size}`], classes.wrapper].join(" ")}>
      <img src={src} alt={alt || ""} className={classes[`avatar-img`]} />
    </div>
  );
};

export default Avatar;
