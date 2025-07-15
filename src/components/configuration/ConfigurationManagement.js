import React, { useState } from 'react';
import Layout from '../common/Layout';
import TabNavigation from './TabNavigation';
import DefineType from './DefineType';

const ConfigurationManagement = () => {
  const [activeTab, setActiveTab] = useState('type');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'type':
        return <DefineType />;
      case 'emitter':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Define Carbon Emitter</h2>
            <p className="text-gray-600">Define Carbon Emitter content will go here</p>
          </div>
        );
      case 'category':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Define Category</h2>
            <p className="text-gray-600">Define Category content will go here</p>
          </div>
        );
      case 'scope':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Define Scope</h2>
            <p className="text-gray-600">Define Scope content will go here</p>
          </div>
        );
      default:
        return <DefineType />;
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Configuration Management</h1>
        
        <TabNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        {renderTabContent()}
      </div>
    </Layout>
  );
};

export default ConfigurationManagement;