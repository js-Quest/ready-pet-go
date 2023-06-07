import React from 'react';
import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';

export default function SideBarButton() {
  return (
    <Button
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '15px',
        margin: 0,
        padding: 0,
        marginTop: '10px',
        color: 'black',
        backgroundColor: '#c8d3d5',
      }}
    >
      <GroupsIcon />
    </Button>
  )
}
