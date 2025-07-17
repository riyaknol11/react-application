import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import '../../styles/Common.css';

const scopesData = [
  { name: "Scope 1", description: "Direct emissions from owned or controlled sources", active: true, selected: false },
  { name: "Scope 2", description: "Indirect emissions from the generation of purchased electricity, steam, heating and cooling", active: false, selected: false },
  { name: "Scope 3", description: "All other indirect emissions that occur in a company's value chain", active: true, selected: false },
];

export default function DefinedScope() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [scopes, setScopes] = useState(scopesData);

  const handleDelete = () => {
    const selectedForDeletion = scopes.filter((scope, idx) => scope.selected);
    if (selectedForDeletion.length === 0) return;
    
    const updated = scopes.filter((scope) => !scope.selected);
    setScopes(updated);
    setSelectedIndex(null);
  };

  const handleCheckboxChange = (idx) => {
    const updated = scopes.map((scope, index) => 
      index === idx ? { ...scope, selected: !scope.selected } : scope
    );
    setScopes(updated);
  };

  return (
    <div className="container">
      <h2 className="heading">Defined Scope</h2>
      <div className="table-container">
        <table className="scope-table">
          <thead className="table-header">
            <tr>
              <th className="table-cell">Scope</th>
              <th className="table-cell">Description</th>
            </tr>
          </thead>
          <tbody>
            {scopes.map((scope, idx) => (
              <tr key={idx} className="table-row">
                <td className="table-cell">{scope.name}</td>
                <td className="table-cell">{scope.description}</td>
                <td className="table-cell">
                  <input
                    type="radio"
                    name="selectItem"
                    checked={selectedIndex === idx}
                    onChange={() => setSelectedIndex(idx)}
                  />
                </td>
                <td className="table-cell">
                  <input 
                    type="checkbox" 
                    checked={scope.selected || false}
                    onChange={() => handleCheckboxChange(idx)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="actions">
        <button
          className="edit-btn"
          disabled={selectedIndex === null}
          onClick={() => alert("Edit functionality")}
        >
          <Pencil size={16} /> Edit
        </button>
        <button
          className="delete-btn"
          disabled={!scopes.some(scope => scope.selected)}
          onClick={handleDelete}
        >
          <Trash2 size={16} /> Delete
        </button>
      </div>
    </div>
  );
}