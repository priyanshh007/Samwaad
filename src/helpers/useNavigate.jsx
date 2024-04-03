import { useNavigate } from "react-router-dom";
import React from "react";

export default function useNavigate(){
 let instance=useNavigate();
 const navigate=(param)=>{
 instance(param);
};
}