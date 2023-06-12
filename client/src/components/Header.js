import React from "react";
import NavBar from "./NavBar";
// import AnimatedLogo from "./Logo";

const styles = {
  heading: {
    background: '#aed8e6',
    lineHeight: 1.0,
    color: '#656565',
    padding: '0 20px',
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
  return (
    <header className="app-header" style={styles.heading}>
      <h1 style={styles.title}>Ready, Pet, Go!</h1>
      {/* <AnimatedLogo /> */}
      <NavBar />
    </header>

  )
}

export default Header;