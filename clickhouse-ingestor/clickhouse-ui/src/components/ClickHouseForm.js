import React, { useState } from "react";
import "../styles/ClickHouseForm.css";

const ClickHouseForm = ({ onConnect }) => {
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");
  const [database, setDatabase] = useState("");
  const [user, setUser] = useState("");
  const [jwtToken, setJwtToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onConnect({ host, port, database, user, jwtToken });
  };

  return (
    <div className="form-container">
      <h2>ClickHouse Connection</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Host:</label>
          <input
            type="text"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label>Port:</label>
          <input
            type="number"
            value={port}
            onChange={(e) => setPort(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label>Database:</label>
          <input
            type="text"
            value={database}
            onChange={(e) => setDatabase(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label>User:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label>JWT Token:</label>
          <input
            type="text"
            value={jwtToken}
            onChange={(e) => setJwtToken(e.target.value)}
            required
          />
        </div>
        <button type="submit">Connect</button>
      </form>
    </div>
  );
};

export default ClickHouseForm;
