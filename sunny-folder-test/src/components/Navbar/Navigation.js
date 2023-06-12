import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Divider from '@mui/material/Divider';
import { ThemeContext } from '../../providers/ThemeProvider';
import './style.css';
import LogoSmall from '../../images/logoSmall.png';


function Navigation() {
  const { colors } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const isMenuOpen = Boolean(anchorEl);
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const menuId = 'main-menu';
  const renderMenu = (
    <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} href='#'>Logout</MenuItem>
      <MenuItem onClick={handleMenuClose} href='#'>Help</MenuItem>
      <MenuItem onClick={handleMenuClose} disabled>Other?</MenuItem>
    </Menu>
  );
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="static" 
      sx={{
          backgroundColor: colors.primary,
      }}
      >
        <Toolbar>
          <img src={LogoSmall} alt="pawprint"/>
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontFamily={'Sriracha'}
            marginLeft={'18px'}
          >
            Ready. Pet. Go!
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit"
              href='/dashboard'
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              aria-label="messages"
              color="inherit"
              edge="end"
              href='#'
              >
              <Badge color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="shopping"
              color="inherit"
              href='#'
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: { xs: 'flex' } }}>
            <IconButton
              size="large"
              color="inherit"
              href='/'
            >
              <HomeOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="main-menu"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default Navigation;