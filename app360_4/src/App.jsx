import React, { useEffect, useRef, useState } from "react";

function App() {
  const [textVal, setTextVal] = useState("");
  const renderCount = useRef(0);

  // Update render count on every re-render
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <label>
        Enter Name:{" "}
        <input
          type="text"
          value={textVal}
          onChange={(e) => setTextVal(e.target.value)}
        />
      </label>

      <h1>My Render Count: {renderCount.current}</h1>
    </div>
  );
}

export default App;
