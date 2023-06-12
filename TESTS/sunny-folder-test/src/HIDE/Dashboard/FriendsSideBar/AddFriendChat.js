import React from 'react'

export default function AddFriendChat({
  isChatOpen,
  closeChatHandler,
  sendFriendInvitation = () => {}
}) {

  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {
    //send friend request to server
  }

  const handleCloseChat = () => {
    closeChatHandler(),
    setMail('')
  }

  return (
    <div>AddFriendChat</div>
  )
}
