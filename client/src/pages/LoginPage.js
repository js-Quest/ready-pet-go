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
  });

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

    },
    input: {
      flexGrow: 1,
      height: "40px",
      border: "1px solid black",
      borderRadius: "10px",
      color: "black",
      background: "#D7DEDF",
      margin: 0,
      fontSize: "16px",
      padding: "0 5px",
    },
    button: {
      background: 'grey',
      color: 'white',
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: 500,
      height: '40px',
      marginTop: "30px",
      border: "1px solid black",
      borderRadius: "10px",
      cursor: 'pointer',
    },
    errorMessage: {
      color: 'white'
    }
  }



  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: 'white' }}>
        Welcome Back!
      </Typography>
      {/* color light grey, sx used for styling */}
      <Typography sx={{ color: '#b9bbbe' }}>
        Nice to see you bruh.
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
          {'Invalid credentials, try again'}
        </div>
      )}
      {/* </Tooltip> */}
      <RedirectInfo
        text='Want an account? '
        redirectText='Create an account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </AuthBox>
  );
};

export default Login;
