import React from 'react';

const NavigationBar = () => {
  return (
    <div className="h-16 bg-blue-600 shadow-md">
      <div className="flex items-center justify-between h-full px-6">
        <div className="text-white font-semibold">Configuration Management</div>
        {/* <div className="text-white text-sm">Navigation will go here</div> */}
      </div>
    </div>
  );
};

export default NavigationBar;