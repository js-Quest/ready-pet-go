import React from "react";
import { useState, useEffect } from "react";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const styles = {
  nav: {
    fontFamily: 'times',
    margin: '20px',
    fontSize: '20px',
    padding: '10px'
  },
}


function Navigation() 
// referenced Stack Overflow for the code to set window states and effects https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size
{
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {/* rendering full nav list for large screens */}
      {isDesktop ?
        <nav>
          <a href="#" style={styles.nav}>Home</a>
          <a href="#" style={styles.nav}>Profile</a>
          <a href="#" style={styles.nav}>Products</a>
          <a href="#" style={styles.nav}><BsFillChatTextFill /></a>
          <a href="#" style={styles.nav}><FaShoppingCart /></a></nav>
        : 
        // rendering dropdown bars for small screens 
        <nav><a href="#" style={styles.nav}><FaBars /></a></nav>
      }
      </div>
  )
}

export default Navigation;