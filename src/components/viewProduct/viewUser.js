/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Map extends Component {
  render() {
    const { MainProps } = this.props;
    return (
        <div className="user-info-container">

        <div className="title">User Info</div>

        <div className="profile-picture"> <img src={MainProps.user.profilePicture} alt="profile" /> </div>

        <div>Last Name: <span>{MainProps.user.lastName}</span></div>
        <div>First Name: <span>{MainProps.user.firstName}</span></div>
        <div>Email: <span>{MainProps.user.email}</span></div>
        <div>Position: <span>{MainProps.user.position}</span></div>
        <div>company Name: <span> {MainProps.company.name} <img src={MainProps.company.logo} alt="profile" /></span> </div>
        <div>company Address: <span> {MainProps.company.address.street}, {MainProps.company.address.city.name}, {MainProps.company.address.country.name} </span></div>

        </div>

    );
  }
}

Map.defaultProps = { MainProps: {}, };

Map.propTypes = { MainProps: PropTypes.shape(), };

export default Map;
