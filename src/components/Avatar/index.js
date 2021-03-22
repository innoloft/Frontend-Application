import { AvatarWrapper } from "./StyledComponents";
import { FaUserCircle } from "react-icons/fa";
import { ButtonWithIcon } from "components/Button";
import { FiLogIn } from "react-icons/fi";
const Avatar = (props) => {
  const { userProfile } = props;
  return (
    <AvatarWrapper>
      <div className="avatar_image">
        {userProfile ? (
          <img src={userProfile?.profilePicture} alt="profile" />
        ) : (
          <FaUserCircle
            style={{
              color: "gray",
              height: "60px",
              width: "60px",
            }}
          />
        )}
      </div>
      <div>
        {userProfile ? (
          <div> hello</div>
        ) : (
          <ButtonWithIcon text="Login" icon={<FiLogIn />} iconPosition="left" />
        )}
      </div>
    </AvatarWrapper>
  );
};

export default Avatar;
