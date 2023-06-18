import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Tooltip } from '@mui/material';
import '../styles/PetCard.css'
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// const styles = {
//   container: {
//     width: "50px",
//     height: "50px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "20px",
//   }
// }

function PetButton({ setShowCard }) {
  return (

    <IconButton
      aria-label='add'
      className='addPetBtn'
      onClick={() => setShowCard((prev) => prev += 1)}>
      {/* <div style={styles.container}> */}
      <Tooltip title='Add New Pet'>
        <AddRoundedIcon
          className='addPetBtn'
          sx={{
            width: 'auto',
            height: '45px',
            color: '#656565'
          }}
        />
      </Tooltip>
      {/* </div> */}
    </IconButton>
  )
}

export default PetButton;