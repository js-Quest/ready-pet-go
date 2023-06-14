import React from 'react';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddRoundedIcon from '@mui/icons-material/AddRounded';



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
    <>
      <button type='submit' onClick={() => setShowCard((prev) => prev += 1)}>
        {/* <div style={styles.container}> */}
          <AddRoundedIcon sx={{
            width: '45px',
            height: 'auto',
            color: '#656565'
          }}
          />
        {/* </div> */}
      </button>
    </>
  )
}

export default PetButton;