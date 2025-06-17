import React, { useState } from "react"
function Toggle(){
    const[toggle,settoogle]=useState(false);

    const[m,setm]=useState("show")

    function handleclick(){  
         if(m==="show"){
            settoogle(true)
            setm("hide");
         }
         
         else{
                 settoogle(false)
                 setm("show");
         }
    }
    return(
        <>
            <button onClick={handleclick}>{m}</button>
            {
                toggle&&<p>hello dosto</p>
            }
        </>
    )
}
export default Toggle
