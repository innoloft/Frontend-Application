import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import './map.scss'
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} width="30" height={"30"} />
    <p className="pin-text">{text}</p>
  </div>
);

function GoogleMap() {
      const location = {
        lat: 50.77973,
        lng: 6.10036,
      };
    return (
      <div style={{ height: "100%", width: "100%", borderRadius: "5px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
          defaultCenter={location}
          zoom={15}
        >
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </div>
    );
}

export default GoogleMap
