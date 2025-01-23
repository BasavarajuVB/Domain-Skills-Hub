import React, { useState } from "react";
import "../styles/Domain.css";

const Domain = () => {
  const [options] = useState(["FullStack", "DataScience", "DevOps", "AI", "Cloud"]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [availableOptions, setAvailableOptions] = useState(options);

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    if (selected && !selectedOptions.includes(selected)) {
      setSelectedOptions((prev) => [...prev, selected]);
      setAvailableOptions((prev) => prev.filter((option) => option !== selected));
      alert(`${selected} added!`);
    }
  };

  const handleRemove = (optionToRemove) => {
    setSelectedOptions((prev) => prev.filter((option) => option !== optionToRemove));
    setAvailableOptions((prev) => [...prev, optionToRemove]);
    alert(`${optionToRemove} removed!`);
  };

  return (
    <div className="domain-container">
      <h2>Select Domain Here</h2>
      <div className="selected-options">
        {selectedOptions.map((option, index) => (
          <div key={index} className="selected-item">
            {option}
            <button className="remove-button" onClick={() => handleRemove(option)}>
              x
            </button>
          </div>
        ))}
      </div>
      <div className="dropdown-container">
        <select 
          className="domain-select" 
          onChange={handleSelectChange} 
          value=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {availableOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Domain;

