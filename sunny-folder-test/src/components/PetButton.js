import React from 'react';
import { IconContext } from "react-icons";
import { FaPaw } from "react-icons/fa";

const styles = {
  container: {
    width: "100px",
    height: "100px",
    border: "4px solid #2ecacd",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    backgroundColor: "lightBlue",
  }
}

function PetButton({setShowCard}) {
  return (
    <>
      <button type='submit' onClick={() => setShowCard((prev) => prev += 1)}>
        <div style={styles.container}>
          <IconContext.Provider value={{ fontSize: "100px" }} >
            <FaPaw style={{ fontSize: "60px", color: "#808080" }} />
          </IconContext.Provider >
        </div>
      </button>
      {/* <button onClick={}>Save</button> */}
    </>
  )
}

export default PetButton;