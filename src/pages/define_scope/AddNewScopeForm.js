import { useState } from "react";
import { Plus, RotateCcw } from "lucide-react";
import '../../styles/Common.css';

const AddNewScopeForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setName("");
    setDescription("");
  };

  return (
    <div className="container">
      <h2 className="heading">Add New Scope</h2>
      <div className="formWrapper">
        <div className="inputGroup">
          <input
            className="input"
            placeholder="<Scope Name>"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows="3"
            className="textarea"
            placeholder="<Scope Description>"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="buttonGroup">
          <button
            className="saveButton"
            onClick={() => alert("Scope Added!")}
          >
            <Plus size={16} /> Save
          </button>
          <button
            className="resetButton"
            onClick={resetForm}
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewScopeForm;