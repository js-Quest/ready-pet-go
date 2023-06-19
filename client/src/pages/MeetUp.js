import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
// import PetPeek1 from '../images/peeking1.png';
import PupPeek from '../images/pups-peeking.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css';
// import { TextField, Button, Grid } from '@mui/material';
import Kitten from '../images/cat2-small.png';
import { QUERY_MEETUPS } from '../utils/queries'

import MeetUpForm from '../components/MeetUpComponents/MeetUpForm';
import MeetUpList from '../components/MeetUpComponents/MeetUpList';


export default function MeetUp() {

    const { loading, data } = useQuery(QUERY_MEETUPS);
    const meetUps = data?.meetUps || [];

    return (
        <>
            <Container className='dashboardContainer' sx={{ marginTop: '2em' }}>
                <h1 className='dashboardHead'>Welcome to MeetUp!</h1>
                <Box sx={{
                    marginTop: '2em'
                }}>
                    <Box sx={{
                        border: '4px solid #DC8665',
                        // borderColor: '#DC8665',
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
                                backgroundColor: '#DC8665',
                                fontSize: '1.75rem',
                                fontWeight: 'inherit',
                                padding: '0.9em',
                            }}
                        >
                            Create a MeetUp!
                        </Typography>

                        <Typography sx={{ textAlign: 'center', marginTop: '.8em' }} variant='h5'>   Welcome to MeetUp!  </Typography>

                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                fontSize: '1.1rem',
                                paddingLeft: '3em',
                                paddingRight: '3em',
                                paddingTop: '1em',
                                paddingBottom: '3em',
                            }}
                        >

                            Here at Ready, Pet, Go! we make pet socializing easier by providing a forum to help our users schedule playdates for their beloved pets! Leave your time, location, and breed/size of pet so that other users can see and respond to your MeetUp post!
                            <br /><br />
                            Additionally, we understand that sometimes only true 'experience' is the answer and google won't be enough to help you along on your journey of pet-parenthood. In this forum, ask any questions you may have and get input or advice from others!

                            <MeetUpForm />
                        </Typography>
                    <div className='pupPeek'>
                        <img
                            src={PupPeek}
                            alt='pibbles'
                            loading='lazy'
                            style={{ marginRight: '2px', marginBottom: '9em' }}
                        />
                    </div>
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: '2em'
                }}>
                    <Box sx={{
                        border: '4px solid',
                        borderColor: '#DC8665',
                        borderRadius: '5px',
                        // paddingBottom: 3,
                        maxWidth: '75%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 5,
                        marginBottom: '2em'
                    }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                backgroundColor: '#DC8665',
                                fontSize: '1.75rem',
                                fontWeight: 'inherit',
                                padding: '0.9em'
                            }}
                        >
                            Check out these MeetUps!
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
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <MeetUpList
                                    meetUps={meetUps}
                                    title="Click on any meetUp below to see more information or to leave a comment!"
                                />
                            )}

                        </Typography>
                            <div style={{
                                display: 'flex',
                                width: '100%',
                                flexDirection: 'row-reverse'
                            }}>
                                <img
                                    src={Kitten}
                                    alt='peeking'
                                    loading='lazy'
                                    style={{ marginRight: '-2.8em', marginBottom: '-1.6em' }}
                                />
                            </div>
                    </Box>
                </Box>
            </Container >
        </>
    )
}
