/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { viewTrls } from '../../actions';
import { variables } from '../../helpers';

const successTimeOut = variables.SUCCESS_TIMEOUT;
class ViewAttribute extends Component {
  constructor() {
    super();
    this.state = {
      trl: '',
      category: '',
      businessModel: '',

      data: [],
      dataLoaded: false
    };
  }

  componentDidMount() {
    const { viewCurrentTrls } = this.props;
    viewCurrentTrls();
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (props.loadedData === true) {
      setTimeout(() => {
        this.setState({ data: [...props.data.data], dataLoaded: props.loadedData });
      }, successTimeOut);
    }

    if (props.loadedData === false) {
      const { data } = this.state;
      setTimeout(() => {
        this.setState({ data: [...data] });
      }, successTimeOut);
    }
  }

  handleChange(key) {
    key.preventDefault();
    this.setState({ [key.target.id]: key.target.value });
  }

  render() {
    const { dataLoaded, data, category, businessModel, trl } = this.state;
    return (
        <form className="attribute-container">
            <div>
                <input type="text" id="category" value={category} placeholder="Category" onChange={(id) => this.handleChange(id)} />
                <input type="text" id="businessModel" value={businessModel} placeholder="Business Model" onChange={(id) => this.handleChange(id)} />
                <select id="trl" value={trl} onChange={(id) => this.handleChange(id)}>

                <option value=""> Select </option>
                    {dataLoaded === true && data.length > 0 ? data.map((element) => (<option value={element.name} key={element.id}> {element.name} </option>)) : null}
                </select>

                <button type="button"> PROCCED </button>
            </div>

        </form>

    );
  }
}

ViewAttribute.defaultProps = {
  loadedData: null,
  data: {},
  viewCurrentTrls: PropTypes.func,
};

ViewAttribute.propTypes = {
  loadedData: PropTypes.bool,
  data: PropTypes.shape(),
  viewCurrentTrls: PropTypes.func,
};

const mapStateToProps = ({ viewTrlsInitialState, }) => (
  {
    loadedData: viewTrlsInitialState.loading,
    data: viewTrlsInitialState.data,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    viewCurrentTrls: () => {
      dispatch(viewTrls());
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(ViewAttribute);
