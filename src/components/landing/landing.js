import Helmet from 'react-helmet';
import React, { Component } from 'react';

class Landing extends Component {
  handleViewProduct(key, productId) {
    key.preventDefault();
    const redirectUrl = `/products/${productId}`;
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 1000);
  }

  render() {
    return (
      <div className="landing-page">

        <Helmet>
          <style>{'body { background-color: #ffff;}'}</style>
        </Helmet>

        <div className="container">

          <div className="content-container">

            <h1>Frontend Challenge</h1>

            <button type="submit" onClick={(key) => { this.handleViewProduct(key, 6781); }}>Check Product Now</button>

          </div>

        </div>

      </div>

    );
  }
}

export default Landing;
