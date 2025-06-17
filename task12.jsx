import React, { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";

function To(){
  const[input,setinput]=useState("")
const[div,setdiv]=useState([])

  function handleform(e){
    e.preventDefault();
    setdiv([...div,input])
setinput("")
  }

  useEffect(()=>{
    localStorage.setItem("h",JSON.stringify(div))
  },[div])
    return(
        <>
        <form onSubmit={handleform}>
        <input type="text" value={input}   onChange={(e)=>setinput(e.target.value)}/>
        <button type="submit">click</button>
          </form>
        <div>
           {
            div.map((v)=>{
                return(
                    <>
                    <p>{v}</p>
                    </>
                )
            })
           }
        </div>
      
    
        </>
    )
}
export default To