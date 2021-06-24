import React from "react";
import "./styles/AppStyles.scss";
import "./styles/global.scss";
import Header from "./components/Dashboard/Header";
import Sidebar from "./components/Dashboard/Sidebar";
import Main from "./components/Dashboard/Main";
import News from "./components/Dashboard/News";

function App() {
  return (
    <>
      <Header />

      <main className="dashboard">
        <div className="dashboard__container">
          <Sidebar />
          <div className="dashboard__content-wrapper">
            <Main />
            <News />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
