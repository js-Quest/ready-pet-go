import React, {useEffect} from 'react';
import { styled } from "@mui/system";
import ChatSideBar from '../components/ChatSideBar'
import ChatFriendsSideBar from '../components/ChatFriendsSideBar';
import ChatAppBar from '../components/ChatAppBar';
import Messenger from '../components/Messenger';
import logout from '../utils/auth'

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
});

export default function ChatPage() {
  useEffect(() => {
    const userDetails = localStorage.getItem('id_token');

    if(!userDetails){
      logout();
    // }else{
    //   setUserDetails(JSON.parse(userDetails))
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
