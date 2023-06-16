import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import PetPeek1 from '../images/peeking1.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css';
import { TextField, Button, Grid } from '@mui/material';
import ElGato from '../images/cat1.png';

import {QUERY_MEETUPS} from '../utils/queries'

import MeetUpForm from '../components/MeetUpComponents/MeetUpForm';
import MeetUpList from '../components/MeetUpComponents/MeetUpList';



// THIS IS A WORK IN PROGRESS  



export default function MeetUp() {

    const { loading, data } = useQuery(QUERY_MEETUPS);
    const meetUps = data?.meetUps || [];

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

                            <MeetUpForm />

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

                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <MeetUpList
                                    meetUps={meetUps}
                                    title="CHECK OUT THESE MEETUPS!"
                                />
                            )}

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
