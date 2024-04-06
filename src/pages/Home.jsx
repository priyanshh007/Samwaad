import React, { useEffect, useState } from "react";
import HomeComponent from "../components/HomeComponent";
 import { onAuthStateChanged } from "firebase/auth";
 import { useNavigate } from "react-router-dom";
 import { auth } from "../firebaseConfig";
 import Loader from "../components/common/Loader";

export default function HomeLayout() { 
    const [loading, setLoading] = useState(true);
   let navigate = useNavigate();
   useEffect(() => {
    onAuthStateChanged(auth, (res) => {        
            if (!res?.accessToken) {
                navigate("/login");
              }
              else
              {
                setLoading(false);
              } 
     });
   }, []);
   return loading ? <Loader /> : <HomeComponent />;
}