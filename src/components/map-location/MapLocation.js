import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "./MapLocation.css";

function MapLocation({ location, zoomLevel }) {
	return (
		<div className="map">
			<h2 className="map-h2">Come Visit Us At Our Office</h2>

			<div className="google-map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
					defaultCenter={location}
					defaultZoom={zoomLevel}>
					<LocationPin
						lat={location.lat}
						lng={location.lng}
						text={location.address}
					/>
				</GoogleMapReact>
			</div>
		</div>
	);
}

export default MapLocation;
