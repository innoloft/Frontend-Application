import React from "react";
import ReactDOM from "react-dom";
import App from "./app/index";
import { HelmetProvider } from "react-helmet-async";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
