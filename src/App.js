import React, { useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("");
  const [error, setError] = useState("");

  const fetchFact = async () => {
    try {
      setError("");
      const response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) {
        throw new Error("Failed to fetch fact");
      }
      const data = await response.json();
      setFact(data.fact);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>🐱 Cat Fact Generator</h1>
      <button onClick={fetchFact}>Get a Cat Fact</button>
      {fact && <p>{fact}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default App;
