import React from "react";
import { auth } from "../../utils/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Container from "@mui/material/Container";
import Logo from '../../images/chatLogo.png';
import Tooltip from '@mui/material/Tooltip';


const NavBar = () => {
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
    // window.location.replace('/dashboard')
    window.close();
  };

  return (
    <Container
      className="nav-bar"
      maxWidth='100'
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed' }}
    >

      <img src={Logo} alt="pawprint" className='chatLogo' style={{ height: '100%' }} />
      <h1>Ready. Chat. Go!</h1>

      {user ? (
        <Tooltip title="Exit chat">
          <IconButton
            variant="text"
            onClick={signOut}
          >
            <CloseRoundedIcon sx={{ color: '#36393F', fontSize: '32px' }} />
          </IconButton>
        </Tooltip>
      ) : (null)
      }

    </Container>
  );
};

export default NavBar;
// wrap in UI button