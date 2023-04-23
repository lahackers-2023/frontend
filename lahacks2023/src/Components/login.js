import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './login.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (

    <>
      <button className='login-button' onClick={() => loginWithRedirect()}>
        <span className='login-button-text'> Get Started </span>
      </button >
    </>
  )
};

export default LoginButton;