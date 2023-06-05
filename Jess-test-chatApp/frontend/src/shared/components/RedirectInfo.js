import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const RedirectText = styled('span')({
  color: '#00aff4', //blue
  cursor: 'pointer'
})
export default function RedirectInfo({text, redirectText, additionalStyles, redirectHandler}) {
  return (
    <Typography
    sx={{color:'#72767d'}} //light grey
    style={additionalStyles ? additionalStyles : {} }
    variant='subtitle2' //mui Typography subtitle style
    >
      {text}
      <RedirectText onClick={redirectHandler}>
        {redirectText}
      </RedirectText>
    </Typography>
  )
}
