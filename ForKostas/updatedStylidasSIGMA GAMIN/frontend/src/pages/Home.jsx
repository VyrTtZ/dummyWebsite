import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is a dummy page to verify your React setup is working.</p>
      <button
        onClick={() => alert("Button clicked! 🎉")}
      >
        Click me
      </button>
    </div>
  );
}
