// this will be the published pet card that will render after user clicks "save"
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMutation } from '@apollo/client';
import { REMOVE_PET } from '../utils/mutations';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip, Box, Divider, Chip } from '@mui/material';
import '../styles/PetCard.css'

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
    <Card sx={{ width: 250 }}>
      <CardContent>
        <CardMedia
          sx={{
            height: 140,
            marginBottom: '20px',
          }}
          image={pet.profilePicture}
        />
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }} >
          {pet.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Age: {pet.age}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Breed: {pet.breed}
        </Typography>
        <Divider sx={{ marginTop: '20px', marginBottom: '10px' }}>
          <Chip label='About Me' />
        </Divider>
        <Typography variant="body1" color="text.secondary">
          {pet.bio}
        </Typography>
      </CardContent>


      <Box className='deletePet'
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: '0.2em',
          paddingBottom: '0.2em'
        }}
      >
        <Tooltip title='Delete Pet?'>
          <IconButton
            aria-label='delete'
            onClick={handleDelete}
            sx={{
              // marginBottom: '0.3em',
              marginRight: '0.3em'
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}

export default PetCard;