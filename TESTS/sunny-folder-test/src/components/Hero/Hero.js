import React from "react";
import BannerImg from '../../images/heroOption1.png';
import { Container } from "@mui/material";
import './style.css'


function Hero() {
  return (
    <Container maxWidth='100%' className="hero-container">
      <img src={BannerImg} alt='pet-banner' className="hero-image" />
    </Container>
  )
}

export default Hero;