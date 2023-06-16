import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthBox from '../components/AuthBox';
import RedirectInfo from '../components/RedirectInfo';
import { styled } from '@mui/system';
import Auth from '../utils/auth';
// import Container from '@mui/material/Container';
import './style.css';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState)
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data)
      localStorage.setItem('email', formState.email)
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate('/register')
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
    <div maxWidth={100}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 'auto'
      }}>
      <AuthBox>
        <Typography variant='h5' sx={{ color: 'white', textAlign: 'center' }}>
          Welcome Back!
        </Typography>
        {/* color light grey, sx used for styling */}
        <Typography sx={{ color: '#b9bbbe', textAlign: 'center' }}>
          Nice to see you, bruh.
        </Typography>
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
              value={formState.email}
              onChange={handleChange}
            />
            <Label>Password</Label>
            <input style={styles.input}
              name="password"
              type="password"
              placeholder="your password"
              value={formState.password}
              onChange={handleChange}
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
            {'Invalid credentials. Try again.'}
          </div>
        )}
        {/* </Tooltip> */}
        <RedirectInfo
          text="Don't have an account? "
          redirectText=' Sign up!'
          additionalStyles={{ marginTop: '40px', marginLeft: 'auto', marginRight: '10px' }}
          redirectHandler={handlePushToRegisterPage}
        />
      </AuthBox>
    </div>
  );
};

export default Login;
