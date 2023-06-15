import React, { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import PetButton from '../components/PetButton';
import Footer from '../components/Footer/Footer';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './style.css';
import PetPeek1 from '../images/peeking1.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Button} from '@mui/material';
import UploadWidget from '../components/UploadWidget';

export default function Dashboard() {
  const [numCard, setNumCard] = useState(0);
  const [petArray, setPetArray] = useState([]);
  const [petData, setPetData] = useState([])

  const { username: userParam } = useParams();

  const {  data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  
  useEffect(() => {
    user?.pets ? setPetData(user.pets) : setPetArray([]);
    console.log(user)
  }, [data])
  
  useEffect(() => {
console.log(petData)
  }, [petData])

  const handleChange = () => {
    window.location.replace('/login');
  }
  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return (
      <Container className='errorContainer'>
        <h1 className='errorHead'>Hold Up!</h1>
        <Box className='errorBox'>
        <h2 className='errorText'
          >Please <Link to="/login" className='errorLink'>LOGIN</Link> to see the Dashboard!
        </h2>
          <Button sx={{
            background: '#B6B3B2',
            color: '#36393F',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 700,
            height: '40px',
            width: '50%',
            marginTop: '50px',
            border: '1px solid black',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
            onClick={handleChange}
          >
            LOGIN
          </Button>
        </Box>
      </Container>
    );
  }
  return (
    <div>
      <div className='petPeeking'>
        <img
          src={PetPeek1}
          alt='peeking'
        />
      </div>
      {/* avatar area
       <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" sx={{ width: 80, height: 80 }} src="/static/images/avatar/1.jpg" ></Avatar>
      </Stack> */}

      <Container className='dashboardContainer'>
        <h1 className='dashboardHead'>Dashboard</h1>
        <Box sx={{
          flexGrow: 1,
          maxWidth: '95%',
          // justifyContent: 'center', 
          // alignItems: 'center',
          // paddingLeft: '1em',
          // paddingRight: '1em',
        }}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <h1 className='userH1'>Human</h1>
              <Box className='dashboardDetailsBox'>
                <h3>Placeholder box for human</h3>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <p> </p>
            </Grid>
            <Grid item xs={5}>
              <h1 className='userH1'>Furry</h1>
              <Box className='dashboardDetailsBox'>
                <h3>Some other info</h3>
                <div className="imageContainer" id='addPetContainer'>
                  {/* Tutor Patrick Lake helped me with this map function to map through petCard info to show all pets */}
                  {petData.map((item, i) => <PetCard pet={item} petData={petData} setPetData={setPetData} key={i} />)}
                  {/* array to render new PetForm whenever PetButton is clicked */}
                  {[...Array(numCard)].map((_, i) => <PetForm petData={petData} setPetData={setPetData} key={i} setShowCard={setNumCard} />)}
                  <PetButton
                    setShowCard={setNumCard}
                    variant='text'
                    className='changeBtn'
                  >
                  </PetButton>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
