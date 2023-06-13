import React, {useState} from 'react';
// import UploadImage from '../components/UploadImage';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import PetButton from '../components/PetButton';


export default function Dashboard() {
  const [numCard, setNumCard] = useState(0);
  // have array of pets here and map it in the petCard
  const [petArray, setPetArray] = useState([]);

  return (
    <div>
      <h1>Goodbye.</h1>
      <div className="imageContainer">
       {/* map through card info */}
       {/* Tutor Patrick Lake helped me with this map function */}
        {petArray.map((item , i) => <PetCard petData={item} key={i} />)}
        {[...Array(numCard)].map((_,i) => <PetForm petArray= {petArray} setPetArray = {setPetArray} key={i}/>)}
        <PetButton setShowCard={setNumCard}/>
      </div>

      {/* <button onClick={(image) => setImage(image)}>Save</button> */}
    </div>
  )
}
