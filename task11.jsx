import React, { use, useEffect, useState } from "react";

function Fetching(){
    const[data,setdata]=useState([])
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res)=>res.json())
    .then((data)=>{
        setdata(data)
    })
})
    return(
        <>
        
        <table>
            <thead>
<tr>
    <th>title</th>
    <th>palatan</th>
    <th>loka</th>
    <th>vira</th>
</tr>
            </thead>
            <tbody>
                {
                    data.map((v)=>{
                        return(
                            <>
                            <tr>
                                <td>{v.userId}</td>
                                <td>{v.id}</td>
                                <td>{v.title}</td>
                                <td>{v.body}</td>
                            </tr>
                            </>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}
export default Fetching