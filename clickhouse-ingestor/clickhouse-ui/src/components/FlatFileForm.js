import React, { useState } from "react";
import "../styles/FlatFileForm.css";

const FlatFileForm = ({ onConnect }) => {
  const [fileName, setFileName] = useState("");
  const [delimiter, setDelimiter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onConnect({ fileName, delimiter });
  };

  return (
    <div className="form-container">
      <h2>Flat File Connection</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>File Name:</label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label>Delimiter:</label>
          <input
            type="text"
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value)}
            required
          />
        </div>
        <button type="submit">Connect</button>
      </form>
    </div>
  );
};

export default FlatFileForm;
