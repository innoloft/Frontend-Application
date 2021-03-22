import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import GlobalStyles from "utils/styles/global-styles";
import ThemeProvider from "utils/styles/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import history from "utils/history";
import configureStore from "utils/store/configureStore";

import reportWebVitals from "./reportWebVitals";

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
