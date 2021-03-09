import React from 'react';
import GoogleMapReact from 'google-map-react'
import './googleMap.css'
import LocationPin from './locationPin';


const GoogleMapComp = ({location, zoom}) => {
    console.log(location)
    return (
        <div className="google_mab_wrapper">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY }}
                defaultCenter={location}
                defaultZoom={zoom}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMapComp