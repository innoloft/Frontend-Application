import useStyles from "./styles";
import { Avatar } from "../../components";

const Userinfo = props => {
  const classes = useStyles();
  const { user } = props;
  return (
    <div className={classes.wrapper}>
      <Avatar src={user.profilePicture} size="sm" />
      <div className={classes.userinfo}>
        <div className={classes.name}>
          {user.firstName} {user.lastName}
        </div>
        <div className={classes.smalltext}>
          {user.position}
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
