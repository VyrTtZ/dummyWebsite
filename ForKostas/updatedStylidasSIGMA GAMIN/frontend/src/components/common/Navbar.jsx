import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem",
        background: "#222",
        color: "#fff",
        display: "flex",
        gap: "1rem",
        justifyContent: "center"
      }}
    >
      <Link to="/" style={{ color: "#fff" }}>Home</Link>
      <Link to="/login" style={{ color: "#fff" }}>Login</Link>
      <Link to="/register" style={{ color: "#fff" }}>Register</Link>
      <Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
    </nav>
  );
}
