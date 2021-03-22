import GoogleMapReact from "google-map-react";
import { RightSideSectionWrapper } from "./StyledComponents";

const RightSection = (props) => {
  const { user, company } = props;
  const Location = () => <></>;

  return (
    <RightSideSectionWrapper>
      {" "}
      <div className="user_info">
        <img src={user?.profilePicture} alt="profile" />
        <h4>{user?.firstName}</h4>
        <p>{company?.name}</p>
      </div>
      <div className="map_section">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "its not wirking (api key should go here)" }}
          defaultCenter={{ lat: company?.latitude, lng: company?.longitude }}
          defaultZoom={11}>
          <Location
            address={company?.address}
            lat={company?.latitude}
            lng={company?.longitude}
          />
        </GoogleMapReact>
      </div>
    </RightSideSectionWrapper>
  );
};

export default RightSection;
