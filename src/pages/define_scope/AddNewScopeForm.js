import React, { useState } from "react";
import {Plus, RotateCcw } from "lucide-react";

const scopes = ["Scope 1", "Scope 2", "Scope 3"];
const categories = ["Category 1", "Category 2", "Category 3"];
const types = ["Solid", "Liquid", "Gas", "Electricity"];

const AddNewScopeForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setName("");
    setDescription("");
  };

  return (
    <div className="p-6 bg-blue-600 text-white rounded-lg max-w-5l mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add New Scope</h2>
      <div className="bg-white p-4 rounded-md text-black flex flex-row items-start gap-20">
        <div className="flex flex-col gap-6 ml-56 w-96">
          <input
            className="border p-2 rounded w-full"
            placeholder="<Scope Name>"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows="3"
            className="border p-2 rounded w-full"
            placeholder="<Scope Description>"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mr-56">
          <button
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => alert("Scope Added!")}
          >
            <Plus size={16} /> Save
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

export default AddNewScopeForm;