import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators"

export default function RegisterPage() {
  const [email, setMail] = useState('');
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');

  const [isFormValid, setIsFormValid]=useState(false);

  const handleRegister = () => {
    console.log(email)
    console.log(username)
    console.log(password)

    console.log('registering')
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

