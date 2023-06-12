import React from 'react';
import { Typography } from '@mui/material';


export default function FriendsTitle({title}) {
  return (
    <Typography
      sx={{
        textTransform: 'uppercase',
        color: 'white',
        fontSize: '15px',
        marginTop: '12px',
        fontWeight: '550'
      }}
    >
      {title}
    </Typography>
  )
}
