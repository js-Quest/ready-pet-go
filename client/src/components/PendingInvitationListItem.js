import React, { useState } from 'react'
import { Box, Tooltip, Typography } from '@mui/material';
import Avatar from './Avater';
import InvitationDecisionButtons from './InvitationDecisionButtons';

export default function PendingInvitationListItem({
  id,
  username,
  email,
  acceptFriendInvitation=()=>{},
  rejectFriendInvitation=()=>{},
}) {

  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({id});
    setButtonsDisabled(true);
    }
  const handleRejectInvitation = () => {
    acceptFriendInvitation({id});
    setButtonsDisabled(true);
    }

  return (
    <Tooltip title={email}>
      <div style={{width: '100%'}}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: '7px',
              fontWeight: '700',
              color: '#c8d3d5',
              flexGrow: 1
            }}
            variant='subtitle1'
          >{username}</Typography>
        <InvitationDecisionButtons
          disabled={buttonsDisabled}
          acceptInvitationHandler={handleAcceptInvitation}
          rejectInitationHandler={handleRejectInvitation}
        />
        </Box>
      </div>
    </Tooltip>
  )
}
