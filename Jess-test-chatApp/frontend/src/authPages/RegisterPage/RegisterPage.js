import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import { connect } from 'react-redux';
import { getActions } from '../../app/actions/authActions';
import {useNavigate} from 'react-router-dom';

function RegisterPage({register, navigate}) {
  // const navigate = useNavigate();
  const [email, setMail] = useState('');
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');

  const [isFormValid, setIsFormValid]=useState(false);

  const handleRegister = () => {
    const userDetails = {
      email,
      password,
      username,
    }
    register(userDetails, navigate);
    console.log('registering');
  }

  useEffect(() => {
    setIsFormValid(validateRegisterForm({
      email,
      username,
      password,
    }))
  }, [email, username, password, setIsFormValid])

  return (
    <AuthBox>
      <Typography variant='h5' sx={{color: 'white'}}>
        Create an Account
      </Typography>
      <RegisterPageInputs 
      email={email}
      setMail={setMail}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      />
      <RegisterPageFooter 
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  )
}

const mapActionsToProps =(dispatch)=>{
  return{
    ...getActions(dispatch),
  }
};

export default connect(null, mapActionsToProps)(RegisterPage);