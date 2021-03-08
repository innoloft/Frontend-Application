import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '200px'
  };

  const Map =(props) => {
    const { isLoaded } = useJsApiLoader({
      id: '',
      googleMapsApiKey: "AIzaSyCM1ep9ZjeMwtws-hkBGXs_DLGy49QYXHU"
    })
    const center = {
        lat: +props.data.latitude,
        lng: +props.data.longitude
      };
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(Map)