import React, {useState} from 'react';
// import UploadImage from '../components/UploadImage';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import PetButton from '../components/PetButton';

export default function Dashboard() {
  const [numCard, setNumCard] = useState(0);

  return (
    <div>
      <h1>Hello, User</h1>
      <div className="imageContainer">
       {/* map through card info */}
       {/* Tutor Patrick Lake helped me with this map function */}
        <PetCard />
        {[...Array(numCard)].map((_,i) => <PetForm key={i}/>)}
        <PetButton setShowCard={setNumCard}/>
      </div>

      {/* <button onClick={(image) => setImage(image)}>Save</button> */}
    </div>
  )
}
