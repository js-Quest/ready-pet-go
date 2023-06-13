import React, { useEffect, useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import InputWithLabel from '../InputWithLabel';
import PrimaryButton from '../PrimaryButton';

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};
export default function AddFriendChat({
  isChatOpen,
  closeChatHandler,
  sendFriendInvitation = () => { },
}) {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {
    //send friend request to server
  }

  const handleCloseChat = () => {
    // closeChatHandler(),
    setEmail('');
  };

  useEffect(()=> {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  return (
    <div>
      <Dialog open={isChatOpen} onClose={handleCloseChat}>
          <DialogTitle>
            <Typography>Invite a Friend</Typography>
          </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter email of friend you want to invite
            </Typography>
          </DialogContentText>
            <InputWithLabel
              label="Email"
              type="text"
              value={email}
              setValue={setEmail}
              placeholder="enter email address"
            />
        </DialogContent>
        <DialogActions>
          <PrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}