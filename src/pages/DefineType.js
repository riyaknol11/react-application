import React, { useState } from 'react';
import ListBox from '../components/ui/ListBox';
import TransferButton from '../components/ui/TransferButton';
import Button from '../components/ui/Button';
import DefineTemplate from '../components/common/DefineTemplate';

const DefineType = () => {
  const [availableItems, setAvailableItems] = useState(['Gallon', 'Quart']);
  const [assignedItems, setAssignedItems] = useState(['Litre', 'Millilitre']);
  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [selectedAssigned, setSelectedAssigned] = useState([]);

  const typeOptions = ['Solid', 'Gas', 'Electricity', 'Liquid'];
  const [selectedType, setSelectedType] = useState('');

  const moveToAssigned = () => {
    if (selectedAvailable.length > 0) {
      setAssignedItems([...assignedItems, ...selectedAvailable]);
      setAvailableItems(availableItems.filter(item => !selectedAvailable.includes(item)));
      setSelectedAvailable([]);
    }
  };

  const moveToAvailable = () => {
    if (selectedAssigned.length > 0) {
      setAvailableItems([...availableItems, ...selectedAssigned]);
      setAssignedItems(assignedItems.filter(item => !selectedAssigned.includes(item)));
      setSelectedAssigned([]);
    }
  };

  const handleSave = () => {
    console.log('Saving configuration:', {
      selectedType,
      availableItems,
      assignedItems
    });
    alert('Configuration saved successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* <h2 className="text-xl font-bold text-blue-600 mb-6">Defined Type</h2> */}
       <DefineTemplate title="Define Type"></DefineTemplate>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <ListBox
            title="Select Type"
            items={typeOptions}
            selectedItems={selectedType ? [selectedType] : []}
            onSelectionChange={(items) => setSelectedType(items[0] || '')}
          />
        </div>

        <div>
          <ListBox
            title="Available"
            items={availableItems}
            selectedItems={selectedAvailable}
            onSelectionChange={setSelectedAvailable}
          />
        </div>

        <div>
          <ListBox
            title="Assigned"
            items={assignedItems}
            selectedItems={selectedAssigned}
            onSelectionChange={setSelectedAssigned}
          />
        </div>
      </div>

      {/* Transfer Controls */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        <TransferButton
          direction="right"
          onClick={moveToAssigned}
          disabled={selectedAvailable.length === 0}
        />
        <TransferButton
          direction="left"
          onClick={moveToAvailable}
          disabled={selectedAssigned.length === 0}
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-6">
        <Button onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default DefineType;