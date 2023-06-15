import React from "react";
import { auth } from "../../utils/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

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