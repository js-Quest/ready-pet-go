import React from "react";
import { auth, provider } from "../../utils/firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../../styles/Auth.css";

// export const Auth = ({ setIsAuth }) => {
//   const enter = async () => {
//     try {
//       const token = await localStorage.getItem('id_token')
//       if (!token) {
//         window.location.replace('/login')
//       }
//       setIsAuth(true)
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <div className="auth">
//       <p> Check User Validation to continue </p>
//       <button onClick={enter}> Validate </button>
//     </div>
//   );
// };

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
      <p> Sign In With Google To Continue </p>
      <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  );
};