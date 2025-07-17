import React from 'react';
import NavigationBar from './NavigationBar';
import '../../styles/Common.css'

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <NavigationBar />
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
