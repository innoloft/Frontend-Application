import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Product from "./component/Product/Product";
import { createGlobalStyle } from "styled-components";
import { NavContent } from "./component/Navigation/Navigation";
import { useEffect, useState } from "react";
const GlobalStyle = createGlobalStyle`
 html, body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  
`;
function App() {
  const [width, setwidth] = useState();
  useEffect(() => {
    function handleResize() {
      setwidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <div className="app">
        <Header />
        <div className="content-container">
          {width > 768 ? <NavContent /> : null}
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/product" component={Product} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
