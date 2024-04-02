import React,{useState}from "react";
import "../Sass/LoginComponent.scss";
import logo from "../assets/logo.png";
import { LoginAPI,RegisterAPI } from "../api/AuthAPI";
import '../firebaseConfig';
import GoogleButton from "react-google-button";
import { toast } from 'react-toastify';


export default function Logincomponent(){
    const [credentials,setCredentials]=useState({});
    const login=async()=>{
       try{
        let response=await LoginAPI(credentials.email,credentials.password);
        toast.success('Signed In to samwaad')
       }
       catch(err)
       {
        toast.error("Please Check your credentials");
       }
    }
    
    return (
        <div className="login-wrapper">
         <img src={logo} className="logo"/>
        <h1 className="heading-sign">  Sign in</h1>
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
         setCredentials({...credentials,password:event.target.value})}
         type="password"
        className="common-input" placeholder="Enter your password">
        </input>
        </div>
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
         <hr className="hr-text" data-content="or" />
         <div className="google-btn-container">
         <GoogleButton
        onClick={() => { console.log('Google button clicked') }}
/>      
        <p className="go-to-signup">
          New to Samwaad?{" "}
          <span className="join-now">
            Join now
          </span>
         </p>
         </div>
        </div>
    
        
        )
}