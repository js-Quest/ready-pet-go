import React from "react";
import NavBar from "./NavBar";
// import AnimatedLogo from "./Logo";
import { useLocation } from "react-router-dom";
import LogoSmall from "../images/logoSmall.png";
import Box from '@mui/material/Box';

const styles = {
  heading: {
    background: '#138086',
    width: '100vw',
    color: 'white',
    padding: '1.2em 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto'
  },
  title: {
    fontFamily: "lucinda",
    fontSize: '2.2em',
    justifyContent: 'center',
    paddingLeft: '1em'
    // marginTop
  },
}

function Header() {
  const { pathname } = useLocation();
  if (pathname === "/firebase") return null;

  return (
    <header className="app-header" style={styles.heading}>
      <Box sx={{
        display: 'flex',
        direction: 'row',
        marginLeft: '2em',
        height: 'auto'
      }}>
      <img src={LogoSmall} alt='LogoSmall' />
      <h1 style={styles.title}>Ready, Pet, Go!</h1>
      </Box>
      {/* <AnimatedLogo /> */}
      <NavBar />
    </header>

  )
}

export default Header;