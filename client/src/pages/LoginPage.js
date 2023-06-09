import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Typography } from '@mui/material';
import { Tooltip } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import AuthBox from '../components/AuthBox';
import RedirectInfo from '../components/RedirectInfo';
import InputWithLabel from '../components/InputWithLabel';

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
    console.log(formState);
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

  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: 'white' }}>
        Welcome Back!
      </Typography>
      {/* color light grey, sx used for styling */}
      <Typography sx={{ color: '#b9bbbe' }}>
        Nice to see you bruh.
      </Typography>
      
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Login</h4>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-block btn-info"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* <Tooltip */}
        {/* title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      > */}
        <div>
          <PrimaryButton
            label="login"
            additionalStyles={{ marginTop: "30px" }}
            // disabled={!isFormValid}
            // onClick={handleLogin}
          />
        </div>
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
