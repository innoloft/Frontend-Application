import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import ErrorBoundary from "../../components/Pages/ErrorBoundary";
import { ProductsPage } from "../../components/Pages/Products";
import { LandingPage } from "../../components/Pages/LandingPage";
import { LoadingPage } from "../../components/Pages/LoadingPage";
// import { NotFoundPage } from "../../components/Pages/NotFoundPage";
import { setDropDownAction } from "../../store/modules/dropDown/actions";
import { RootState } from "../../store/modules/types";
import "./index.css";
import { AppHeader } from "../../components/UI/organims/AppHeader";

const AppRouter = withRouter(() => {
    const dispatch = useDispatch();

    const dropDownSelector = useSelector(
        (state: RootState) => state.dropDownReducer
    );

    const handleCloseDropDown = () => {
        if (dropDownSelector.display) {
            dispatch(setDropDownAction(true));
        }
    };

    return (
        <div className="appwide" onClick={handleCloseDropDown}>
            <AppHeader />
            <main className="appwide-container">
                <ErrorBoundary>
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            <Route path="/" exact>
                                <LandingPage />
                            </Route>
                            <Route path="/product">
                                <ProductsPage />
                            </Route>
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
});

export default AppRouter;
