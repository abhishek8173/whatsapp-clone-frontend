import React from 'react'
import { GoogleButton } from 'react-google-button';
import { useEffect } from 'react';
import './Login.css';
import Logo from './logow.png';
import { UserAuth } from './context/AuthContext.js';
import { useNavigate } from 'react-router-dom';

function Login() {

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn();
    }catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    if(user?.email !== undefined){
      navigate('/');
    }
  }, [user]);

  return (
    <div className='login'>
        <img src={Logo} alt=""/>
        <div className='login__form'>
            <h1>LogIn</h1>
            <GoogleButton className="login__googleButton" onClick={handleGoogleSignIn} />
        </div>
    </div>
  )
}

export default Login