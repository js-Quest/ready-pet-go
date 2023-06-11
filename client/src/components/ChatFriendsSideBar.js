import React from 'react';
import { styled } from "@mui/system";
import AddFriendButton from './AddFriendChatButton';
import FriendsTitle from './ChatFriendsTitle';
import FriendsList from './ChatFriendsList';
import PendingInvitations from './PendingChatInvite';

const MainContainer = styled('div')({
  width: '25%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#1f98b4',
})

export default function ChatFriendsSideBar() {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title='Private Messages' />
      <FriendsList />
      <FriendsTitle title='Invitations' />
      <PendingInvitations />
    </MainContainer>
  )
}
