/** @format */

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import React from 'react';

const MapCompoenet = ({address}) => {
	return (
		<MapContainer center={[50.779729, 6.100367]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[50.779729, 6.100367]}>
				<Popup>
					{address?.house} {address?.street}, {address?.city?.name} {address?.country?.name}
				</Popup>
			</Marker>
		</MapContainer>
	);
};
export default MapCompoenet;
