/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faCogs,
  faTimes,
  faUserCog,
  faSignOutAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

import Loading from '../loading/loading';
import { variables } from '../../helpers';

const successTimeOut = variables.SUCCESS_TIMEOUT;
class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
      result: false,
    };
  }

  handleHome(key) {
    key.preventDefault();
    this.setState({ result: true });

    const redirectUrl = '/';
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, successTimeOut);
  }

  handleHideSideBar(key) {
    key.preventDefault();
    this.setState({ showSideBar: false });
  }

  handleShowSideBar(key) {
    key.preventDefault();
    this.setState({ showSideBar: true });
  }

  render() {
    const {
      showSideBar,
      result,
    } = this.state;

    return (
      showSideBar === true
        ? (
          <aside className="side-bar">

            { result === true ? <Loading MainProps={this.props.MainProps.props} /> : null }

            <div className="side-header">

              <FontAwesomeIcon icon={faUserCog} className="icon setting-icon" />
              <FontAwesomeIcon icon={faTimes} className="icon close-icon" onClick={(key) => { this.handleHideSideBar(key); }} />

            </div>

            <div className="side-contents">

              <div className="profile-picture"> <img src={this.props.MainProps.data.user.profilePicture} alt="profile" /> </div>

              <div className="profile-info">
                <span className="profile-name">{this.props.MainProps.data.user.firstName}</span>
                <span className="profile-status"> Online</span>
              </div>

              <div className="nav-options">

                <h2 className="head"> Title Option </h2>

                <div className="body" onClick={(key) => { this.handleHome(key); }}>
                  <span> <FontAwesomeIcon icon={faHome} className="icon" /> Home </span>
                </div>

                <div className="body active">
                  <span> <FontAwesomeIcon icon={faShoppingBasket} className="icon" /> Product </span>
                </div>

                <div className="body">
                  <span> <FontAwesomeIcon icon={faCogs} className="icon" /> Option One </span>
                </div>

                <div className="body">
                  <span> <FontAwesomeIcon icon={faCogs} className="icon" /> Option Two </span>
                </div>

                <div className="body">
                  <span> <FontAwesomeIcon icon={faCogs} className="icon" /> Option Three </span>
                </div>

                <div className="body">
                  <span> <FontAwesomeIcon icon={faCogs} className="icon" /> Option Four </span>
                </div>

                <div className="body">
                  <span> <FontAwesomeIcon icon={faCogs} className="icon" /> Option Five </span>
                </div>

                <div className="footer">
                  <span> <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> LOGOUT </span>
                </div>

              </div>

            </div>

          </aside>

        ) : (
          <div className="hamburger-menu">
            <FontAwesomeIcon icon={faBars} className="icon" onClick={(key) => { this.handleShowSideBar(key); }} />
          </div>
        )

    );
  }
}

export default SideBar;
