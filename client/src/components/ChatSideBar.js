import React from 'react';
import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';

const MainContainer = styled('div')({
  width: '8%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFECB8',
  // minWidth: '50px'
});


export default function ChatSideBar() {
  return (
    <MainContainer>
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
    </MainContainer>
  )
}
