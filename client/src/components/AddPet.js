import React from 'react';
import { IconContext } from "react-icons";
import { FaPaw } from "react-icons/fa";

const styles = {
  container: {
    width: "100px",
    height: "100px",
    border: "1px solid black",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px"
  }
}

function AddPet() {
  return (
    <IconContext.Provider value={{ fontSize: "100px" }}>
    <div style={styles.container}>
    <FaPaw style={{fontSize: "60px"}}>Upload Photo</FaPaw>
    </div>
    </IconContext.Provider >
  )
}

export default AddPet