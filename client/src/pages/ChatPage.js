import React from 'react';
import { styled } from "@mui/system";
import ChatSideBar from '../components/ChatSideBar'
import ChatFriendsSideBar from '../components/ChatFriendsSideBar';
import ChatAppBar from '../components/ChatAppBar';
import Messenger from '../components/Messenger';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
});

export default function ChatPage() {
  return (
    <Wrapper>
      <ChatSideBar />
      <ChatFriendsSideBar />
      <Messenger />
      <ChatAppBar />
    </Wrapper>
  )
}
