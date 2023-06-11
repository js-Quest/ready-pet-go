import React, {useState, useEffect} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageFooter from './LoginPageFooter';
import LoginPageInputs from './LoginPageInputs';
import { validateLoginForm } from '../../shared/utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../app/actions/authActions';
// import {useNavigate} from 'react-router-dom'


function LoginPage({login}) {
  // const navigate = useNavigate();
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=>{
    setIsFormValid(validateLoginForm({email, password}));
  }, [email, password, setIsFormValid])

  //will change for graphQL
  const handleLogin = () => {
    const userDetails = {
      email,
      password
    }
    login(userDetails)  //(userDetails, navigate)?
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
// map all actions to props
const mapActionsToProps =(dispatch)=>{
  return{
    ...getActions(dispatch),
  }
};
// access through react-redux connect
export default connect(null, mapActionsToProps)(LoginPage);