import React from 'react';
import { Button, Typography } from '@mui/material';
import Avater from './Avater';
import OnlineIndicator from './OnlineIndicator';


export default function ChatFriendsListItem({id, username, isOnline}) {
  return (
    <Button
      style={{
        width: '100%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: 'black',
        position: 'relative',
      }}
      >
        <Avater username={username} />
        <Typography 
          style={{
            marginLeft: '7px',
            fontWeight: '700',
            color: '#c8d3d5'
          }}
          variant="subtitle1"
          align='left'
        >
          {username}
        </Typography>
        {isOnline && <OnlineIndicator />}
    </Button>
  )
}
