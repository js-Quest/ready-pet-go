import React, { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app';
// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
import { Chat } from '../components/Firebase/Chat';
import { Auth } from '../components/Firebase/Auth';
import { AppWrapper } from '../components/Firebase/AppWrapper';
import Cookies from "universal-cookie"
import { getFirebaseConfig } from '../utils/firebase-config';
import "../styles/FirebasePage.css"

const cookies = new Cookies();

export default function Firebase() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input onChange={(e) => setRoom(e.target.value)} />
          <button
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </AppWrapper>
  );
}
