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



export default function MeetUp() {
    return (
        <>
            <div className='petPeeking'>
                <img
                    src={PetPeek1}
                    alt='peeking'
                />
            </div>
            <Container className='dashboardContainer'>
                <h1 className='dashboardHead'>Welcom to MeetUp!</h1>
                <Box sx={{
                    marginTop: '2em'
                }}>
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
                            Why Here
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
                            Welcome to MeetUp! Please feel free to post pet play dates or just general information about your pet! This forum can and should also be used to help eachother in guiding others in any questions one would have in their journey! Feel free to post your first meet up here! Happy MeetUps!
                            
                        </Typography>
                        <div className='catReach'>
                            <img
                                src={ElGato}
                                alt='CatSneezins'
                                style={{ marginLeft: '-8em', marginBottom: '-.4em' }}
                            />
                        </div>
                    </Box>
                </Box>
                <Box sx={{
                    marginTop: '2em'
                }}>
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
                            Why Here
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
                            Welcome to MeetUp! Please feel free to post pet play dates or just general information about your pet! This forum can and should also be used to help eachother in guiding others in any questions one would have in their journey! Feel free to post your first meet up here! Happy MeetUps!
                            
                        </Typography>
                        <div className='catReach'>
                            <img
                                src={ElGato}
                                alt='CatSneezins'
                                style={{ marginLeft: '-8em', marginBottom: '-.4em' }}
                            />
                        </div>
                    </Box>
                </Box>
            </Container >
        </>
    )
}
