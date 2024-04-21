import { firestore } from "../firebaseConfig";
import { addDoc,collection,onSnapshot} from "firebase/firestore";

let dbRef=collection(firestore,"posts");
export const postStatus=(status)=>{
  let object={
          status:status
  };
   addDoc(dbRef,object)
    .then((res)=>{
        console.log("Document added");
    })
    .catch((err)=>{
        console.log(err);
    });
};

export const getStatus=()=>{
    onSnapshot(dbRef,(response)=>{
        console.log(response.docs.map((docs)=>{
            return {...docs.data(),id:docs.id};
        }));
    })
}