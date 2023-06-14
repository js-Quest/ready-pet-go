import React from "react";
import { auth, provider } from "../../utils/firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../../styles/Auth.css";

export const Auth = ({ setIsAuth }) => {
  const enter = async () => {
    try {
      const token = await localStorage.getItem('id_token')
      if (!token) {
        window.location.replace('/login')
      }
      setIsAuth(true)
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
      <p> Check User Validation to continue </p>
      <button onClick={enter}> Validate </button>
    </div>
  );
};