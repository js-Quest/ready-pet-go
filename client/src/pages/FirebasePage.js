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
import { Container, Box } from '@mui/material';
import Footer from '../components/Footer/Footer';

export default function FirebasePage() {
  const [user] = useAuthState(auth);
  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return (
      <Container className='errorContainer'>
        <h1 className='errorHead'>Hold Up!</h1>
        <Box className='errorBox'>
          <h2 className='errorText'
          >Please <Link to="/login" className='errorLink'>LOGIN</Link> to join PuppyChat!
          </h2>
          <button className='errorLogin'>
            LOGIN
          </button>
        </Box>
      </Container>
    );
  }
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
