import AuthBox from "./AuthBox"
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Button from '@mui/material/Button';

const quiz = [
    {
        input: false,
        question: 'What kind of pet do you have? ',
        options: [
            { option0: 'Dog' },
            { option1: 'Cat' },
            { option2: 'Both' },
            { option3: 'None yet' }
        ]
    },
    {
        input: true,
        question: 'Whats the name of your pet? ',
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

    // {options.map((option, i) => (

    // <FormControlLabel value={Object.values(option)[0]}" control={<Radio />} label={Object.values(option)[0]} />

    // ))}

    return (
        <>
            <AuthBox>
                <Typography variant='h5' sx={{ color: 'white' }}>
                    Please Take this short Quiz!
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
                                defaultValue="female"
                                name="radio-buttons-group"
                            >

                                {options.map((option, i) => (

                                    <FormControlLabel value={Object.values(option)[0]} control={<Radio />} label={Object.values(option)[0]} />

                                ))}
                            </RadioGroup>
                        </FormControl>
                        <Button style = {{marginTop: 50}} variant="contained">Submit</Button>

                    </div>

                </Typography>
            </AuthBox>
        </>
    )
}

export default Quiz