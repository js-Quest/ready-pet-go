import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
// import PetCard from '../components/PetCard';
// import PetForm from '../components/PetForm';
// import PetButton from '../components/PetButton';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';
// import 'bootstrap/dist/css/bootstrap.min.css';
import PetPeek1 from '../images/peeking1.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css';
import { TextField, Button, Grid } from '@mui/material';
import ElGato from '../images/cat1.png';


    // THIS IS A WORK IN PROGRESS  



export default function MeetUps ()  {
  return (
    <Box sx={{
        marginTop: '2em'
      }}> 
          <Grid container rowSpacing={2} columnSpacing={{ xs: 0 }} maxWidth={'80%'} sx={{ margin: '0 auto' }}> 
            <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '0.5em' }}>
                <h3>Hello</h3>
                
            </Grid>
          </Grid> 
      </Box>
  )
}
