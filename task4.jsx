import React, { useState } from "react";

function Form(){
const[form,setForm]=useState("");
const[add,setAdd]=useState([]);

function handle(e){
  setForm(e.target.value);
}
function handleform(e){
     e.preventDefault();
     setAdd(form);
     setForm("");
}
    return(
        <>
        <form onSubmit={handleform}>
         <input type="text" value={form} onChange={handle}/>
         <button type="submit">click</button>
        </form>
        {
            add&&<p>{add}</p>
        }
        </>
    )
}
export default Form