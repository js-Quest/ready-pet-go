import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Auth from "../utils/auth"
import styled from '@emotion/styled';

const styles = {
  items: {
    textDecoration: "none",
    color: "#36393F",
    fontWeight: "500"
  }
}

function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogout = () => {
    Auth.logout();
    setAnchorEl(null);
  }

  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  return (
    <div>
      <Button
      sx={{
        color: 'white'
      }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ><FaBars style={{ fontSize: "20px" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link style={styles.items} to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}><Link style={styles.items} to="/dashboard">Dashboard</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}><Link style={styles.items} to="/me">Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}><Link style={styles.items} to="/product">Products</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}><Link style={styles.items} to="/firebase" target="_blank">Chat</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}><Link style={styles.items} to="#">Cart</Link>
        </MenuItem>
        {!token ? (
          <MenuItem onClick={handleClose}><Link style={styles.items} to="/login">Login</Link>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleCloseLogout}><Link style={styles.items} to="/login">Logout</Link>
          </MenuItem>
        )}
      </Menu>
    </div >
  );
};

export default Dropdown;
