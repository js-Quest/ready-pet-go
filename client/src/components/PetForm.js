import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UploadWidget from './UploadWidget';
import { useMutation } from '@apollo/client';
import { ADD_PET } from '../utils/mutations';

const PetForm = ({ petData, setPetData, setShowCard }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState(''); 
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState('')
  
useEffect(() => {
  console.log(profilePicture)
}, [profilePicture])

  const [addPet, { error }] = useMutation(ADD_PET)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addPet({
        variables: {
          profilePicture, name, age, breed, bio
        },
      });
      console.log(data)
      setPetData([...petData, {
        ...data.addPet
      }])
      setShowCard(0)
      setName("");
      setAge("");
      setBreed("");
      setBio("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <UploadWidget setProfilePicture={setProfilePicture} />
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