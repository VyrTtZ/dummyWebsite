import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is a dummy page to verify your React setup is working.</p>
      <button
        onClick={() => alert("Button clicked! 🎉")}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "1rem"
        }}
      >
        Click me
      </button>
    </div>
  );
}
