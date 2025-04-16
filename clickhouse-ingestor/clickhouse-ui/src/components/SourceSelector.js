import React, { useState } from "react";
import "../styles/SourceSelector.css";

const SourceSelector = ({ onSelectionChange }) => {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const handleSourceChange = (e) => {
    setSource(e.target.value);
    onSelectionChange(e.target.value, target);
  };

  const handleTargetChange = (e) => {
    setTarget(e.target.value);
    onSelectionChange(source, e.target.value);
  };

  return (
    <div className="source-selector">
      <h2>Select Source and Target</h2>
      <div className="selector-row">
        <label>Source:</label>
        <select value={source} onChange={handleSourceChange}>
          <option value="">--Select Source--</option>
          <option value="clickhouse">ClickHouse</option>
          <option value="flatfile">Flat File</option>
        </select>
      </div>
      <div className="selector-row">
        <label>Target:</label>
        <select value={target} onChange={handleTargetChange}>
          <option value="">--Select Target--</option>
          <option value="clickhouse">ClickHouse</option>
          <option value="flatfile">Flat File</option>
        </select>
      </div>
    </div>
  );
};

export default SourceSelector;
