import './App.scss';
import { Header, MainPage, Product, Navigation } from './components';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchConfig } from './actions/config';

function App() {
  const dispatch = useDispatch();

  const getConfig = useSelector((state) => state.getConfig);
  // eslint-disable-next-line
  const { error, config } = getConfig;
  console.log(config);
  useEffect(() => {
    dispatch(fetchConfig());
    console.log('hey');
  }, [dispatch]);

  const mainColor = config?.mainColor;
  const logo = config?.logo;
  const hasUserSection = config?.hasUserSection;

  return (
    <div className='App'>
      <Header logo={logo} mainColor={mainColor} />
      <div className='content'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route
            exact
            path='/product'
            component={() => <Product hasUserSection={hasUserSection} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
