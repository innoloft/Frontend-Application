import ProductDescription from "components/ProductDescription";
import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { injectReducer, injectSaga } from "redux-injectors";
import { getAllInfo, updateInfo } from "./action";
import reducer from "./reducer";
import saga from "./saga";

const Product = (props) => {
  const { getAllInfo } = props;

  useEffect(() => {
    getAllInfo();
  }, []);
  return <> {props.tabInfo ? <ProductDescription {...props} /> : ""}</>;
};

function mapStateToProps(state) {
  // all the props from redux
  return {
    user: state.app.user,
    picture: state.app.picture,
    tabInfo: state.app.tabInfo,
    productMainInfo: state.app.productMainInfo,
    company: state.app.company,
  };
}

function mapDispatchToProps(dispatch) {
  // connect all the function for disipacting action
  return {
    getAllInfo: (payload) => dispatch(getAllInfo(payload)),
    updateInfo: (payload) => dispatch(updateInfo(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  injectReducer({ key: "app", reducer }),
  injectSaga({ key: "app", saga }),
  withConnect,
  withRouter
)(Product);
