import React, { useState } from "react"
function Input(){
    const[input,setinput]=useState("");
    return(
        <>
        <input type="text" value={input}   onChange={(e)=>setinput(e.target.value)}/>
       <p>{input}</p>
        </>
    )
}
export default Input