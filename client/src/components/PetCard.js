// this will be the published pet card that will render after user clicks "save"
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMutation } from '@apollo/client';
import { REMOVE_PET } from '../utils/mutations';

// read-only render of the PetCard
function PetCard({ petData, setPetData, pet }) {
  console.log(petData)

  const [removePet, { error }] = useMutation(REMOVE_PET)

  async function handleDelete() {
    // need to update state after delete
    await removePet({
      variables: {
        petId: pet._id
      }
    })

    setPetData(petData.filter((item) => item._id !== pet._id))
  }

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <CardMedia
          sx={{ height: 140 }}
          image={pet.photoURL}
        />
        <Typography gutterBottom variant="h5" component="div" >
          {pet.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {pet.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed: {pet.breed}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bio: {pet.bio}
        </Typography>
      </CardContent>
      <button onClick={handleDelete}>
        Delete
      </button>
    </Card>
  );
}

export default PetCard;