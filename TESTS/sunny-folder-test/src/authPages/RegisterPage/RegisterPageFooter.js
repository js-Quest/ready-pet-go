import React from 'react'

import PrimaryButton from "../../shared/components/PrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from 'react-router-dom';
import { Tooltip } from "@mui/material";

const getFormNotValidMessage=()=>{
  return 'Username should be at least 3 characters, password at least 6 characters.'
}
const getFormValidMessage=()=>{
  return 'Click Register!'
}
export default function RegisterPageFooter({ handleRegister, isFormValid }) {
  const navigate = useNavigate();
  const handlePushToLoginPage = () =>{
    navigate('/login')
  };
  return (
    <>
    <Tooltip
      title={!isFormValid ? getFormNotValidMessage(): getFormValidMessage()}
      >
      <div>
        <PrimaryButton
          label="Register"
          additionalStyles={{ marginTop: "30px" }}
          disabled={!isFormValid}
          onClick={handleRegister}
        />
      </div>
      </Tooltip>
      <RedirectInfo 
      text=''
      redirectText='Already have an account?'
      additionalStyles={{marginTop: '5px'}}
      redirectHandler={handlePushToLoginPage}
      />
    </>
  );
}
