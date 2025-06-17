import React, { useEffect, useState } from "react";
function Fetch(){
    const[data,setData]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=>res.json())
        .then((res)=>setData(res))

    },[])

    return(  
        <>
        <p>{data.name}</p>
        <p>{data.email}</p>
        
        </>
    )
}
export default Fetch;