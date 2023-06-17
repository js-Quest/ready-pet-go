import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
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

function PetButton({setShowCard}) {
  return (
      <IconButton 
        aria-label='add' 
        onClick={() => setShowCard((prev) => prev += 1)}>
        {/* <div style={styles.container}> */}
          <AddRoundedIcon sx={{
            width: '45px',
            height: 'auto',
            color: '#656565'
          }}
          />
        {/* </div> */}
      </IconButton>
  )
}

export default PetButton;