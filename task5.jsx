import React, { useState } from "react";
function Ch(){
    const[input,setinput]=useState("");
    return(
        <>
          <textarea value={input}  onChange={(e)=>setinput(e.target.value)}></textarea>
          <p>{input.length}</p>
        </>
    )
}
export default Ch;