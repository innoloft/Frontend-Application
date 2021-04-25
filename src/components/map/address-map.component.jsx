import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './address-map.styles.scss';

const AnyReactComponent = ({ text }) => (
    <div className="marker">
        <FontAwesomeIcon icon={faMapMarkerAlt} color="red" size="3x" />
        <div className="text">{text}</div>
    </div>
);

const AddressMap = ({latitude, longitude, house, street}) => {
    const center = {
        lat: Number(latitude),
        lng: Number(longitude)
    };
    const text = house + ', ' + street
    const zoom = 17;
    return (
    <div className='map card'>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDCJw8t9p9W9uw4PyrG96WPmqtNyx7UTd8' }}
            defaultCenter={center}
            defaultZoom={zoom}
        >
            <AnyReactComponent
                lat={latitude}
                lng={longitude}
                text={text}
            />
        </GoogleMapReact>
    </div>
    )
};

export default AddressMap;