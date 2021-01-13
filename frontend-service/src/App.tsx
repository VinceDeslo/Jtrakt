import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import { HashRouter } from 'react-router-dom';
import { useAppStyles } from './styles/app-styles';

function App() {

  const style = useAppStyles();

  return (
    <div className={style.appRoot}>
      <HashRouter>
        <Navbar/>
        <Sidebar/>
        <PageContent/>
      </HashRouter>
    </div>
  );
}

export default App;
