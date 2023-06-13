import React from 'react';
import { styled } from '@mui/material';
import PendingInvitationListItem from './PendingInvitationListItem';

const DUMMY_INVITATIONS = [
  {
    _id: '1',
    senderId: {
      username: 'Aaron',
      email: 'aaron@gmail.com'
    }
  },
  {
    _id: '2',
    senderId: {
      username: 'Joe',
      email: 'joe@gmail.com'
    }
  },
]

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
})

export default function PendingInvitations() {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map(invitation =>(
        <PendingInvitationListItem 
          key={invitation._id}
          id={invitation.id}
          username={invitation.senderId.username}
          email={invitation.senderId.email}
        />
      ))}
    </MainContainer>
  )
}
