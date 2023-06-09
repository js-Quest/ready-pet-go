import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UploadImage from './UploadImage';

function PetCard() {

  return (
    <Card sx={{ maxWidth: 250 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg" 
      /> */}
      <UploadImage />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pet Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bio
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PetCard;