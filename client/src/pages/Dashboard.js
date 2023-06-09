import React, {useState} from 'react';
// import UploadImage from '../components/UploadImage';
import PetCard from '../components/PetCard';
import AddPet from '../components/AddPet';

export default function Dashboard() {
  const [showCard, setShowCard] = useState(false);
  const [numCard, setNumCard] = useState(0);

  return (
    <div>
      <h1>Hello, User</h1>
      <div className="imageContainer">
       {/* map through card info */}
       {/* Tutor Patrick Lake helped me with this map function */}
        {[...Array(numCard)].map((_,i) => <PetCard key={i}/>)}
        <AddPet setShowCard={setNumCard}/>
      </div>

      {/* <button onClick={(image) => setImage(image)}>Save</button> */}
    </div>
  )
}
