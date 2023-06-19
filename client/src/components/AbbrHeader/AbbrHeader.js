import React from "react";
import { Container, IconButton } from '@mui/material';
import LogoSmall from '../../images/logoSmall.png'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


function AbbrHeader() {
  return (
    <Container maxWidth='100' sx={{
      backgroundColor: '#138086',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '4em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>

      <img src={LogoSmall} alt='Logo' />
      <IconButton href="/">
      <HomeRoundedIcon sx={{ color: 'white' }}/>
      </IconButton>
    </Container>
  )
}

export default AbbrHeader;