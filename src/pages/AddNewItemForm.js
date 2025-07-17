import React, { useState } from "react";
import {Plus, RotateCcw } from "lucide-react";
import Dropdown from '../components/ui/Dropdown';

const scopes = ["Scope 1", "Scope 2", "Scope 3"];
const categories = ["Category 1", "Category 2", "Category 3"];
const types = ["Solid", "Liquid", "Gas", "Electricity"];

const AddNewItemForm = () => {
  const [name, setName] = useState("");
  const [scope, setScope] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const resetForm = () => {
    setName("");
    setScope("");
    setCategory("");
    setType("");
  };

  return (
    <div className="p-6 bg-blue-600 text-white rounded-lg max-w-5l mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
      <div className="bg-white p-4 rounded-md text-black flex flex-wrap items-start gap-6">
        <input
          className="border p-2 rounded w-56"
          placeholder="&lt;Name of Item&gt;"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Dropdown label="Select Scope" options={scopes} selected={scope} onChange={setScope} />
        <Dropdown label="Select Category" options={categories} selected={category} onChange={setCategory} />
        <Dropdown label="Select Type" options={types} selected={type} onChange={setType} />


        <div className="flex flex-col gap-2 ml-auto">
          <button
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => alert("Item Added!")}
          >
            <Plus size={16} /> Add
          </button>
          <button
            className="flex items-center justify-center gap-2 bg-blue-300 hover:bg-blue-400 text-white py-2 px-4 rounded"
            onClick={resetForm}
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewItemForm;