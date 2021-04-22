import GoogleMapReact from 'google-map-react';
import React from 'react';
import './Map.scss';
import LocationPin from './LocationPin';

const Map = ({ product }) => {
  const street = product?.company.address?.street;
  // const lat = product?.company.address?.latitude;
  // const lng = -product?.company.address?.longitude;
  const house = product?.company.address?.house;
  const country = product?.company.address?.country?.name;
  const city = product?.company.address?.city?.name;
  const zipCode = product?.company.address?.zipCode;
  const address = `${street} ${house}, ${city} - ${country}, ${zipCode}`;

  const googleApiKey = 'AIzaSyDUcmRaB8T6js0gaWFXntq5Gzx - QXz0r_k';

  return (
    <div className='Map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApiKey }}
        defaultCenter={{
          lat: 50.779729,
          lng: 6.100367,
        }}
        defaultZoom={15}
      >
        <LocationPin lat={50.779729} lng={6.100367} text={address} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
