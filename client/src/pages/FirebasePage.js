import React from 'react';
import { auth } from "../utils/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/FirebaseChatPage.css"
import NavBar from '../components/FirebaseChat/NavBar';
import ChatBox from '../components/FirebaseChat/ChatBox';
import Welcome from '../components/FirebaseChat/Welcome';
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';
import './style.css'
import { Container, Box, Button } from '@mui/material';
import Footer from '../components/Footer/Footer';

export default function FirebasePage() {
  const [user] = useAuthState(auth);
  const handleChange = () => {
    window.location.replace('/login');
  }
  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return (
      <Container className='errorContainer'>
        <h1 className='errorHead'>Hold Up!</h1>
        <Box className='errorBox'>
          <h2 className='errorText'
          >Please <Link to="/login" className='errorLink'>LOGIN</Link> to join Ready, Pet, Chat!
          </h2>
          <Button sx={{
            background: '#B6B3B2',
            color: '#36393F',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 700,
            height: '40px',
            width: '50%',
            marginTop: '50px',
            border: '1px solid black',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
            onClick={handleChange}
          >
            LOGIN
          </Button>
        </Box>
      </Container>
    );
  }
// Tutorial on building a Firebase Chatapp
// https://www.cometchat.com/tutorials/how-to-build-a-chat-app-with-firebase
  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}
