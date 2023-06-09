import AuthBox from "./AuthBox"
import { Typography, Input } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

const quiz = [
    {
        input: false,
        question: 'What kind of pet do you have? ',
        options: [
            { option0: 'n/a' },
            { option1: 'Dog' },
            { option2: 'Cat' },
            { option3: 'Both' }
        ]
    },
    {
        input: true,
        question: 'Whats the name of your pet(s)? ',
    },
    {
        input: true,
        question: 'What is your pet’s breed? ',
    },
    {
        input: true,
        question: 'Write a short pet bio!',
    },

]


const options = quiz[0].options;



const Quiz = () => {

    const [selectedValue, setSelectedValue] = useState('');
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [defaultText, setDefaultText] = useState('Type Here!');
    const [startQuiz, setStartQuiz] = useState(true);
    

    ////only using this until production, no reason to clear it out otherwise
    useEffect(() => {
        localStorage.clear();
    }, []);


    const handleFormSubmit = (e) => {
        e.preventDefault();


        //capture inputs and information, if nothin selected, default to 'n/a' 
        // const defaultValue = {value: options[0][Object.keys(options[0])[0]]}; 
        var response = '';
        response = {
            question: activeQuestion,
            answer: selectedValue
        }
        var newInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
        newInfo.push(response);
        localStorage.setItem("userInfo", JSON.stringify(newInfo));

        setSelectedValue('')

        ///check to see if quiz array is complete
        if (activeQuestion !== quiz.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            ///quiz is over, render new page
            setActiveQuestion(0)
            setStartQuiz(true)
            ////replace this console log with render new page
            console.log('quiz complete!')
        }


    };

    ///OnClick function to chage StartQuiz use state to by pass first if statment
    const startUp = (e) => {
        e.preventDefault();
        setStartQuiz(false)
    }

    const addLeadingZero = (number) => (`0${number}`)


    //if this is there first time visiting the site, we use a state variable to show the quiz start screen
    if (startQuiz) {
        return (<AuthBox>
            <Typography variant='h5' sx={{ color: 'white' }}>
                Thank you for visiting Ready-Pet-Go!
            </Typography>
            <Typography sx={{ color: '#b9bbbe' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div>
                        <h3>Please take this short quiz to help us get a better understanding idea of how we can help.</h3>
                    </div>

                    <Button type="button" onClick={startUp} style={{ marginTop: 110 }} variant="contained">Start Here</Button>
                </div>
            </Typography>
        </AuthBox>
        )
    }


    return (
        <>
            {!quiz[activeQuestion].input ?
                (
                    <AuthBox>
                        <Typography variant='h5' sx={{ color: 'white' }}>
                            Tell us about your companion!
                        </Typography>
                        <Typography sx={{ color: '#b9bbbe' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div>
                                    <h3>{quiz[activeQuestion].question}</h3>
                                    <div>
                                        <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                                        <span className="total-question">/{addLeadingZero(quiz.length)}</span>
                                    </div>
                                </div>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="None yet"
                                        name="radio-buttons-group"
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                    >

                                        {options.map((option, i) => (

                                            <FormControlLabel key={i} value={Object.values(option)[0]} control={<Radio />} label={Object.values(option)[0]} />

                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <Button type="button" onClick={handleFormSubmit} style={{ marginTop: 50 }} variant="contained">Submit</Button>

                            </div>

                        </Typography>
                    </AuthBox>

                )
                :
                (
                    <AuthBox>
                        <Typography variant='h5' sx={{ color: 'white' }}>
                            Tell us about your companion!
                        </Typography>
                        <Typography sx={{ color: '#b9bbbe' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div>
                                    <h3>{quiz[activeQuestion].question}</h3>
                                    <div>
                                        <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                                        <span className="total-question">/{addLeadingZero(quiz.length)}</span>
                                    </div>
                                </div>

                                <FormControl>

                                    <TextField
                                        id="filled-multiline-static"
                                        label="Text"
                                        multiline
                                        rows={4}
                                        defaultValue={defaultText}
                                        variant="filled"
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                    />

                                </FormControl>
                                <Button type="button" onClick={handleFormSubmit} style={{ marginTop: 50 }} variant="contained">Submit</Button>

                            </div>
                        </Typography>
                    </AuthBox>
                )
            }
        </>
    )
}

export default Quiz