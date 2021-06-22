import React from 'react';
import './App.css';
import UserAccountView from './components/views/UserAccountView';
import Header from './components/partials/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <UserAccountView />
    </div>
  );
}

export default App;
