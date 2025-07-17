
import React, { useState, useEffect } from "react";
import { Check, Edit, Trash } from "lucide-react";

const CategoryManager = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [selectedScope, setSelectedScope] = useState("Scope 1");
  const [categories, setCategories] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [errors, setErrors] = useState({ categoryName: "", categoryDescription: "" });

  const scopes = ["Scope 1", "Scope 2", "Scope 3"]; // Immutable array

  useEffect(() => {
    console.log("Selected Scope updated to:", selectedScope); // Debug re-renders
  }, [selectedScope]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { categoryName: "", categoryDescription: "" };

    if (!categoryName.trim()) {
      newErrors.categoryName = "Category Name is required";
      isValid = false;
    }
    if (!categoryDescription.trim()) {
      newErrors.categoryDescription = "Category Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      const newCategory = {
        name: categoryName,
        description: categoryDescription,
        scope: selectedScope,
      };
      setCategories([...categories, newCategory]);
      // Do not reset selectedScope here unless intended
    }
  };

  const resetForm = () => {
    setCategoryName("");
    setCategoryDescription("");
    setSelectedScope("Scope 1"); // Reset to default, but this is intentional
    setErrors({ categoryName: "", categoryDescription: "" });
    setSelectedRow(null); // Ensure row selection is cleared
  };

  const handleDelete = () => {
    if (selectedRow !== null) {
      const newCategories = categories.filter((_, index) => index !== selectedRow);
      setCategories(newCategories);
      setSelectedRow(null);
    }
  };

  const handleEdit = () => {
    if (selectedRow !== null) {
      const cat = categories[selectedRow];
      setCategoryName(cat.name);
      setCategoryDescription(cat.description);
      setSelectedScope(cat.scope); // Update scope based on selected row
      setErrors({ categoryName: "", categoryDescription: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-blue-700 text-white p-2 mb-4 rounded-t-lg">
        <h1 className="text-xl font-semibold">Configuration Management</h1>
       
      </div>

      <div className="flex gap-4">
        <div className="w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4 bg-blue-600 text-white p-2 rounded-t">
            Add New Category
          </h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Category Name"
              className={`w-full p-2 border rounded ${
                errors.categoryName ? "border-red-500" : "border-gray-300"
              }`}
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
                if (e.target.value.trim()) {
                  setErrors((prev) => ({ ...prev, categoryName: "" }));
                }
              }}
            />
            {errors.categoryName && (
              <p className="text-red-500 text-sm mt-1">{errors.categoryName}</p>
            )}
          </div>
          <div className="mb-2">
            <textarea
              placeholder="Category Description"
              className={`w-full p-2 border rounded ${
                errors.categoryDescription ? "border-red-500" : "border-gray-300"
              } h-24`}
              value={categoryDescription}
              onChange={(e) => {
                setCategoryDescription(e.target.value);
                if (e.target.value.trim()) {
                  setErrors((prev) => ({ ...prev, categoryDescription: "" }));
                }
              }}
            />
            {errors.categoryDescription && (
              <p className="text-red-500 text-sm mt-1">{errors.categoryDescription}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Select Scope:</label>
            {scopes.map((scope) => (
              <div key={scope} className="flex items-center mb-2 cursor-pointer">
                <input
                  type="radio"
                  name="scope"
                  value={scope}
                  checked={selectedScope === scope}
                  onChange={(e) => {
                    console.log("Changing scope to:", e.target.value);
                    setSelectedScope(e.target.value);
                  }}
                  className="mr-2"
                />
                <span className={selectedScope === scope ? "font-bold text-blue-600" : ""}>{scope}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSave}
              disabled={!!errors.categoryName || !!errors.categoryDescription}
            >
              Save
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4 bg-blue-600 text-white p-2 rounded-t">
            Defined Category
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-200">
                  <th className="border border-gray-300 p-2 text-left">Category</th>
                  <th className="border border-gray-300 p-2 text-left">Scope</th>
                  <th className="border border-gray-300 p-2 text-center">Select</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, index) => (
                  <tr
                    key={index}
                    className={selectedRow === index ? "bg-blue-50" : ""}
                  >
                    <td className="border border-gray-300 p-2">{cat.name}</td>
                    <td className="border border-gray-300 p-2">{cat.scope}</td>
                    <td className="border border-gray-300 p-2 text-center">
                      <input
                        type="radio"
                        checked={selectedRow === index}
                        onChange={() => setSelectedRow(index)}
                        className="mr-2"
                      />
                      {selectedRow === index && (
                        <Check className="w-5 h-5 text-green-500 inline" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
              onClick={handleEdit}
              disabled={selectedRow === null}
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center"
              onClick={handleDelete}
              disabled={selectedRow === null}
            >
              <Trash className="w-4 h-4 mr-2" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManager;