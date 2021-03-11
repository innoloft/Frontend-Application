import React from 'react';
import './App.css';
import Asid from './comps/Asid';
import Tab from './comps/Tab';
import Header from './comps/Header'

function App() {

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Asid />
        <Tab />
      </div>

    </div>
  );
}

export default App;


{/*
  import Aside from './components/Aside';
import Header from './components/Header';
import Info from './components/Info';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';
import { useStateValue } from './StateProvider';
import Tab1 from './components/Tab1';

  
  <Router>
        {/* {!user ? (
            <Login />
            ) : ( */}
      //         <>
      //         <Header />
      //         <div className="body">
      //           <Aside />
      //           <Switch>
      //             {/* <Route path="/">
      //               <Tab1 />
      //             </Route> */}
      //             <Route path="/room/:roomId">
      //               <Info />
      //             </Route>
      //           </Switch>
      //         </div>
      //         </>
      //       {/* ) */
      //     }
        
      // </Router> */}