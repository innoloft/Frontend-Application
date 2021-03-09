import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Container, Inner, Address } from './styles/map';

function GoogleMap({
	center,
	address: { latitude, longitude, house, street, city: { name: city }, zipCode, country: { name: country } },
	zoom,
	...restProps
}) {
	const marker = {
		lat: latitude,
		lng: longitude
	};
	const address = `${house} ${street} ${city} ${zipCode} ${country}`;
	return (
		<Container>
			<Inner>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
					defaultCenter={center}
					defaultZoom={zoom}
					{...restProps}
				>
					<GoogleMap.Address {...marker}>{address}</GoogleMap.Address>
				</GoogleMapReact>
			</Inner>
		</Container>
	);
}

GoogleMap.Address = function MapAddress({ children, ...restProps }) {
	return <Address {...restProps}>{children}</Address>;
};

export default GoogleMap;
