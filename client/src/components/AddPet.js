import React from 'react';
import { IconContext } from "react-icons";
import { FaPaw } from "react-icons/fa";
import PetCard from './PetCard';

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

function AddPet() {

  function newCard() {
    return <PetCard />;
  }

  return (
    <>
      <button type='submit'>
        <div style={styles.container} onClick={newCard}>
          <IconContext.Provider value={{ fontSize: "100px" }} >
            <FaPaw style={{ fontSize: "60px", color: "#808080" }} />
          </IconContext.Provider >
        </div>
      </button>
    </>
  )
}

export default AddPet