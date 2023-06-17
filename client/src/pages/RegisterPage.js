import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Container, Typography } from '@mui/material';
import Auth from '../utils/auth';
import AuthBox from '../components/AuthBox';
import RedirectInfo from '../components/RedirectInfo';
import { styled } from '@mui/system';


export default function Register() {

  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value
    });
  };

  console.log('userform data')

  console.log(userFormData);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      localStorage.setItem('email', userFormData.email)
      localStorage.setItem('username', userFormData.username)

      console.log('this is data ');



      Auth.signUp(data.addUser.token);

    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

 

  const navigate = useNavigate(); 
  const handlePushToLoginPage = () => {
    navigate('/login')
  };

  const Label = styled("p")({
    color: "#b9bbbe",
    textTransform: "uppercase",
    fontWeight: '600',
    fontSize: '16px',
    marginTop: '15px',
    marginBottom: '5px',
  });

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '1em',
      paddingRight: '1em',
      paddingTop: '0.5em'
    },
    input: {
      flexGrow: 1,
      height: "40px",
      border: "1px solid black",
      borderRadius: "10px",
      color: "black",
      background: "#D7DEDF",
      fontSize: "16px",
      padding: "0 15px",
    },
    button: {
      background: '#EEB462',
      color: '#36393F',
      textTransform: 'none',
      fontSize: '18px',
      fontWeight: 700,
      height: '40px',
      width: '500px !important',
      marginTop: "30px",
      border: "1px solid black",
      borderRadius: "10px",
      cursor: 'pointer',
      marginRight: '4em',
      marginLeft: '4em',
    },
    errorMessage: {
      color: 'white'
    }
  }

  return (
    <Container maxWidth={100}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <AuthBox>
        <Typography variant='h5' sx={{ color: 'white', textAlign: 'center' }}>
          Create an Account
        </Typography>
        {/* color light grey, sx used for styling */}
        {/* <Typography sx={{ color: '#b9bbbe' }}>
        We are glad you're here!
      </Typography> */}
        {data ? (
  
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} style={styles.form}>
            <Label>Email</Label>
            <input style={styles.input}
              name="email"
              type="email"
              placeholder="Example@email.com"
              value={userFormData.email}
              onChange={handleInputChange}
            />
            <Label>Username</Label>
            <input style={styles.input}
              name="username"
              type="username"
              placeholder="ExampleName"
              value={userFormData.username}
              onChange={handleInputChange}
            />
            <Label>Password</Label>
            <input style={styles.input}
              name="password"
              type="password"
              placeholder="password must be at least 8 characters"
              value={userFormData.password}
              onChange={handleInputChange}
            />
            {/* <Tooltip */}
            {/* title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      > */}

            <button
              style={styles.button}
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        )}

        {error && (
          <div style={styles.errorMessage}>
            {'Invalid credentials, username or email may already exist!'}
          </div>
        )}
        {/* </Tooltip> */}

        <RedirectInfo
          text='Already a member? '
          redirectText='Login Here'
          
          additionalStyles={{ marginTop: '40px', marginLeft: 'auto', marginRight: '10px' }}
          redirectHandler={handlePushToLoginPage}
        />
      </AuthBox>
    </Container>
  )
}
