import React, {useState} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageFooter from './LoginPageFooter';
import LoginPageInputs from './LoginPageInputs';


export default function LoginPage() {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const handleLogin = () => {
    console.log('logging in now')
  }
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs 
      email={email}
      setMail={setMail}
      password={password}
      setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}
