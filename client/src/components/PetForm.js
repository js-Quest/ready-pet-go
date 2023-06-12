import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UploadImage from './UploadImage';

function PetForm({ petArray, setPetArray }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setPetArray([...petArray, {
      name: name,
      age: age,
      breed: breed,
      bio: bio
    }])
    setName("");
    setAge("");
    setBreed("");
    setBio("");
  };

  // each card needs to handle fetch request to submit form to database
  return (
    <Card sx={{ maxWidth: 250 }}>
      <UploadImage />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {name}
          <input value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Pet Name"></input>

        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {age}
          <input value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="2"></input>

        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed: {breed}
          <input value={breed}
            onChange={(e) => setBreed(e.target.value)}
            type="text"
            placeholder="Poodle"></input>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bio: {bio}
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