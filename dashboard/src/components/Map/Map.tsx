import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Company } from '../../types/Product';

/**
 * google map is not for free, I would have added a marker to where the company is but
 * I would need to provide secrets for it, so I thought it won't be necessary
 */

interface MapProps {
    company: Company;
}

export const Map: React.FC<MapProps> = props => {

    const center = {
        lat: Number(props.company.address.latitude),
        lng: Number(props.company.address.longitude),
    };
    const zoom = 11;
    return (
        <div className="map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'add your api key' }}
            defaultCenter={center}
            defaultZoom={zoom}
            >
        </GoogleMapReact>
    </div>
    );
}
