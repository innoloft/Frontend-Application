import React from 'react';
import GoogleMapReact from 'google-map-react';
import { css } from '@emotion/css';

const mapStyles = css`
	margin-top: 2rem;
	height: 30rem;
	width: 100%;

	.address {
		position: absolute;
		left: -10rem;
		top: -5rem;
		width: 10rem;
		height: 3.5rem;
		background-color: #fff;
		text-align: center;
		color: #000;
		font-size: 1rem;
		font-weight: 700;
		padding: 1rem;
		border-radius: 0.4rem;
	}
`;
export const GoogleMap: React.FC<any> = ({
	center,
	address: {
		latitude,
		longitude,
		house,
		street,
		city: { name: city },
		zipCode,
		country: { name: country },
	},
	zoom,
	...restProps
}) => {
	const marker = {
		lat: latitude,
		lng: longitude,
	};
	const address = `${house} ${street} ${city} ${zipCode} ${country}`;
	return (
		<div className={mapStyles}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
				defaultCenter={center}
				defaultZoom={zoom}
				{...restProps}
			>
				<Address {...marker}>{address}</Address>
			</GoogleMapReact>
		</div>
	);
};

const Address: React.FC<any> = ({ children, ...restProps }) => {
	return (
		<div className='address' {...restProps}>
			{children}
		</div>
	);
};

export default GoogleMap;
