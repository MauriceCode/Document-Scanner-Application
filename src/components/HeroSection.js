import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/highway.mp4" autoPlay loop muted></video>
      <h1>READY TO SCAN?</h1>
      <p>Scan your shipping documents</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Scan Now!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
