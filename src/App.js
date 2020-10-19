import React from 'react'
import './App.css'

// Importing Components
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
