import React, { Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function ProductMap(props) {
  const Marker = ({text}) => 
  <div>
    <FontAwesomeIcon icon={faMapMarkerAlt} color="#ff0000" size="3x" />
    <div style={{width: '110px', marginTop:'5px', textAlign: 'left', backgroundColor: '#ffffff'}}>Innoloft GmbH<br/>{text}</div>
  </div>;

  return (
    <Fragment>
      <div style={{ height: props.isMobile ? '120vw' : '30vw', width: '100%', borderTop: props.hasUserSection || props.isMobile ? '2px solid #e4b302' : '', paddingTop: props.hasUserSection || props.isMobile  ? '20px' : 0, marginTop: props.hasUserSection || props.isMobile ? '20px' : 0 }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: '' }}
          defaultCenter={props.center || {lat: Number(props.address.latitude), lng: Number(props.address.longitude)}}
          defaultZoom={props.zoom || 16}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            lat={Number(props.address.latitude)}
            lng={Number(props.address.longitude)}
            text={`${props.address.house}, ${props.address.street}, ${props.address.city.name}, ${props.address.country.name}`}
          />
        </GoogleMapReact>
      </div>
    </Fragment>
  );
}

export default ProductMap;
