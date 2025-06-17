import React, { useEffect, useState } from "react";


function Locals(){
    const[input,setInput]=useState("")

function handle(e){
    
setInput(e.target.value)
}

useEffect(()=>{
localStorage.setItem("cnt",JSON.stringify(input))
},[input])

    return(
        <>
        <input type="text" value={input} onChange={handle}/>
   
        </>
    )
}
export default Locals