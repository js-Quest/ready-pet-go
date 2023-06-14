import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const styles = {
  container: {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
  }
}

function PetButton({setShowCard}) {
  return (
    <>
      <button type='submit' onClick={() => setShowCard((prev) => prev += 1)}>
        <div style={styles.container}>
          <AddCircleOutlineIcon sx={{ fontSize: 65, color: "#6eb9dc" }} />
        </div>
      </button>
    </>
  )
}

export default PetButton;