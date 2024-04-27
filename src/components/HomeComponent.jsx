import React from "react";
import Topbar from "./common/Topbar";
import PostStatus from "./common/PostUpdate";
export default function Home({currentUser}){
    return (<div>
         <PostStatus currentUser={currentUser}/>
    </div>
)};