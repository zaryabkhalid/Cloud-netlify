import React from "react";
import About from "../components/About";
import AllInOne from "../components/AllInOne";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Support from "../components/Support";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
    </>
  );
};

export default Home;
