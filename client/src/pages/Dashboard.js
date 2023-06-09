import React from 'react';
// import UploadImage from '../components/UploadImage';
import PetCard from '../components/PetCard';
import AddPet from '../components/AddPet';

export default function Dashboard(setImage) {

  // const styles = {
  //   container: {
  //     border: "2px solid black",
  //     borderRadius: "50%",
  //     width: "50px",
  //     height: "50px",
  //   }
  // };

  return (
    <div>
      <h1>Hello, User</h1>
      <div className="imageContainer">
        <PetCard/>
        <AddPet />
      </div>

      <button onClick={(image) => setImage(image)}>Save</button>
    </div>
  )
}
