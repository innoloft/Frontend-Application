import React, { Fragment, useEffect, useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './Main.css';
import Home from './Home/Home'
import Product from './Product/Product'
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from '../../component/Button/Button';
import { getConfig } from './configSplice';

function Main() {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config.data);
  const status = useSelector(state => state.config.status);
  const isMobile = useMediaQuery({
    query: '(max-width: 900px)'
  });
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getConfig())
    }
  }, [status, dispatch]);

  return (
    <Fragment>
      <div className="header" style={{borderBottom: `5px solid ${config.mainColor}`}}>
        <div style={{float: 'left'}}>
          <img src={config.logo} alt="Innoloft Logo" style={{verticalAlign: 'middle', height: '25px'}}></img>
        </div>
        {isMobile && (
          <div className="dropdown" style={{float: 'right'}}>
            <Button className="dropdown-button" onClick={()=>setShowDropdown(!showDropdown)} style={{backgroundColor: config.mainColor}}>Menu&nbsp;<FontAwesomeIcon icon={faCaretDown} /></Button>
            {showDropdown && (
              <div className="dropdown-content" onClick={()=>setShowDropdown(false)} >
                <NavLink to="/" activeStyle={{backgroundColor: '#e4b302', color: '#ffffff'}} exact>Home</NavLink>
                <NavLink to="/product" activeStyle={{backgroundColor: '#e4b302', color: '#ffffff'}} exact>Product</NavLink>
              </div>
            )}
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="navigation">
          <NavLink to="/" activeStyle={{color: '#666666'}} exact>Home</NavLink>
          <NavLink to="/product" activeStyle={{color: '#666666'}} exact>Product</NavLink>
        </div>
      )}
      <div className="content" style={{margin: isMobile ? '60px 5px 50px 5px' : '60px 0 50px 18%'}}>
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route strict path="/product" component={Product} />
        </Switch>
      </div>
      <div className="footer" style={{backgroundColor: config.mainColor, left: isMobile ? 0 : '18%'}}>
        Rachel - Copyright © 2021
      </div>
    </Fragment>
  );
}

export default Main;
