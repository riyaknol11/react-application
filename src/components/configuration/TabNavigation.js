import React from 'react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'emitter', label: 'Define Carbon Emitter' },
    { id: 'category', label: 'Define Category' },
    { id: 'scope', label: 'Define Scope' },
    { id: 'type', label: 'Define Type' }
  ];

  return (
    <div className="flex space-x-1 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === tab.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
