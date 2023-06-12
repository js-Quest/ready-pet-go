import React from 'react';
//allows rendering of different components
import { Typography } from '@mui/material'; 


export default function LoginPageHeader() {
  return (
    <>
    <Typography variant='h5' sx={{color: 'white'}}>
      Welcome Back!
    </Typography>
    {/* color light grey, sx used for styling */}
    <Typography sx={{color: '#b9bbbe'}}> 
      Nice to see you bruh.
    </Typography>
    </>
  )
}
