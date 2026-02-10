import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/common/Footer";
import Router from "./router";
import Header from "./components/common/Header";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
