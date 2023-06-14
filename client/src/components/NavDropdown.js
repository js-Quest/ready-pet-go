import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsFillChatTextFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../utils/auth"


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
    auth.logout();
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >Menu
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
        <MenuItem onClick={handleClose}><Link to="/">Home</Link>
        </MenuItem>
       <MenuItem onClick={handleClose}><Link to="/dashboard">Dashboard</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}><Link to="/product">Products</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}><Link to="/firebase"><BsFillChatTextFill /></Link>
        </MenuItem>
        <MenuItem onClick={handleClose}><Link to="#"><FaShoppingCart /></Link>
        </MenuItem>
        <MenuItem onClick={handleCloseLogout}><Link to="/login">Logout</Link>
        </MenuItem>
      </Menu>
    </div >
  );
};

export default Dropdown;
