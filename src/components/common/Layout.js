import React from 'react';
import NavigationBar from './NavigationBar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;