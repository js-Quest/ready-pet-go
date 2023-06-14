import React, {useState} from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import PetButton from '../components/PetButton';
import Auth from '../utils/auth' ;


import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';


export default function Profile() {
    const [numCard, setNumCard] = useState(0);

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/me" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }
  
    return (
      <div>


        <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
        
        <h1>Hello, User</h1>
        <div className="imageContainer">
         {/* map through card info */}
         {/* Tutor Patrick Lake helped me with this map function */}
         <p>THIS IS THE PROFILE PAGE!</p>
          <PetCard />
          {[...Array(numCard)].map((_,i) => <PetForm key={i}/>)}
          <PetButton setShowCard={setNumCard}/>
        </div>
  
        {/* <button onClick={(image) => setImage(image)}>Save</button> */}
      </div>
    )
  }
  