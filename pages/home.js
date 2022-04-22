import React from "react";
import { Country } from "../components/home";
import Slider from "../components/home/slide";
import Footer from "../navbar/Footer";
import { Navbar } from "../navbar/navbar";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Slider />
      <Country />
      <Footer />
    </div>
  );
};
