import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

const Map = () => {
  const [address, getAddress] = useState([]);
  useEffect(() => {
    axios.get('https://api-test.innoloft.com/product/6781/').then((res) => {
      getAddress({
        lat: parseFloat(res.data.company.address.latitude),
        lng: parseFloat(res.data.company.address.longitude),
      });
    });
  }, []);

  return (
    <>
      {address && (
        <>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_MAP_KEY,
            }}
            defaultCenter={{ lat: 37.42216, lng: -122.08427 }}
            center={address}
            defaultZoom={9}
          />
        </>
      )}
    </>
  );
};

export default Map;
