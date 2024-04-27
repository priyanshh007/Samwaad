import React,{useMemo} from "react";
import Home from "../components/HomeComponent";
import Topbar from "../components/common/Topbar";
import { getCurrentUser } from "../api/firestoreAPIs";
import { useState } from "react";

export default function HomeLayout(){
   const [currentUser,setCurrentUser]=useState({});
    useMemo(()=>{
    getCurrentUser(setCurrentUser),[]
   })
   
   return( <div>
            <Topbar/>
            <Home currentUser={currentUser}/>
            </div>
            
           )
}