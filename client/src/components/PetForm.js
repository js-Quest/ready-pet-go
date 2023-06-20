import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UploadWidget from './UploadWidget';
import { useMutation } from '@apollo/client';
import { ADD_PET } from '../utils/mutations';
import { CardMedia } from '@mui/material';
import PetPlaceholder from '../images/petProfilePlaceholder.png';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

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
    <Card sx={{ 
      width: 275, 
      height: '417px', 
      paddingTop: '15px', 
      paddingRight: '15px', 
      paddingLeft: '15px', 
      }}
      >
      <CardMedia>
        <CardMedia
          component='img'
          sx={{
            height: 100,
            width: 100,
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          image={PetPlaceholder}
          alt='Profile Placeholder'
        />
      </CardMedia>
      <UploadWidget setProfilePicture={setProfilePicture} />
      <CardContent sx={{ marginTop: '-10px', width: 100, paddingLeft: 0, paddingRight: 0 }}>
        <Typography variant="body1" color="text.secondary">
          Name: </Typography>
        <Typography sx={{ marginLeft: '1.5em' }}>
          <input value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Pet Name"></input>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Age: </Typography>
        <Typography sx={{ marginLeft: '1.5em' }}>
          <input value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="2"></input>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Breed: </Typography>
        <Typography sx={{ marginLeft: '1.5em' }}>
          <input value={breed}
            onChange={(e) => setBreed(e.target.value)}
            type="text"
            placeholder="Poodle"></input>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bio: </Typography>
        <Typography sx={{ marginLeft: '1.5em' }}>
          <input value={bio}
            onChange={(e) => setBio(e.target.value)}
            type="text"
            placeholder="I like sunbathing!"></input>
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <IconButton
          aria-label='save'
          onClick={handleFormSubmit}
          sx={{ marginTop: '-4px' }}>
          <SaveIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default PetForm;