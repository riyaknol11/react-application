import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const scopesData = [
  { name: "Scope 1", description: "Direct emissions from owned or controlled sources", active: true },
  { name: "Scope 2", description: "Indirect emissions from the generation of purchased electricity, steam, heating and cooling", active: false },
  { name: "Scope 3", description: "All other indirect emissions that occur in a company’s value chain", active: true },
];

export default function DefinedScope() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [scopes, setScopes] = useState(scopesData);

  const handleDelete = () => {
    if (selectedIndex === null) return;
    const updated = scopes.filter((_, idx) => idx !== selectedIndex);
    setScopes(updated);
    setSelectedIndex(null);
  };

  return (
    <div className="p-6 bg-blue-600 text-white rounded-lg max-w-5l mx-auto">
      <h2 className="text-xl font-semibold mb-4">Defined Scope</h2>
      <div className="bg-white p-4 rounded-md text-black overflow-auto max-h-80">
        <table className="w-full text-center border-collapse">
          <thead className="bg-blue-200">
            <tr>
              <th className="p-2 border">Scope</th>
              <th className="p-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {scopes.map((scope, idx) => (
              <tr key={idx} className="hover:bg-blue-50">
                <td className="border p-2">{scope.name}</td>
                <td className="border p-2">{scope.description}</td>
                <td className="border p-2">
                  <input
                    type="radio"
                    name="selectItem"
                    checked={selectedIndex === idx}
                    onChange={() => setSelectedIndex(idx)}
                  />
                </td>
                <td className="border p-2">
                  <input type="checkbox" checked={scope.active} readOnly />
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
