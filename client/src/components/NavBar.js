import React from "react";
import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; 
import { BsFillChatTextFill } from 'react-icons/bs'
import GroupsIcon from '@mui/icons-material/Groups';
import { FaShoppingCart } from 'react-icons/fa';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
    padding: '10px',
    textDecoration: 'none',
    color: 'inherit'
  },
  logoutBtn: {
    fontFamily: 'times',
    margin: '20px',
    fontSize: '20px',
    // borderStyle: '1px solid black'
    borderRadius: '8px',
    padding: '.5rem',
    background: '#EEB462',
    color: '#36393F',
    opacity: '0.8'
  }
}

function Navigation()
// referenced Stack Overflow for the code to set window states and effects https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size
{
  const [isDesktop, setDesktop] = useState(window.innerWidth > 975);
  
  const updateMedia = () => {
    setDesktop(window.innerWidth > 975);
  };
  // adding event listener to run updateMedia on a page resize; if window is resized to smaller screen size, event listener is removed 
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  // using state to be able to show menu items on click
  const [showMenu, setShowMenu] = useState(true)
  
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
          <Link to="/" style={styles.nav}><HomeIcon /></Link>
          {/* <a to="/dashboard" style={styles.nav}>Dashboard</a> */}
          <Link to="/firebase" style={styles.nav} target="_blank"><BsFillChatTextFill /></Link>
          <Link to="/meetUp" style={styles.nav}><GroupsIcon /></Link>
          <Link to="/product" style={styles.nav}><ShoppingBasketIcon /></Link>
          <Link to="#" style={styles.nav}><FaShoppingCart /></Link> 
          {/* //conditonally rendering links for logout and profile if user is logged in, or login/signup if user is logged out */}
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" style={styles.nav} to="/me">
             <AccountCircleIcon />
              </Link>
              <button className="btn btn-lg btn-light m-2" style={styles.logoutBtn} onClick={logout}>
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