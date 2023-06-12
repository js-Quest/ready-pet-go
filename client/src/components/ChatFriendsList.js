import React from 'react'
import { styled } from "@mui/system";
import ChatFriendsListItem from './ChatFriendsListItem';

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: 'mark',
    isOnline: true
  },
  {
    id: 2,
    username: 'john',
    isOnline: false
  },
  {
    id: 3,
    username: 'brian',
    isOnline: false
  }
]

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%'
})

export default function FriendsList() {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map(f=>(
        <ChatFriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  )
}
