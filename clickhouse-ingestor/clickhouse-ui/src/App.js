import React, { useState } from "react";
import SourceSelector from "./components/SourceSelector";
import ClickHouseForm from "./components/ClickHouseForm";
import FlatFileForm from "./components/FlatFileForm";
import "./App.css";

function App() {
  const [selection, setSelection] = useState({ source: "", target: "" });
  const [connectionDetails, setConnectionDetails] = useState(null);

  const handleSelectionChange = (source, target) => {
    setSelection({ source, target });
  };

  const handleClickHouseConnect = (details) => {
    setConnectionDetails(details);
    console.log("ClickHouse Connection Details:", details);
  };

  const handleFlatFileConnect = (details) => {
    setConnectionDetails(details);
    console.log("Flat File Connection Details:", details);
  };

  return (
    <div className="container">
      <h1>ClickHouse Ingestion Tool</h1>
      <SourceSelector onSelectionChange={handleSelectionChange} />
      {selection.source === "clickhouse" && (
        <ClickHouseForm onConnect={handleClickHouseConnect} />
      )}
      {selection.source === "flatfile" && (
        <FlatFileForm onConnect={handleFlatFileConnect} />
      )}
    </div>
  );
}

export default App;
