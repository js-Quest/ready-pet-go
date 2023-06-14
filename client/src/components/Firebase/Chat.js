import React, { useState, useEffect } from "react";
import { db, auth } from "../../utils/firebase-config";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import "../../styles/Chat.css";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);


  const {loading, error, data } = useQuery(QUERY_ME);
  if (loading){
    return <p>loading</p>
  }
  if (error){
    return <p>error</p>
  }
  const user = data.me.username
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: user,
      room,
    });
    
    if (newMessage === "") return;

    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="header">
        <h1>Welcome to: {room.toUpperCase()}</h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="user">{message.user}:</span> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="new-message-input"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};