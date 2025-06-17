import React, { useEffect, useState } from "react";

function Color(){
 const[color,setColor]=useState("black");

 useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(color))
 },[color])
 
function handletoggle(){
    if(color==="black"){
        setColor("white")
    }else{
        setColor("black")
    }
}
    return(
        <div
        style={{background:color,height:"100vh",width:"100vh"}}>
                 
           <button onClick={handletoggle}>{color}</button>
        </div>
    )
}
export default Color  