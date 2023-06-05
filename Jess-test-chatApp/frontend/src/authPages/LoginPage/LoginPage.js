import React, {useState} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageFooter from './LoginPageFooter';
import LoginPageInputs from './LoginPageInputs';


export default function LoginPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const handleLogin = () => {
    console.log('logging in now')
  }
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs 
      mail={mail}
      setMail={setMail}
      password={password}
      setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}
