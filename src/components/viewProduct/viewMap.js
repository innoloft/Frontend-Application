/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import dotenv from 'dotenv';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

dotenv.config();
class ViewMap extends Component {
  constructor() {
    super();
    this.state = { key: process.env.REACT_APP_API_KEY };
  }

  render() {
    const { key } = this.state;
    const { MainProps } = this.props;
    const AnyReactComponent = ({ text }) => (
      <div style={{ fontSize: '12px', color: '#102446' }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '50px', color: 'red' }} />
        {text}
      </div>
    );

    return (
      <div className="map-container">

        <GoogleMap
          bootstrapURLKeys={{ key }}
          center={{ lat: Number(MainProps.address.latitude), lng: Number(MainProps.address.longitude) }}
          zoom={15}
        >
          <AnyReactComponent
            lat={Number(MainProps.address.latitude)}
            lng={Number(MainProps.address.longitude)}
            text={`House_${MainProps.address.house}`}
          />
        </GoogleMap>

      </div>

    );
  }
}

ViewMap.defaultProps = { MainProps: {}, };

ViewMap.propTypes = { MainProps: PropTypes.shape(), };

export default ViewMap;
