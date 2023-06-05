import React, {useState, useEffect} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageFooter from './LoginPageFooter';
import LoginPageInputs from './LoginPageInputs';
import { validateLoginForm } from '../../shared/utils/validators';


export default function LoginPage() {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=>{
    setIsFormValid(validateLoginForm({email, password}));
  }, [email, password, setIsFormValid])

  const handleLogin = () => {
    console.group(email);
    console.log(password);
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
