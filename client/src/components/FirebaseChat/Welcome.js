import React from "react";
import GoogleSignin from "../../images/googleButton.png";
import { auth } from "../../utils/firebase-config";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import puppychatImg from "../../images/puppychatClear.png"

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const styles = {
    google: {
      height: "45px"
    },
  }

  return (
    <main className="welcome">
      <h1 className="welcome-message">Welcome to <span style={{ fontWeight: "550", color: '#DC8665'}}>PuppyChat</span>!</h1>
      <div className="puppychatImg">
        <img src={puppychatImg} style={{maxWidth: "20%"}}/>
      </div>
      <p>Sign in with Google to chat with with your fellow Pet Enthusiasts!</p>
      <button className="sign-in">
        <img
          style={styles.google}
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;