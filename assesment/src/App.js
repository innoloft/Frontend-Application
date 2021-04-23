import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Layout/>
    </Router>
  );
}

export default App;
