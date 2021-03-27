/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */

import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import Pattern from './pattern';
import ViewMap from './viewMap';
import ViewUser from './viewUser';
import Navbar from '../navBar/navBar';
import SideBar from '../sideBar/SideBar';
import Loading from '../loading/loading';
import ViewAttribute from './viewAttribute';
import { viewProduct } from '../../actions';
import { variables, shortData } from '../../helpers';

const successTimeOut = variables.SUCCESS_TIMEOUT;
const errorTimeOut = variables.ERROR_TIMEOUT;
class ViewProducts extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      result: false,
      dataLoaded: false,
    };
  }

  componentDidMount() {
    const { match, viewCurrentProduct } = this.props;
    viewCurrentProduct(match.params.productId);
    this.setState({ result: true });
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (props.loadedData === true) {
      setTimeout(() => {
        this.setState({ result: false, data: props.data.data, dataLoaded: props.loadedData });
      }, successTimeOut);
    }

    if (props.loadedData === false) {
      toast.info(props.data.message);
      setTimeout(() => {
        this.setState({ result: false });
      }, errorTimeOut);
    }
  }

  render() {
    const { result, data, dataLoaded } = this.state;

    return (

      <div>

        <Helmet>
          <style>{'body { background-color: rgb(231, 230, 230); }'}</style>
        </Helmet>

        <ToastContainer />

        <Navbar MainProps={this.props} />

        <SideBar MainProps={{ props: this.props, data }} />

        {result === true ? <Loading MainProps={this.props} /> : null }

        <div className="product-container">

          <h1>Product Details</h1>

          <Pattern />

          {dataLoaded === true && data
            ? (
              <div className="product-container">

                <div className="view-container">

                  <section className="section-one">

                    <div className="product-image-container">

                      <div className="title">{data.name}</div>

                      <img src={data.picture} alt="product-pic" />

                    </div>

                    <div className="product-info-container">

                      <div>Type: <span>{data.type.name}</span> </div>
                      <div>categories: {data.categories.length > 0 ? data.categories.map((element) => <span key={element.id}>{element.name}, </span>) : null } </div>

                    </div>

                    <div className="product-separator" />

                    <div className="product-tab-container">

                      <div className="description-container"> {shortData(data.description, 500)} </div>

                      <ViewAttribute MainProps={data} />

                    </div>

                  </section>

                  <section className="section-two">

                    <ViewUser MainProps={data} />

                    <ViewMap MainProps={data.company} />

                  </section>

                </div>

              </div>
            )
            : null }

        </div>

      </div>

    );
  }
}

ViewProducts.defaultProps = {
  loadedData: null,
  data: {},
  match: {},
  viewCurrentProduct: PropTypes.func,
};

ViewProducts.propTypes = {
  loadedData: PropTypes.bool,
  data: PropTypes.shape(),
  match: PropTypes.shape(),
  viewCurrentProduct: PropTypes.func,
};

const mapStateToProps = ({ viewProductsInitialState, }) => (
  {
    loadedData: viewProductsInitialState.loading,
    data: viewProductsInitialState.data,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    viewCurrentProduct: (productId) => {
      dispatch(viewProduct(productId));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);
