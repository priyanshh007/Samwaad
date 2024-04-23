import React, { useState ,useMemo} from "react";
import PostsCard from "../PostCard/index.jsx";
import ModalComponent from "../Modal/index.jsx";
import { postStatus } from "../../../api/firestoreAPIs.jsx";
import { getStatus } from "../../../api/firestoreAPIs.jsx";
import "./index.scss";
import { getCurrentTimeStamp } from "../../../helpers/useMoment.jsx";

export default function PostStatus(){
 let userEmail=localStorage.getItem('userEmail');
 let username=localStorage.getItem('username');
 const [modalOpen,setModalOpen]=useState(false);
 const[status,setStatus]=useState("");
 const[allstatuses,setAllStatus]=useState([]);
 const sendStatus=async()=>{
    let object={
        status:status,
        timeStamp:getCurrentTimeStamp("LLL"),
        userEmail:userEmail,
        username:username,
    };
  //  console.log(getCurrentTimeStamp("LLL"));
   await postStatus(object);
   await setModalOpen(false);
   await setStatus("");
 };

useMemo(()=>{
getStatus(setAllStatus);
},[]);

//console.log(allstatuses);
    return(<div className="post-status-main">
            <div className="post-status">
                <button className="open-post-modal" onClick={()=>setModalOpen(true)}>
                Post something!!
               </button> 
            </div>
             <ModalComponent 
             setStatus={setStatus} modalOpen={modalOpen} setModalOpen={setModalOpen}
             status={status}
             sendStatus={sendStatus}
            /> 
           <div>
    {allstatuses.map((posts) => {
        return <PostsCard key={posts.id} posts={posts} />;
    })}
</div>
        </div>
    )
}