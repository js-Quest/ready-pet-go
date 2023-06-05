import React from "react";
import PrimaryButton from "../../shared/components/PrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from 'react-router-dom'

export default function LoginPageFooter({ handleLogin, isFormValid }) {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () =>{
    navigate('/register')
  };
  return (
    <>
      <div>
        <PrimaryButton
          label="login"
          additionalStyles={{ marginTop: "30px" }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
      <RedirectInfo 
      text='Want an account? '
      redirectText='Create an account'
      additionalStyles={{marginTop: '5px'}}
      redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
}
