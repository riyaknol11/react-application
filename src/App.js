import React from 'react';
import ConfigurationManagement from './components/configuration/ConfigurationManagement';
import CategoryManager from './components/configuration/CategoryManager';

function App() {
  return (
    <div className="App">
      <ConfigurationManagement />
      <CategoryManager />
    </div>
  );
}

export default App;