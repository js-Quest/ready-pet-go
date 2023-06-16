import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PetPeek1 from '../images/peeking1.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css';
import { TextField, Button, Grid } from '@mui/material';
import ElGato from '../images/cat1.png';

import CommentList from '../components/MeetUpComponents/CommentList';
import CommentForm from '../components/MeetUpComponents/CommentForm';

import { QUERY_MEETUP } from '../utils/queries';



const SingleMeetUp = () => {
    // Use `useParams()` to retrieve value of the route parameter `:profileId`
    const { meetUpId } = useParams();

    const { loading, data } = useQuery(QUERY_MEETUP, {
        // pass URL parameter
        variables: { meetUpId: meetUpId },
    });

    const meetUp = data?.meetUp || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return ( 

        <>
            <div className='petPeeking'>
                <img
                    src={PetPeek1}
                    alt='peeking'
                />
            </div>
            <Container className='dashboardContainer'>
                <h1 className='dashboardHead'>Welcom to MeetUps!</h1>
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
                            <h3> {meetUp.meetUpTitle}</h3>
                            <h5 className="card-header bg-dark text-light p-2 m-0">
                                Created By: {meetUp.meetUpAuthor} <br />
                                <span style={{ fontSize: '1rem' }}>
                                    posted this meetUp on {meetUp.createdAt}
                                </span>
                            </h5>
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



                            <div className="bg-light py-4">
                                <blockquote
                                    className="p-4"
                                    style={{
                                        fontSize: '1.5rem',
                                        fontStyle: 'italic',
                                        border: '2px dotted #1a1a1a',
                                        lineHeight: '1.5',
                                    }}
                                >
                                    {meetUp.meetUpText}
                                </blockquote>
                            </div>




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
                            User Comments
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


                            <div className="my-5">
                                <CommentList comments={meetUp.comments} />
                            </div>
                            <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                                <CommentForm meetUpId={meetUp._id} />
                            </div>

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

























































    );
};

export default SingleMeetUp;
