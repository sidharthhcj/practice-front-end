import React, { useState } from "react";
function Counter(){
const[count,setCount]=useState(0);
    return(
        <>
        <button onClick={()=>setCount(count+1)}>click</button>
        <p>click me {count}times</p>
        </>
    )
}
export default Counter;