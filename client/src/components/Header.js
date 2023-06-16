import React from "react";
import NavBar from "./NavBar";
// import AnimatedLogo from "./Logo";
import { useLocation } from "react-router-dom";

const styles = {
  heading: {
    background: '#138086',
    lineHeight: 1.0,
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: "Lucinda",
    fontSize: '2.0rem',
  },
}

function Header() {
  const { pathname } = useLocation();
  if (pathname === "/firebase") return null;

  return (
    <header className="app-header" style={styles.heading}>
      <h1 style={styles.title}>Ready, Pet, Go!</h1>
      {/* <AnimatedLogo /> */}
      <NavBar />
    </header>

  )
}

export default Header;