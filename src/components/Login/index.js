import React, { useState, useEffect } from 'react';

import './style.css';

export default function Login(props){
  const [userName,setUserName] = useState('')
  const [passWord,setPassWord] = useState('')
  const [errorMsg,setErrorMsg] = useState('')
  useEffect(()=>{
    if (props.loginFail) {
      setErrorMsg("Please enter valid credentials");
      props.resetauthorised();
    }
    else if (props.serviceFailMessage) {
      setErrorMsg("Some network error occured. Please try again!");
      props.resetauthorised();
    }
    else if (props.authorisedDetail) {
      setErrorMsg("UNAUTHORISED USER");
      props.resetauthorised();
    }
  },[props])
  const getErrorMessage = (userName,passWord) => {
    let errorMsg = '';
    if (userName === '' && passWord === '') {
      setErrorMsg("Username and Password cannot be empty!");
      return {errorMsg}
    } else if (userName === '') {
      setErrorMsg("Username cannot be empty!");
      return {errorMsg}
    } else if (passWord === '') {
      setErrorMsg("Password cannot be empty!");
      return {errorMsg}
    }
    return errorMsg;
  }
  const loginAction = (e) => {
    e.preventDefault();
    let username=userName;
    let password=passWord;
    const errorMsg = getErrorMessage(username,password);
    if (errorMsg.length === 0) {
      props.loginClick(username, password);
    }
  }
  
    return (
      <div>
        Login
      </div>
    );
}