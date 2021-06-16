import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  console.log(props);
  const center = {
    lat: props.address.latitude,
    lng: props.address.longitude,
  };

  return <Map google={props.google} zoom={14} initialCenter={center} />;
};

MapContainer.propTypes = {
  company: PropTypes.object,
};

const mapStateToProps = ({
  userReducer: {
    company: { address },
  },
}) => ({
  address,
});

export default connect(
  mapStateToProps,
  null
)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  })(MapContainer)
);
