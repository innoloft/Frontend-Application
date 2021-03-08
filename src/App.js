import React from "react";
import {
  NavigationContext,
  useNavigationContextValue
} from "./hooks/navigation";
import { BrowserRouter as Router } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Api_endpoint, APP_ID } from "./config";
import { CONFIG_ACTIONS } from "./redux/actions";
import { ThemeProvider } from "react-jss";
import { Defaultlayout } from "./layouts";
import { useSelector } from "react-redux";
const App = () => {
  const navigationContextValue = useNavigationContextValue();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.appConfig);
  const [theme, SetTheme] = React.useState({
    themeColor: "",
    font: {
      family: "Open Sans, sans-serif"
    },
    header: {
      height: APP_ID === "2" ? 82 : 60
    },
    logo: {
      width: APP_ID === "2" ? 70 : 170
    },
    colors: {
      dull: "#828a97",
      heading: "#445063"
    },
    gutter: 15,
    navigation: {
      width: 250,
      color: "#ffffff"
    }
  });

  const getAppConfig = React.useCallback(
    async () => {
      try {
        dispatch({
          type: CONFIG_ACTIONS.LOADING,
          payload: true
        });
        const appConfigData = await fetch(
          `${Api_endpoint}/configuration/${APP_ID}/`
        );
        if (appConfigData) {
          const _appConfigData = await appConfigData.json();
          dispatch({
            type: CONFIG_ACTIONS.CONFIGURATION_LOADED,
            payload: _appConfigData
          });
          SetTheme({
            ...theme,
            themeColor: _appConfigData.mainColor
          });
        }
      } catch (error) {
        dispatch({
          type: CONFIG_ACTIONS.LOADING,
          payload: false
        });
        throw error;
      }
    },
    [dispatch]
  );

  React.useEffect(
    () => {
      getAppConfig();
    },
    [getAppConfig]
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavigationContext.Provider value={navigationContextValue}>
          <Router>
            {loading && <span>Loading</span>}
            {!loading && <Defaultlayout />}
          </Router>
        </NavigationContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
