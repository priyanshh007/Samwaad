import React, { useMemo, useState, useEffect } from "react";
import "./index.scss";


export default function PostsCard({ posts }){
   return (
    <div className="posts-card">
    <p className="name">{posts.username}</p>
    <p className="timestamp">{posts.timeStamp}</p>
     <p className="status">{posts.status}</p>
   </div>)
};