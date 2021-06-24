import React from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const Wrapper = styled.main`
  border: 0.005rem solid lightgrey;
  border-radius: 0.25rem;
  background: white;

  margin: 0.5rem 0 0 0.5rem;
  flex: 1;
  position: relative;
  max-height: 33rem;

  @media (max-width: 43.75rem) {
    flex-direction: column;
    height: 40rem;
  }
`;

const mapStyles = {
  width: "100%",
  height: "33rem",
};

export const GoogleMap = ({ company = {} }) => {
  const {
    name,
    address: { longitude, latitude },
  } = company;

  const position = {
    lat: latitude,
    lng: longitude,
  };

  const MapContainer = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  })(({ google }) => {
    return (
      <Map google={google} zoom={18} style={mapStyles} initialCenter={position}>
        <Marker position={position} title={name} name={name} />
      </Map>
    );
  });
  return (
    <Wrapper>
      <MapContainer />
    </Wrapper>
  );
};
