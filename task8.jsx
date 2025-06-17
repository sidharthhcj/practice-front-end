 import React, { useEffect, useState } from "react";

 function Fetch2(){


const[n,setn]=useState(false);
const[arr,setarr]=useState([]);
const[load,setload]=useState(false)
useEffect(()=>{
    if(n){
        setload(true)
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res)=>res.json())
    .then((data)=>{
        setarr(data)
        setload(false)
    })
    
    }
},[n])

function handle(){
    setn(true)
}
    return(
        <>
           <button onClick={handle}>load post</button>
                 {load&& <p>Loading...</p>}
           {
            arr&&<ul>
                 {
                    arr.map((v)=>{
                        return(
                            <>
                        <li key={v.id}>{v.title}</li>
                        <li>{v.id}</li>
                        </>
                        )
 })
                 }
            </ul>
           }
        </>
    )
 }
 export default Fetch2