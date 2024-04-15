import React from "react";
import Home from "../components/HomeComponent";
import Topbar from "../components/common/Topbar";

export default function HomeLayout(){
    return( <div>
            <Topbar/>
            <Home/>
            </div>
            
           )
}