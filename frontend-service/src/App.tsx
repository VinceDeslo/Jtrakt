import React from 'react';
import { Button } from '@material-ui/core';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, NavLink, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Button>content</Button>
    </div>
  );
}

export default App;
