import React from "react";
// import {space}from "antd";
import
{ Spin,Space }
from
"antd"
;
import "./common.scss";


export default function Loader(){
    return (
      <div className="loader">
        <p>Loading please wait !</p>
        <Space size="middle"/>
        <Spin  size="small"/>
        </div>
    );
}