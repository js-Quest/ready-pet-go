import React from "react";
import HeroImg from '../../images/hero.png';
// import { Container } from "@mui/material";
import './style.css'


function Hero() {
  return (
    <div maxWidth='65%' className="hero-container">
      <img src={HeroImg} alt='pet-banner' className="hero-image" />
    </div>
  )
}

export default Hero;