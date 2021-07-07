import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "370px",
  overflowX: "hidden",
  overflowY: "hidden",
};

const containerStyle = {
  width: "385px",
  height: "370px",
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{
          lat: this.props.product?.company.address.latitude,
          lng: this.props.product?.company.address.longitude,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={this.props.product?.company.address.street}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>
              {this.props.product?.company.address.house}{" "}
              {this.props.product?.company.address.street}
            </h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDMiYgd1HIvt0QVy3uXI83c0n0Sg0O4NDk",
})(MapContainer);
