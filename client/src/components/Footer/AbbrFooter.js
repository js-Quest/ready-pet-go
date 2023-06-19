import React from "react";
import { Container } from '@mui/material';
import LogoSmall from '../../images/logoSmall.png'

function AbbrFooter() {
  return (
    <Container maxWidth='100' sx={{
      backgroundColor: '#138086',
      position: 'fixed',
      bottom: 0,
      left: 0,
      height: '4em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <img src={LogoSmall} alt='Logo' /> 

    </Container>
  )
}

export default AbbrFooter;