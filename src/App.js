import './App.scss';
import Header from './layout/header/Header'
import Home from './pages/Home'
import Product from './pages/product'
import SideNav from './components/sidenav'
import { Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />
      <SideNav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          
        </Switch>
      </SideNav>
    </div>
  );
}

export default App;
