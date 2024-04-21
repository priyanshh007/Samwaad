import React, { useState ,useMemo} from "react";
import ModalComponent from "../Modal/index.jsx";
import { postStatus } from "../../../api/firestoreAPIs.jsx";
import { getStatus } from "../../../api/firestoreAPIs.jsx";
import "./index.scss";

export default function PostStatus(){
 const [modalOpen,setModalOpen]=useState(false);
 const[status,setStatus]=useState("");
 const sendStatus=async()=>{
   await postStatus(status);
   await setModalOpen(false);
   await sendStatus("");
 };

useMemo(()=>{
getStatus();
},[]);


    return(
        <div className="post-status-main">
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
        </div>
    )
}