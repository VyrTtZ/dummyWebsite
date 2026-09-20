import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to the Home Page</h1>
      <button
        onClick={() => alert("Button clicked! 🎉")}
      >
        Click me
      </button>
      <div class="wrapper">
        <div class="ui large image homepage">
          <img src="ibanez1.jpg" />
        </div>
        <div class="ui large image homepage"></div>
      </div>
    </div>
  );
}
