import React from "react";
import GoogleMapReact from "google-map-react";

function GoogleMap(props) {
  return (
    <div  style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={{
            lat: 50.779729,
            lng: 6.100367
          }}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
