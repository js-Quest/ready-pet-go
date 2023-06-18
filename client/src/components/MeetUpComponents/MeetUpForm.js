import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_MEETUP } from '../../utils/mutations';
import { QUERY_MEETUPS, QUERY_ME } from '../../utils/queries';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import Auth from '../../utils/auth';
import './meetupstyle.css'

export default function MeetUpForm() {

    const [meetUpTitle, setMeetUpTitle] = useState('');
    const [meetUpText, setMeetUpText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addMeetUp, { error }] = useMutation(ADD_MEETUP,);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addMeetUp({
                variables: {
                    meetUpTitle,
                    meetUpText,
                    meetUpAuthor: Auth.getProfile().data.username,
                },
            });

            setMeetUpTitle('');
            setMeetUpText('');
            window.location.assign('/MeetUp');

        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'meetUpText' && value.length <= 280) {
            setMeetUpText(value);
            setCharacterCount(value.length);
        }
        if (name === 'meetUpTitle') {
            setMeetUpTitle(value);
        }
    };

    return (
        <Box sx={{ marginTop: '1.2em', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            {Auth.loggedIn() ? (
                <>
                    <form
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                        onSubmit={handleFormSubmit}
                    >
                        <h4>Your Title Below:</h4>
                        <div >
                            <TextField
                                name="meetUpTitle"
                                placeholder="Write your title here!"
                                value={meetUpTitle}
                                style={{ marginBottom: '.8em', width: '100%' }}
                                onChange={handleChange}
                            ></TextField>
                        </div>

                        <h4>
                            MeetUp Info Here: <span style={{ fontSize: '.8em', float: 'right' }}> Character Count: {characterCount}/280</span>
                        </h4>
                        <div>
                            <TextField
                                name="meetUpText"
                                placeholder="Say what you need to say!"
                                value={meetUpText}
                                style={{ marginBottom: '.8em', width: '100%' }}
                                onChange={handleChange}
                            ></TextField>
                        </div>

                        <div>

                            <Button variant='contained' type="submit" className='addMeetBtn' sx={{ backgroundColor: '#36393F', width: '9rem', marginLeft: 'auto' }}>Add MeetUp</Button>

                        </div>
                        {error && (
                            <div>
                                {error.message}
                            </div>
                        )}
                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to post your MeetUps. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/register">signup.</Link>
                </p>
            )}
        </Box>
    );
};

