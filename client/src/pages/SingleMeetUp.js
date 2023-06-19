import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PupPeekSolo from '../images/pupPeekSolo.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css';
import { TextField, Button, Grid } from '@mui/material';
import CommentList from '../components/MeetUpComponents/CommentList';
import CommentForm from '../components/MeetUpComponents/CommentForm';
import Fab from '@mui/material/Fab';
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
            <div className='pupPeeking'>
                <img
                    src={PupPeekSolo}
                    alt='peeking'
                />
            </div>
            <Container className='dashboardContainer'>
                <h1 className='dashboardHead'>{meetUp.meetUpAuthor}'s MeetUp!</h1>
                <Box sx={{
                    marginTop: '2em'
                }}>
                    <Fab aria-label='back'
                        href='/meetUp'
                        sx={{
                            position: 'fixed',
                            marginLeft: {xs: '0', lg: '2em'},
                            fontSize: '26px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#39363f',
                            backgroundColor: 'white'
                        }}>
                        🡸
                    </Fab>
                    <Box sx={{
                        border: '5px solid',
                        borderColor: '#DC8665',
                        borderRadius: '5px',
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
                                position: 'relative'
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: 'inherit',
                            }}> {meetUp.meetUpTitle}</h3>
                            <h5>

                                <span style={{ fontSize: '1rem', display: 'flex', alignItem: 'baseline', position: 'absolute', bottom: '2px' }}>
                                    {meetUp.meetUpAuthor} posted this meetUp on {meetUp.createdAt}
                                </span>
                            </h5>
                        </Typography>

                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                fontSize: '1.1rem',
                                marginTop: '1.3em',
                                paddingLeft: '2.3em',
                                paddingRight: '2.3em',
                                paddingTop: '1em',
                                paddingBottom: '2.2em',
                                backgroundColor: ''
                            }}
                        >



                            <div>
                                <blockquote
                                    style={{
                                        fontSize: '1.5rem',
                                        fontStyle: 'italic',
                                        border: '.1em dashed #534666',
                                        padding: '2.5em',
                                        margin: '-1.5em',
                                        lineHeight: '1.5',
                                    }}
                                >
                                    {meetUp.meetUpText}
                                </blockquote>
                            </div>




                        </Typography>
                        {/* <div className='catReach'>
                            <img
                                src={ElGato}
                                alt='CatSneezins'
                                style={{ marginLeft: '-8em', marginBottom: '-.4em' }}
                            />
                        </div> */}
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: '2em'
                }}>
                    <Box sx={{
                        border: '5px solid',
                        borderColor: '#DC8665',
                        borderRadius: '5px',
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


                            <div>
                                <CommentList comments={meetUp.comments} />
                            </div>
                            <div >
                                <CommentForm meetUpId={meetUp._id} />
                            </div>

                        </Typography>
                        {/* <div className='catReach'>
                            <img
                                src={ElGato}
                                alt='CatSneezins'
                                style={{ marginLeft: '-8em', marginBottom: '-.4em' }}
                            />
                        </div> */}
                    </Box>
                </Box>
            </Container >
        </>

























































    );
};

export default SingleMeetUp;
