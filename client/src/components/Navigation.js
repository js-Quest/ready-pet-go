import React from "react";
import { useState, useEffect } from "react";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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
  // adding event listener to run updateMedia on a page resize; if window is resized to smaller screen size, event listener is removed 
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  // using state to be able to show menu items on click
  const [showMenu, setShowMenu] = useState(true)
  const options = ['Home', 'Profile', 'Products', <BsFillChatTextFill />, <FaShoppingCart />];
  const defaultOption = options[0];

  if (!showMenu) {
    return <Dropdown options={options} value={defaultOption} />;
  }

  // returning the navigation menu conditionally
  return (
    <div>
      {/* rendering full nav list for large screens */}
      {isDesktop ?
        <nav>
          <a href="/" style={styles.nav}>Home</a>
          <a href="/dashboard" style={styles.nav}>Dashboard</a>
          <a href="product" style={styles.nav}>Products</a>
          <a href="#" style={styles.nav}><BsFillChatTextFill /></a>
          <a href="#" style={styles.nav}><FaShoppingCart /></a></nav>
          // * { isLogged}
          // <a href="/login" style={styles.nav}>Login</a> */}
        :
        // rendering dropdown bars for small screens 
        <nav><a href="#" style={styles.nav}>
          <FaBars onClick={() => setShowMenu(!showMenu)} />
        </a></nav>
      }
    </div>
  )
}

export default Navigation;