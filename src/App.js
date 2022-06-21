import React, { useEffect } from "react";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
