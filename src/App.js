import './App.css';
//import {useSelector, useDispatch} from 'react-redux';
//import {increment} from './actions';
//import {decrement} from './actions';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './elements/navbar';
import Header from './elements/header';
import Dashboard from './elements/dashboard';

function App() {
  //const counter = useSelector(state => state.counter);
  //const isLogged = useSelector(state => state.isLogged);
  //const dispatch = useDispatch();

  return (
    //<div className="App">
    //  <h1>Counter {counter}</h1>
    //  <button onClick={() => dispatch(increment())}>+</button>
    //  <button onClick={() => dispatch(decrement())}>-</button>
    //  <h1>{isLogged ? 'sdaofj34ipasf2' : 'Please log in to view content'}</h1>
    //</div>

    <Router>
      <div className="App">
        <Header />
        <div id="main-wrapper">
          <NavBar />
          <Dashboard />
        </div>
      </div>
    </Router>
  );
}

export default App;
