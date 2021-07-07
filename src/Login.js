import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    //do clever google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.fontgala.com/what-font-does-discord-use-for-the-logo_font_preview40487.jpg"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In.</Button>
    </div>
  );
}

export default Login;
