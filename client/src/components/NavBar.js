import React from "react";
import { useState, useEffect } from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Groups2Icon from '@mui/icons-material/Groups2';
import ChatIcon from '@mui/icons-material/Chat';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
// import { FaShoppingCart } from 'react-icons/fa';
import GroupsIcon from '@mui/icons-material/Groups';
import 'react-dropdown/style.css';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import Dropdown from "./NavDropdown";
import { useLocation } from "react-router-dom";
import '../styles/NavBar.css'

const styles = {
  nav: {
    fontFamily: 'times',
    margin: '20px',
    fontSize: '20px',
    padding: '10px',
    textDecoration: 'none',
    color: 'inherit',
  },
  navdiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse'
  }

  // logoutBtn: {
  //   fontFamily: 'times',
  //   // margin: '20px',
  //   fontSize: '20px',
  //   // borderStyle: '1px solid black'
  //   borderRadius: '8px',
  //   // padding: '.5rem',
  //   background: '#EEB462',
  //   color: '#36393F',
  //   opacity: '0.8'
  // }
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
    <Box sx={{
      display: 'flex',
      width: '30em',
      // justifyContent: 'flex-end',
      flexDirection: 'row',
      marginRight: '2em',
      alignItems: 'center',
    }}>
      {/* rendering full nav list for large screens */}
      {isDesktop ?
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'center',
          textAlign: 'center',
          width: '30em',
          gap: '20px'
        }}>
          <Link href="/"
            sx={{
              textDecoration: 'none',
            }}
          >
            <Tooltip title='Home'>
            <HomeRoundedIcon className="navbarIcons" sx={{ color: 'white', fontSize: '33px' }} />
            </Tooltip>
          </Link>

          <Link href="/firebase"
            target="_blank"
            sx={{
              textDecoration: 'none',
            }}
          >
            <Tooltip title='Chat!'>
            <ChatIcon className="navbarIcons" sx={{ color: 'white', fontSize: '27px', }} />
            </Tooltip>
          </Link>

          <Link href="/meetUp"
            sx={{
              textDecoration: 'none',
            }}
          >
            <Tooltip title='MeetUps'>
            <Groups2Icon className="navbarIcons" sx={{ color: 'white', fontSize: '35px', marginBottom: '-5px' }} />
            </Tooltip>
          </Link>
          <Link href="/product"
            sx={{
              textDecoration: 'none',
            }}
          >
            <Tooltip title='Shopping'>
            <ShoppingBasketIcon className="navbarIcons" sx={{ color: 'white', fontSize: '31px' }} />
            </Tooltip>
          </Link>
          {/* //conditonally rendering links for logout and profile if user is logged in, or login/signup if user is logged out */}
          {Auth.loggedIn() ? (
            <>
              <Link href="/me"
                sx={{
                  textDecoration: 'none',
                }}
              >
                <Tooltip title='My Profile'>
                <AccountCircleIcon className="navbarIcons" sx={{ color: 'white', fontSize: '29px' }} />
                </Tooltip>
              </Link>

              <Button
                variant="contained"
                onClick={logout}
                className="logoutNavBtn"
                sx={{
                  fontSize: '14px',
                  borderRadius: '8px',
                  background: '#EEB462',
                  color: '#36393F',
                  border: '1px solid #36393F',
                  marginLeft: '18px',
                  marginRight: '10px',
                  fontWeight: 'bold'
                }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login"
                sx={{
                  textDecoration: 'none',
                }}
              >
                Login
              </Link>
              <Link href="/register"
                sx={{
                  textDecoration: 'none',
                }}
              >
                Signup
              </Link>
            </>
          )}

        </Box>

        // * { isLogged}
        // <a href="/login" style={styles.nav}>Login</a> */}
        :
        // rendering dropdown bars for small screens 
        <div style={styles.navdiv}>
          <a href="#" style={styles.nav}>
            <Dropdown onClick={() => setShowMenu(!showMenu)} />
          </a>
        </div>
      }
    </Box>
  )
}

export default Navigation;