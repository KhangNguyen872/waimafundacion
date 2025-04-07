import './index.scss';
import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { ThemeContext } from '../../App';

const Layout = () => {

  const theme = useContext(ThemeContext); 

  return (
    <div className={`layout ${theme}`}>
      <div id="google_translate_element"></div>
      <div className='App'>
        <div className='content'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
