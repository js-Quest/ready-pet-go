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


export default function Profile() {
  const [editProf, editProfile] = useState(false);
  const [formState, setFormState] = useState({ email: '', city: '', bio: '', username: '', phoneNumber: '' }); 
  const [updateUser, { error }] = useMutation(UPDATE_USER);



  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const handleLoginError = () => {
    window.location.replace('/login');
  }

  if (!data){
    return (
      <Container className='errorContainer'>
        <h1 className='errorHead'>Hold Up!</h1>
        <Box className='errorBox'>
          <h2 className='errorText'
          >Please <Link to="/login" className='errorLink'>LOGIN</Link> to view your Profile!
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
            onClick={handleLoginError}
          >
            LOGIN
          </Button>
        </Box>
      </Container>
    )
  }
  
  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />; 
  }
 

  if (loading) {
    return <div>Loading...</div>;
  }

  const editFormState = (event) => {
    event.preventDefault();
    console.log('thisworks')
    if (!editProf) {
      editProfile(true)
    } else {
      editProfile(false)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);


    //formstate will have the variable read as '' if the user does not change the value. These if statements catchs any of the variables not changed and sets to them back to thier original value. 
    if (!formState.email) {
      formState.email = data.me.email
    }
    if (!formState.city) {
      formState.city = data.me.city
    }
    if (!formState.bio) {
      formState.bio = data.me.bio
    }
    if (!formState.username) {
      formState.username = data.me.username
    }
    if (!formState.phoneNumber) {
      formState.phoneNumber = data.me.phoneNumber
    }

    try {
      const { data } = await updateUser({
        variables: { ...formState }
      })

      console.log(data)

    } catch (err) {
      console.error(err);
    }



    setFormState({ email: '', city: '', bio: '', username: '', phoneNumber: '' });
    editProfile(false)
  };

  console.log(userParam)
  console.log(data)
  console.log(user)
 

  return (
    <div>
      <div className='petPeeking'>
        <img
          src={PetPeek1}
          alt='peeking'
        />
      </div>
      <Container className='dashboardContainer'>
        <h1 className='dashboardHead'>{userParam? userParam:user.username}'s Profile</h1>

        {/* HUMAN INFO */}
        <Box sx={{
          border: '5px solid',
          borderColor: '#dee2e6',
          borderRadius: '5px',
          paddingBottom: 3,
          maxWidth: '75%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 5,
        }}
        >
          <Typography
            variant="h3"
            sx={{
              backgroundColor: '#dee2e6',
              fontSize: '1.75rem',
              fontWeight: 'inherit',
              padding: '0.9em',
            }}
          >
            Account Details
          </Typography>

          {editProf ? (
            <Box sx={{
              marginTop: '2em'
            }}>
              <form onSubmit={handleFormSubmit}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 0 }} maxWidth={'80%'} sx={{ margin: '0 auto' }}>
                  <Grid item xs={12} md={6} lg={3}>
                    <Typography sx={{ marginBottom: '0.8em', fontSize: '1.3rem' }}>Username:</Typography>
                    <TextField
                      className="form-input"
                      label="Username"
                      placeholder="Username"
                      name="username"
                      type="text"
                      value={formState.username || user.username}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Typography sx={{ marginBottom: '0.8em', fontSize: '1.3rem' }}>Email:</Typography>
                    <TextField
                      className="form-input"
                      label="Email"
                      placeholder="Username"
                      name="email"
                      type="text"
                      value={formState.email || user.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Typography sx={{ marginBottom: '0.8em', fontSize: '1.3rem' }}>City:</Typography>
                    <TextField
                      className="form-input"
                      label="City, ST"
                      placeholder="City, ST"
                      name="city"
                      type="text"
                      value={formState.city || user.city}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Typography sx={{ marginBottom: '0.8em', fontSize: '1.3rem' }}>Phone Number:</Typography>
                    <TextField
                      className="form-input"
                      label="Phone Number"
                      placeholder="###-###-####"
                      name="phoneNumber"
                      type="text"
                      value={formState.phoneNumber || user.phoneNumber}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{ marginBottom: '0.8em', fontSize: '1.3rem', marginTop: ['0em', '1.3em'] }}>About Me</Typography>
                    <TextField
                      className="form-input"
                      label="My Bio."
                      placeholder="About me..."
                      name="bio"
                      type="text"
                      value={formState.bio || user.bio}
                      onChange={handleChange}
                      sx={{ width: ['80%'] }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '0.5em' }}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ cursor: 'pointer', marginRight: '1em', width: '8em' }}
                    >
                      Submit
                    </Button>
                    <Button
                      variant='contained'
                      onClick={editFormState}
                      sx={{ cursor: 'pointer', width: '8em' }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          ) :
            (
              <Box maxWidth={'100%'} sx={{ paddingLeft: '2.8em', paddingRight: '2.8em' }}>
                <br />
                <Typography sx={{ fontSize: '1.5rem' }}>Username :</Typography>
                <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.username}</Typography>
                <hr
                  style={{
                    background: "#CD7672",
                    height: "2px",
                    width: '20%',
                    border: "none",
                    marginTop: '0.4em',
                    marginBottom: '1.3em',
                  }}
                />
                <Typography sx={{ fontSize: '1.5rem' }}>Email :</Typography>
                <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.email}</Typography>
                <hr
                  style={{
                    background: "#534666",
                    height: "2px",
                    width: '30%',
                    border: "none",
                    marginTop: '0.4em',
                    marginBottom: '1.3em',
                  }}
                />
                <Typography sx={{ fontSize: '1.5rem' }}>City, ST :</Typography>
                <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.city}</Typography>
                <hr
                  style={{
                    background: "#DC8665",
                    height: "2px",
                    width: '40%',
                    border: "none",
                    marginTop: '0.4em',
                    marginBottom: '1.3em',
                  }}
                />
                <Typography sx={{ fontSize: '1.5rem' }}>Phone Number :</Typography>
                <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.phoneNumber}</Typography>
                <hr
                  style={{
                    background: "#138086",
                    height: "2px",
                    width: '50%',
                    border: "none",
                    marginTop: '0.4em',
                    marginBottom: '1.3em',
                  }}
                />
                <Typography sx={{ fontSize: '1.5rem' }}>My Bio :</Typography>
                <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.bio}</Typography>
                <hr
                  style={{
                    background: "#EEB462",
                    height: "2px",
                    width: '60%',
                    border: "none",
                    marginTop: '0.4em',
                    marginBottom: '1.3em',
                  }}
                />
                {data.me &&
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Button variant='contained' type="click" onClick={editFormState} sx={{ backgroundColor: '#36393F', width: '9rem', marginLeft: 'auto' }}>Update</Button>
                </Box>
                }
              </Box>
            )}
        </Box>

        <Box sx={{
          border: '5px solid',
          borderColor: '#dee2e6',
          borderRadius: '5px',
          // paddingBottom: 3,
          maxWidth: '75%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 5,
        }}
        >
          <Typography
            variant="h3"
            sx={{
              backgroundColor: '#dee2e6',
              fontSize: '1.75rem',
              fontWeight: 'inherit',
              padding: '0.9em',
            }}
          >
            My Pets
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: '1.1rem',
              marginTop: '1.3em',
              paddingLeft: '3em',
              paddingRight: '3em',
              paddingTop: '1em',
              paddingBottom: '3em',
            }}
          >
            Jean shorts JOMO YOLO VHS marfa ugh, thundercats scenester cliche tote bag unicorn fit occupy. Leggings fashion axe cloud bread, chia green juice copper mug hashtag cardigan taxidermy meditation hell of. Shabby chic disrupt vaporware, hell of paleo you probably haven't heard of them pinterest migas. Meggings franzen hexagon fam marfa. You probably haven't heard of them taiyaki artisan banh mi echo park. Gorpcore hammock enamel pin plaid trust fund venmo. Activated charcoal YOLO gastropub tilde marfa. 
            <br></br>
            <br></br>
            Jean shorts JOMO YOLO VHS marfa ugh, thundercats scenester cliche tote bag unicorn fit occupy. Leggings fashion axe cloud bread, chia green juice copper mug hashtag cardigan taxidermy meditation hell of. Shabby chic disrupt vaporware, hell of paleo you probably haven't heard of them pinterest migas. Meggings franzen hexagon fam marfa. You probably haven't heard of them taiyaki artisan banh mi echo park. Gorpcore hammock enamel pin plaid trust fund venmo. Activated charcoal YOLO gastropub tilde marfa.
          </Typography>
        <div className='catReach'>
          <img
            src={ElGato}
            alt='CatSneezins'
            style={{ marginLeft: '-8em', marginBottom: '-.4em'}}
          />
        </div>
        </Box>
      </Container >
    </div>
  )
}
