
import React, { useState, useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "../styles/Skills.css";

function Skills() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "SQL",
    "MongoDB",
    "TypeScript",
    "PHP",
    "Ruby",
    "Swift",
    "Go",
  ]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddMore, setShowAddMore] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleCheckboxChange = (e) => {
    const skill = e.target.value;
    if (e.target.checked) {
      setSelectedSkills([...selectedSkills, skill]);
       toast.success(`${skill} added to selected skills!`, {
        onClose: () => console.log(`Toast for "${skill}" closed`),
      });
    } else {
      setSelectedSkills(selectedSkills.filter((item) => item !== skill));
      toast.warn(`${skill} removed from selected skills!`, {
        onClose: () => console.log(`Toast for removal of "${skill}" closed`),
      });
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToRemove));
    toast.warn(`${skillToRemove} removed from selected skills!`, {
      onClose: () => console.log(`Toast for "${skillToRemove}" closed`),
    });
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAddNewSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill.trim()]);
      toast.success(`${newSkill} added to skills!`, {
        onClose: () => console.log(`Toast for "${newSkill}" added closed`),
      });
      setNewSkill("");
    } else {
      toast.error("Invalid or duplicate skill!", {
        onClose: () => console.log("Toast for invalid skill closed"),
      });
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddNewRowClick = () => {
    setShowDropdown(true);
    setShowAddMore(true);
  };

  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="skills-container">
    <h2>Select Skills Here</h2>
      <ToastContainer />
      <div className="skills-selected-container">
        {selectedSkills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill}
            <button
              className="remove-skill-button"
              onClick={() => handleRemoveSkill(skill)}
            >
              x
            </button>
          </div>
        ))}
      </div>

      <div className="dropdown-container">
        <div className="dropdown-trigger" onClick={handleDropdownClick}>
          Select Skills
        </div>

        {showDropdown && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search skills..."
              className="search-input"
            />
            {filteredSkills.map((skill, index) => (
              <label className="checkbox-label" key={index}>
                <input
                  type="checkbox"
                  value={skill}
                  onChange={handleCheckboxChange}
                  checked={selectedSkills.includes(skill)}
                />
                <span>{skill}</span>
              </label>
            ))}
            {showAddMore && (
              <div className="add-skill-container">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add new skill"
                  className="add-skill-input"
                />
                <button
                  className="add-skill-button"
                  onClick={handleAddNewSkill}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        )}
      </div>
     
    </div>
    <button className="add-row-button" onClick={handleAddNewRowClick}>
        +   Add New Row
      </button>
      </>
  );
}

export default Skills;
