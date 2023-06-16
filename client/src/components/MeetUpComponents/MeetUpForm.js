import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_MEETUP } from '../../utils/mutations';
import { QUERY_MEETUPS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

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
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            <h3>You can create a new MeetUp here!</h3>
            {Auth.loggedIn() ? (
                <>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={handleFormSubmit}
                    >
                        <p>Write your title here!</p>
                        <div className="col-12 col-lg-9">
                            <textarea
                                name="meetUpTitle"
                                placeholder="Write your title here!"
                                value={meetUpTitle}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <p
                            className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
                                }`}
                        >
                            Character Count: {characterCount}/280
                        </p>
                        <div className="col-12 col-lg-9">
                            <textarea
                                name="meetUpText"
                                placeholder="Say you need to say!"
                                value={meetUpText}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <button className="btn btn-primary btn-block py-3" type="submit">
                                Add MeetUp
                            </button>
                        </div>
                        {error && (
                            <div className="col-12 my-3 bg-danger text-white p-3">
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
        </div>
    );
};

