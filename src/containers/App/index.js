import { connect } from "react-redux";
import { compose } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import { injectReducer, injectSaga } from "redux-injectors";
import reducer from "./reducer";
import saga from "./saga";
import Header from "components/Header";
import Home from "containers/Home";
import Product from "containers/Product";
import { AppWrapper } from "./StyledComponents";
import NavBar from "components/Navbar";
import RightSection from "containers/RightSection";
import { useEffect } from "react";
import { getAllInfo } from "containers/Product/action";

const App = (props) => {
  const { user, company } = props;

  useEffect(() => {
    getAllInfo();
  }, []);
  return (
    <AppWrapper>
      <Header />
      <section className="app_all_section">
        <div className="left_section">
          <NavBar />
        </div>
        <div className="middle_section">
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/product"} component={Product} />
            <Route exact path={"*"} component={Home} />
          </Switch>
        </div>
        {user && company && (
          <div className="right_section">
            <RightSection user={user} company={company} />
          </div>
        )}
      </section>
    </AppWrapper>
  );
};

function mapStateToProps(state) {
  // all the props from redux
  return {
    user: state.app.user,
    company: state.app.company,
  };
}

function mapDispatchToProps(dispatch) {
  // connect all the function for disipacting action
  return { getAllInfo: (payload) => dispatch(getAllInfo(payload)) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  injectReducer({ key: "app", reducer }),
  injectSaga({ key: "app", saga }),
  withConnect,
  withRouter
)(App);
