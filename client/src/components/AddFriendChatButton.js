import React from 'react';
import PrimaryButton from './PrimaryButton';

const additionalStyles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '40px',
  color: 'black',
  background: '#c8d3d5'
}

export default function AddFriendButton() {

  const handleOpenAddFriendChat = () => { };

  return (
    <PrimaryButton
      additionalStyles={additionalStyles}
      label='Add Friend'
      onClick={handleOpenAddFriendChat}
    >
    </PrimaryButton>
  )
}