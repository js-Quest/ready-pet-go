import React from 'react';
import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import AddFriendChat from './AddFriendChat';

const additionalStyles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '40px',
  color: 'black',
  background: '#c8d3d5'
}

export default function AddFriendButton() {
  const [isChatOpen, setIsChatOpen] =useState(false)

  const handleOpenAddFriendChat = () => { 
    setIsChatOpen(true);
  };

  const handleCloseAddFriendChat = () => {
    setIsChatOpen(false)
  }

  return (
    <>
      <PrimaryButton
        additionalStyles={additionalStyles}
        label='Add Friend'
        onClick={handleOpenAddFriendChat}
      />
      <AddFriendChat
        isChatOpen={isChatOpen}
        closeChatHandler={handleCloseAddFriendChat}
      />
    </>
  )
}