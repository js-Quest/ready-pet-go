import React from 'react';
import { auth } from "../utils/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/FirebaseChatPage.css"
import NavBar from '../components/FirebaseChat/NavBar';
import ChatBox from '../components/FirebaseChat/ChatBox';
import Welcome from '../components/FirebaseChat/Welcome';

export default function FirebasePage() {
  const [user] = useAuthState(auth);
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
