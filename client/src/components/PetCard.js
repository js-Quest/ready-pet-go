// this will be the published pet card that will render after user clicks "save"
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMutation } from '@apollo/client';
import { REMOVE_PET } from '../utils/mutations';

// read-only render of the PetCard
function PetCard({ petData }) {
  console.log(petData)

  const [removePet, { error }] = useMutation(REMOVE_PET)

  async function handleDelete() {
    // need to update state after delete
    await removePet({
      variables: {
        petId: petData._id
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <CardMedia
          sx={{ height: 140 }}
          image={petData.photoURL}
        />
        <Typography gutterBottom variant="h5" component="div" >
          {petData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {petData.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed: {petData.breed}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bio: {petData.bio}
        </Typography>
      </CardContent>
      <button onClick={handleDelete}>
        Delete
      </button>
    </Card>
  );
}

export default PetCard;