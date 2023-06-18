import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import PetButton from '../components/PetButton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
import UploadWidget from '../components/UploadWidget';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';
import PetPeek1 from '../images/peeking1.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css';
import { TextField, Button, Grid } from '@mui/material';
import ElGato from '../images/cat1.png';


export default function Profile() {
  const [editProf, editProfile] = useState(false);
  const [profilePicture, setProfilePicture] = useState('')
  const [formState, setFormState] = useState({ email: '', city: '', bio: '', username: '', phoneNumber: '' });
  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const [petData, setPetData] = useState([]);
  const [petArray, setPetArray] = useState([]);
  const [numCard, setNumCard] = useState(0);
  const { username: userParam } = useParams();


  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
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

  const handleLoginError = () => {
    window.location.replace('/login');
  }
  console.log(data)

  if (!data) {
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
        variables: { ...formState, profilePicture }
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
        <h1 className='dashboardHead'>{userParam ? userParam : user.username}'s Profile</h1>

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
                <Grid container rowSpacing={2} columnSpacing={{ xs: 0 }} maxWidth={'85%'} sx={{ margin: '0 auto' }}>
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
                      sx={{
                        width: { xs: '100%', md: '80%' }
                      }}
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
                      sx={{
                        width: { xs: '100%', md: '80%' }
                      }}
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
                      sx={{
                        width: { xs: '100%', md: '80%' }
                      }}
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
                      sx={{
                        width: { xs: '100%', md: '80%' }
                      }}
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
                      sx={{ width: { xs: '100%', md: '90%', lg: '95%', } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{ marginBottom: '0.8em', fontSize: '1.3rem', marginTop: ['0em', '1.3em'] }}>Profile Picture</Typography>

                    <Box sx={{
                      maxWidth: ['98%','30%'],
                      border: '2px dashed #36393F',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: '2em',
                      padding: '2em'
                    }}>
                      <img
                        src={user.profilePicture}
                        alt='profileImage'
                        loading='lazy'
                        style={{ height: '100px', width: '100px', border: '1px solid black', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
                      ></img>

                      {/* editable version of upload profile picture code */}
                      <UploadWidget setProfilePicture={setProfilePicture} />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'end', marginTop: '1.5em', marginBottom: '0.5em' }}>

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
                <Grid container spacing={0}>
                  <Grid item xs={12} md={9}>
                    <Typography sx={{ fontSize: '1.5rem' }}>Username :</Typography>
                    <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.username}</Typography>
                    <hr
                      className='hr1'
                      style={{
                        background: "#CD7672",
                        height: "2px",
                        width: '40%',
                        border: "none",
                        marginTop: '0.4em',
                        marginBottom: '1.3em',
                      }}
                    />
                    <Typography sx={{ fontSize: '1.5rem' }}>Email :</Typography>
                    <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.email}</Typography>
                    <hr
                      className='hr2'
                      style={{
                        background: "#534666",
                        height: "2px",
                        width: '55%',
                        border: "none",
                        marginTop: '0.4em',
                        marginBottom: '1.3em',
                      }}
                    />
                    <Typography sx={{ fontSize: '1.5rem' }}>City, ST :</Typography>
                    <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.city}</Typography>
                    <hr
                      className='hr3'
                      style={{
                        background: "#DC8665",
                        height: "2px",
                        width: '70%',
                        border: "none",
                        marginTop: '0.4em',
                        marginBottom: '1.3em',
                      }}
                    />
                    <Typography sx={{ fontSize: '1.5rem' }}>Phone Number :</Typography>
                    <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.phoneNumber}</Typography>
                    <hr
                      className='hr4'
                      style={{
                        background: "#138086",
                        height: "2px",
                        width: '85%',
                        border: "none",
                        marginTop: '0.4em',
                        marginBottom: '1.3em',
                      }}
                    />
                    <Typography sx={{ fontSize: '1.5rem' }}>My Bio :</Typography>
                    <Typography sx={{ paddingLeft: '1em', fontSize: '1.2rem' }}>{user.bio}</Typography>
                    {/* view-only version of the profile picture is contained in this Card component */}

                    <hr
                      className='hr5'
                      style={{
                        background: "#EEB462",
                        height: "2px",
                        width: '100%',
                        border: "none",
                        marginTop: '0.4em',
                        marginBottom: '1.3em',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Card sx={{
                      width: { xs: 200, xl: 250 },
                      height: { xs: 200, xl: 250 },
                      marginLeft: { xs: '25%', md: '-100px', lg: '-50px', xl: '-20px' },
                    }}>
                      <CardMedia
                        sx={{ height: { xs: 200, xl: 250 } }}
                        image={user.profilePicture} />
                    </Card>
                  </Grid>
                </Grid>
                {data.me &&
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: { xs: '15px', lg: '0px' }
                  }}>
                    <Button
                      variant='contained'
                      className='updateProfBtn'
                      type="click"
                      onClick={editFormState}
                      sx={{ backgroundColor: '#36393F', width: '9rem', marginLeft: 'auto' }}>Update</Button>
                  </Box>
                }
              </Box>
            )}
        </Box>

        {/* PET INFO */}

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

          <Box
            variant="body1"
            component="p"
            sx={{
              fontSize: '1.1rem',
              marginTop: '1.3em',
              paddingLeft: '3em',
              paddingRight: '3em',
              paddingTop: '1em',
              paddingBottom: '2em',
              display: 'flex',
              flexDirection: 'row',
              // flexWrap: 'wrap'
            }}
          >
            {petData.map((item, i) => <PetCard pet={item} petData={petData} setPetData={setPetData} key={i} />)}
            {/* array to render new PetForm whenever PetButton is clicked */}
            {[...Array(numCard)].map((_, i) => <PetForm petData={petData} setPetData={setPetData} key={i} setShowCard={setNumCard} />)}

            <PetButton
              setShowCard={setNumCard}
              variant='text'
              className='changeBtn'
            />

          </Box>
          <div className='catReach'>
            <img
              src={ElGato}
              alt='CatSneezins'
              style={{ marginLeft: '-8em', marginBottom: '-.4em' }}
            />
          </div>
        </Box>
      </Container >
    </div>
  )
}
