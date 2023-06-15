import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UploadWidget from './UploadWidget';
import { useMutation } from '@apollo/client';
import { ADD_PET } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';


const PetForm = ({ petArray, setPetArray }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState(''); 
  const [bio, setBio] = useState('');
  const [photoURL, setPhotoURL] = useState('')
  
useEffect(() => {
  console.log(photoURL)
}, [photoURL])

  const [addPet, { error }] = useMutation(ADD_PET, {
    update(cache, { data: { addPet } }) {
      try {
      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, pets: [...me.pets, addPet] } },
      });
    } catch (err) {
      console.error(err)
    }
 } });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setPetArray([...petArray, {
      photoURL: photoURL,
      name: name,
      age: age,
      breed: breed,
      bio: bio
    }])
    try {
      const { data } = await addPet({
        variables: {
          photoURL, name, age, breed, bio
        },
      });

      setName("");
      setAge("");
      setBreed("");
      setBio("");
    } catch (err) {
      console.error(err);
    }
  };

  // each card needs to handle fetch request to submit form to database
  return (
    <Card sx={{ maxWidth: 250 }}>
      <UploadWidget setPhotoURL={setPhotoURL} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          <input value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Pet Name"></input>

        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: 
          <input value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="2"></input>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed: 
          <input value={breed}
            onChange={(e) => setBreed(e.target.value)}
            type="text"
            placeholder="Poodle"></input>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bio: 
          <input value={bio}
            onChange={(e) => setBio(e.target.value)}
            type="text"
            placeholder="I like sunbathing!"></input>
        </Typography>
      </CardContent>
      <button type="button" onClick={handleFormSubmit}>
        Save
      </button>
    </Card>
  );
}

export default PetForm;