import React from 'react';
import { styled } from "@mui/system";
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitations from './PendingInvitations/PendingInvitations';

const MainContainer = styled('div')({
  width: '25%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#1f98b4',
})

export default function FriendsSideBar() {
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
