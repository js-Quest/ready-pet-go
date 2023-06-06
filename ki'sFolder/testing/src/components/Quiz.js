import AuthBox from "./AuthBox"
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useState } from 'react';

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



    const handleFormSubmit = (e) => { 
        e.preventDefault(); 

        ///THIS NEEDDS TO BE ERASED
        console.log(selectedValue);  
        console.log(quiz[activeQuestion].input)

        //capture inputs and information, if nothin selected, default to 'n/a'
        if (!selectedValue) { 
            const defaultValue = options[0][Object.keys(options[0])[0]];
            localStorage.setItem('userInfo', defaultValue)   
          } else {
            localStorage.setItem('userInfo', selectedValue) 
          }
 
        ///check to see if quiz array is complete
        if (activeQuestion !== quiz.length - 1) {
            setActiveQuestion((prev) => prev + 1)
          } else {
            ///quiz is over, render new page
            setActiveQuestion(0)
            console.log('quiz complete!')
          } 
    };


    return (
        <>
        {}
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
                            <h3>{quiz[0].question}</h3>
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
        </>
    )
}

export default Quiz