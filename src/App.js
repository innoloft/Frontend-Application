import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeContextProvider } from './Theme';
import { useStore } from './Hooks';
import Routes from './Routes';

import './App.css';

function App() {
  const store = useStore();
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
