import React from 'react';
import InputWithLabel from '../../components/InputWithLabel';

export default function RegisterPageInputs(props) {
  const {
    email, 
    setMail, 
    username, 
    setUsername, 
    password, 
    setPassword
  } = props;
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setMail}
        label='Email'
        type='text'
        placeholder='Enter Email Address'
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label='Username'
        type='text'
        placeholder='Enter Username'
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label='Password'
        type='password'
        placeholder='Enter Password'
      />
    </>
  )
}
