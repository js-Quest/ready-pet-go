import React from "react";
import GoogleSignin from "../../images/googleButton.png";
import { auth } from "../../utils/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
    window.location.replace('/dashboard')
  };

  return (
    <nav className="nav-bar">
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Exit Chat
        </button>
      ) : (null)

      }
    </nav>
  );
};

export default NavBar;
// wrap in UI button