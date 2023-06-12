import React from 'react'
import { styled } from "@mui/system";
import AppBar from './AppBar/AppBar';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
});


export default function DashboardFrie() {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  )
}
