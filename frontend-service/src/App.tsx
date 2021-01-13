import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { useAppStyles } from './styles/app-styles';

function App() {

  const style = useAppStyles();

  return (
    <div className={style.appRoot}>
      <Navbar/>
      <Sidebar/>
      <PageContent/>
    </div>
  );
}

export default App;
