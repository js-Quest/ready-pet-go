import React from 'react';
import { auth } from "../utils/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/FirebaseChatPage.css"
import NavBar from '../components/FirebaseChat/NavBar';
import ChatBox from '../components/FirebaseChat/ChatBox';
import Welcome from '../components/FirebaseChat/Welcome';
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

export default function FirebasePage() {
  const [user] = useAuthState(auth);
  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return (
      <p>You must <Link to="/login">LOG IN</Link> to use PuppyChat</p>
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
