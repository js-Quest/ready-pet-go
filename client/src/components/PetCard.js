// this will be the published pet card that will render after user clicks "save"
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// read-only render of the PetCard
function PetCard({ petData }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
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
    </Card>
  );
}

export default PetCard;