import React, { useEffect, useState } from "react";
function Table() {
    let arr=[1,2,3,4,5]
const [input, setinput] = useState({
    name: "",
    department: "",
    feedback: "",
    rating:""
})
const[form,setForm]=useState([])

function handle(e){
setinput({...input,[e.target.name]:e.target.value})
}
function handleform(e) {
    e.preventDefault();
console.log("form",input);
setForm([...form,input])

}

  // Load saved form submissions from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  

  // Save form data to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(form));
  }, [form]);



    return (
        <>
            <form onSubmit={handleform}>
                Name: <input type="text" name="name" value={input.name} onChange={handle}/>

                <br /><br />

                Department: <select  name="department" value={input.department} onChange={handle}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <br /><br />

                Feedback:<textarea  name="feedback" value={input.feedback} onChange={handle}>
                </textarea>

                <br /><br />
                Radio:{
                 arr.map((v)=>(
                    <label key={v.id}>
                        <input type="radio" value={v} name="rating" onChange={handle}/>
                        {v}
                    </label>
                 ))
                }
                <br /><br />
                Submit: <button type="submit">submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>department</th>
                        <th>feedback</th>
                        <th>rating</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    form.map((v)=>{
                        return(
                            <>
                            <tr>
                            <td>{v.name}</td>
                            <td>{v.feedback}</td>
                            <td>{v.department}</td>
                            <td>{v.rating}</td>
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
export default Table