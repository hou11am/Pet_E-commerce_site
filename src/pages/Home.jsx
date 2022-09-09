import React from "react";
import Annoncements from "../components/Annoncements";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Annoncements />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
