import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import { AuthProvider } from "./context/AuthContext";

import "./styles/custom.css";
import "semantic-ui-css/semantic.min.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
console.log("React is running");

