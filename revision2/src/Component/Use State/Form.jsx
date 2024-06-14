import React, { useState } from 'react'

export default function Form() {
    const[name,setName] = useState("")
    const[email,setEmail]=useState("")

    function addName(e){
        setName(e.target.value)
    }

    function addEmail(e){
        setEmail(e.target.value)
    }

    function addForm(){
        console.log({
            name:name,
            email:email
        })
    }
  return (
    <div>
      <h3>Form</h3>
      <input type="text" placeholder='enter name' onChange={addName}/>
      <input type="email" placeholder='enter email' onChange={addEmail}/>
      <button onClick={addForm}>Submit</button>
    </div>
  )
}
