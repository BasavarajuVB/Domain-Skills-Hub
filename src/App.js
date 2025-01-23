import React from "react";
import Domain from "./components/Domain";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="domain-section">
        <Domain />
      </div>
      <div className="skills-section">
        <Skills />
      </div>
    </div>
  );
}

export default App;
