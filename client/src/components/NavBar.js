import React from "react";
import { useState, useEffect } from "react";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import Dropdown from "./NavDropdown";
import { useLocation } from "react-router-dom";

const styles = {
  nav: {
    fontFamily: 'times',
    margin: '20px',
    fontSize: '20px',
    padding: '20px',
    textDecoration: 'none',
    color: 'inherit'
  },
}

function Navigation() {

  // referenced Stack Overflow for the code to set window states and effects https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size

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
  // const options = ['Home', 'Profile', 'Products', <BsFillChatTextFill />, <FaShoppingCart />];
  // const defaultOption = options[0];
  
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { pathname } = useLocation();
  if (pathname === "/firebase") return null;
  
  if (!showMenu) {
    return <Dropdown />;
  }
  
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };
  
  // returning the navigation menu conditionally
  return (
    <div>
      {/* rendering full nav list for large screens */}
      {isDesktop ?
        <nav>
          <a href="/" style={styles.nav}>Home</a>
          {/* <a href="/dashboard" style={styles.nav}>Dashboard</a> */}
          <a href="/product" style={styles.nav}>Products</a>
          <a href="/firebase" style={styles.nav} target="_blank"><BsFillChatTextFill /></a>
          <a href="#" style={styles.nav}><FaShoppingCart /></a>
          {/* //conditonally rendering links for logout and profile if user is logged in, or login/signup if user is logged out */}
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" style={styles.nav} to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" style={styles.nav} onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" style={styles.nav} to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" style={styles.nav} to="/register">
                Signup
              </Link>
            </>
          )}

        </nav>

        // * { isLogged}
        // <a href="/login" style={styles.nav}>Login</a> */}
        :
        // rendering dropdown bars for small screens 
        <nav><a href="#" style={styles.nav}>
          <Dropdown onClick={() => setShowMenu(!showMenu)} />
        </a></nav>
      }
    </div>
  )
}

export default Navigation;