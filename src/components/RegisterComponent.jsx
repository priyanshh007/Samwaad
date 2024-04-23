import React,{useState}from "react";
import "../Sass/LoginComponent.scss";

import logo from "../assets/logo.png";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/firestoreAPIs";
import '../firebaseConfig';
import GoogleButton from "react-google-button";
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";

export default function RegisterComponent() {
    let navigate=useNavigate();
    const [credentials,setCredentials]=useState({});
    const register=async()=>{
       try{
        let response=await RegisterAPI(credentials.email,credentials.password);
        toast.success('Account created!');
        navigate("/home");
        localStorage.setItem('userEmail',response.user.email);
        localStorage.setItem('username',response.user.name);
       }
       catch(err)
       {
        toast.error("can't create your account !!");
       }
  };

  return (
    <div className="login-wrapper">
     <img src={logo} className="logo"/>
    <h1 className="heading-sign">  Sign up </h1>
    <div className="auth-input">
    <div>
    <input onChange={(event)=>
     setCredentials({...credentials,email:event.target.value})}
    type="email"
    className="common-input" placeholder="Enter your email"
    >
    </input>
    </div>
    <div>
    <input onChange={(event)=>
     setCredentials({...credentials,name:event.target.value})}
    type="text"
    className="common-input" placeholder="Enter your Name"
    >
    </input>
    </div>
    <div>
    <input onChange={(event)=>
     setCredentials({...credentials,password:event.target.value})}
     type="password"
    className="common-input" placeholder="Enter your password">
    </input>
    </div>
    </div>
    <button onClick={register} className="login-btn">
    Agree & Join
    </button>
    <hr class="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on Samwaad?{" "}
          <span className="join-now" onClick={() => navigate("/login")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
    )
}