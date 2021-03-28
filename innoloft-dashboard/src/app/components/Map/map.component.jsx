import { MStyle } from "./map.styles";
import GoogleMapReact from "google-map-react";

function Map({ address }) {
  const { latitude, longitude } = address;
  const props = {
    center: {
      lat: Math.round(latitude * 1000) / 1000,
      lng: Math.round(longitude * 1000) / 1000,
    },
    zoom: 15,
  };
  return (
    <MStyle style={{ height: "275px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <AnyReactComponent lat={latitude} lng={longitude} text="📍" />
      </GoogleMapReact>
    </MStyle>
  );
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default Map;
