import { firestore } from "../firebaseConfig";
import { toast } from 'react-toastify';
import { addDoc,collection,onSnapshot} from "firebase/firestore";

let postsRef=collection(firestore,"posts");
let userRef=collection(firestore,"users");


export const postStatus=(object)=>{

   addDoc(postsRef,object)
    .then((res)=>{
        toast.success("Post added sucessfully");
    })
    .catch((err)=>{
        toast.error(err);
    });
};

export const getStatus=(setAllStatus)=>{
    onSnapshot(postsRef,(response)=>{
        setAllStatus(response.docs.map((docs)=>{ return {...docs.data(),id:docs.id};
         })
        );
        //console.log(response.docs[0].);
        
    })
}

export const postUserData = (object) => {
    addDoc(userRef, object)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };