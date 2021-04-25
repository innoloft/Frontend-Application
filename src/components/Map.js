import React from 'react';
import { 
  withGoogleMap, 
  withScriptjs,
  GoogleMap, 
  Marker 
} from "react-google-maps";
import config from '../config/globalConstants';
import PropTypes from 'prop-types';

const mapContainerStyle = {
  width: '100%',
  height: '100%'
}; 

let center = {
  lat: 24.860735,
  lng: 67.001137
};

const mapHeight = {
  height: `100%`
}

const googleMapURL = config.GOOGLE_MAP_URL + config.GOOGLE_MAP_KEY;

export const Map = (props) => {  
  center.lat = Number(props.lat);
  center.lng = Number(props.lng);

  let MapWrapped = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={center}
        defaultOptions={{ styles: mapContainerStyle }}
    >
        <Marker position={center} />
    </GoogleMap>
  ));

  return (
    <div style={mapContainerStyle}>
      <MapWrapped
        googleMapURL={googleMapURL}
        loadingElement={<div style={mapHeight} />}
        containerElement={<div style={mapHeight} />}
        mapElement={<div style={mapHeight} />}
      />
    </div>
  );
}

Map.prototype = {
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
}