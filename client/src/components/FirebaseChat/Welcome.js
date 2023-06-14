import React from "react";
import GoogleSignin from "../../images/googleButton.png";
import { auth } from "../../utils/firebase-config";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const styles = {
    img: {
      height: "45px"
    }
  }

  return (
    <main className="welcome">
      <h2 className="welcome-message">Welcome to PuppyChat!</h2>
      {/* <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} /> */}
      <p>Sign in with Google to chat with with your fellow Pet Enthusiasts!</p>
      <button className="sign-in">
        <img
          style={styles.img}
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