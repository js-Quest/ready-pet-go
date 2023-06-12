import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import PetButton from '../components/PetButton';
import Auth from '../utils/auth' ;



export default function Profile() {
    const [numCard, setNumCard] = useState(0);
  
    return (
      <div>
        <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
        
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
  