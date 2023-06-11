import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { connect } from 'react-redux';
import { getActions } from '../../app/actions/alertActions';



const AlertNotice = ({
  showAlertMessage,
  closeAlertMessage,
  alertMessageContent,
}) => {
  return (
    <Snackbar
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={5000}
    >
      
      <Alert severity='info'>{alertMessageContent}</Alert>

    </Snackbar>
  )
}

const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotice);