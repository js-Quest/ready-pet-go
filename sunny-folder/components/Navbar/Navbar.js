import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import moment from "moment"
// import NavigationButtons from "../Buttons/AboutButton";
import './style.css';
import { ThemeContext } from "../../ThemeProvider";
import { PageContext } from "../../PageProvider";


function Navbar() {
  console.log("navbar rendered")
  const { colors, toggleMode } = useContext(ThemeContext);
  console.log(colors);
  const { page, togglePage } = useContext(PageContext);
  console.log(page);

  return (
    <AppBar position="static" sx={{
      backgroundColor: colors.primary,
      height: '4.5em',
    }}>
      <Container maxWidth='99'>
        <Toolbar disableGutters sx={{
          width: '100%',
          paddingTop: '.1em'
        }}>
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              // flex: "1 0 auto",
              display: { xs: "none", md: "flex" },
              // ml: -20,
              fontFamily: 'Neucha',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: colors.secondary,
              textDecoration: 'none',
              marginRight: 'auto',
            }}
          >
            Ready. Pet. Go!
          </Typography>
          <div className='menuItems'>
            <Button
              // value={pageValue(2)}
              onClick={togglePage}
              label="Page"
              sx={{
                color: colors.secondary,
                fontSize: '18px',
                marginTop: '0.8em'
              }}
            >
              Option
            </Button>
            <Button
              // value={pageValue(3)}
              onClick={togglePage}
              label="Page"
              sx={{
                color: colors.secondary,
                fontSize: '18px',
                paddingLeft: '17px',
                marginTop: '0.8em'
              }}
            >
              Option
            </Button>
            <Button
              // value={pageValue(4)}
              onClick={togglePage}
              label="Page"
              sx={{
                color: colors.secondary,
                fontSize: '18px',
                paddingLeft: '17px',
                marginTop: '0.8em'
              }}
            >
              Option
            </Button>
            <Button
              // value={pageValue(5)}
              onClick={togglePage}
              label="Page"
              sx={{
                color: colors.secondary,
                fontSize: '18px',
                paddingLeft: '17px',
                marginTop: '0.8em'
              }}
            >
              Option
            </Button>
            <FormControl variant="standard" sx={{
              m: 1,
              minWidth: 120,
              backgroundColor: '#ffffff3b',
              border: 'none'
            }}>
              <InputLabel id="demo-simple-select-helper-label" sx={{
                color: '#ffffff',
              }}
              >
                Theme
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={colors}
                onChange={toggleMode}
                label="Theme"
                sx={{
                  border: 'none',
                  color: '#ffffff'
                }}
              >
                <MenuItem value={1} sx={{
                  color: '#414449'
                }}>
                  Light Mode
                </MenuItem>
                <MenuItem value={2} sx={{
                  color: '#414449'
                }}>
                  Dark Mode
                </MenuItem>
                <MenuItem value={3} sx={{
                  color: '#414449'
                }}>
                  Theme 3
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;