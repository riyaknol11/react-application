import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const itemsData = [
  { name: "Petrol", scope: "Scope 1", category: "Category 1", type: "Liquid", active: true },
  { name: "LPG", scope: "Scope 3", category: "Category 3", type: "Gas", active: true },
  { name: "CNG", scope: "Scope 2", category: "Category 1", type: "Gas", active: true },
  { name: "Electricity", scope: "Scope 2", category: "Category 2", type: "Electricity", active: true },
  { name: "Diesel", scope: "Scope 1", category: "Category 1", type: "Liquid", active: true },
  { name: "Coal", scope: "Scope 3", category: "Category 1", type: "Solid", active: false }
];

export default function DefinedItem() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [items, setItems] = useState(itemsData);

  const handleDelete = () => {
    if (selectedIndex === null) return;
    const updated = items.filter((_, idx) => idx !== selectedIndex);
    setItems(updated);
    setSelectedIndex(null);
  };

  return (
    <div className="p-6 bg-blue-600 text-white rounded-lg max-w-5l mx-auto">
      <h2 className="text-xl font-semibold mb-4">Defined Item</h2>
      <div className="bg-white p-4 rounded-md text-black overflow-auto max-h-80">
        <table className="w-full text-center border-collapse">
          <thead className="bg-blue-200">
            <tr>
              <th className="p-2 border">Item Name</th>
              <th className="p-2 border">Scope</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Select</th>
              <th className="p-2 border">Active</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx} className="hover:bg-blue-50">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.scope}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.type}</td>
                <td className="border p-2">
                  <input
                    type="radio"
                    name="selectItem"
                    checked={selectedIndex === idx}
                    onChange={() => setSelectedIndex(idx)}
                  />
                </td>
                <td className="border p-2">
                  <input type="checkbox" checked={item.active} readOnly />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4 justify-end mt-4">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={selectedIndex === null}
          onClick={() => alert("Edit functionality")}
        >
          <Pencil size={16} /> Edit
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          disabled={selectedIndex === null}
          onClick={handleDelete}
        >
          <Trash2 size={16} /> Delete
        </button>
      </div>
    </div>
  );
}
