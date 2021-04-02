import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Product from "./Pages/Product";

import Main from "./Pages/Home";
import Navbar from "./components/Navbar";

 const App = ({ fetchProducts }) => {
   return (
     <BrowserRouter>
       <div className="App">
         <Navbar />
         <Route exact path="/" component={Main} />
         <Route path="/product" component={Product} />
       </div>
     </BrowserRouter>
   );
 };


export default App;
