import { UIStyle } from "./userInfo.styles";

function UserInfo({ user, props }) {
  const { profilePicture, firstName, lastName, email, position } = user;
  const name = `${firstName} ${lastName}`;
  return (
    <UIStyle>
      <img src={profilePicture} alt={name} />
      <p className="name">{name}</p>
      <h3>{position}</h3>
      <p>{props.name}</p>
      <p className="email">{email}</p>
    </UIStyle>
  );
}

export default UserInfo;
