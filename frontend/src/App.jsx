import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/common/Footer";
import Router from "./router";
import Header from "./components/common/Header";

export default function App() {
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = async () => {
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();
  if (data.isLoggedIn) {
    setIsLoggedIn(true);
  }
  };


  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
