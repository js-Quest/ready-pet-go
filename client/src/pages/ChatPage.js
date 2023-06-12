import React, {useEffect, useState} from 'react';
import { styled } from "@mui/system";
import ChatSideBar from '../components/Chat/ChatSideBar'
import ChatFriendsSideBar from '../components/Chat/ChatFriendsSideBar';
import ChatAppBar from '../components/Chat/ChatAppBar';
import Messenger from '../components/Chat/Messenger';
import logout from '../utils/auth'
import connectWithSocketServer from '../realtimeCommunication/socketConnection'

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
});

export default function ChatPage() {
  // const [userDetails, setUserDetails] = useState()
  useEffect(() => {
    const userDetails = localStorage.getItem('email');

    if(!userDetails){
      logout();
    }else{
      connectWithSocketServer(userDetails)
    }
  })
  return (
    <Wrapper>
      <ChatSideBar />
      <ChatFriendsSideBar />
      <Messenger />
      <ChatAppBar />
    </Wrapper>
  )
}
