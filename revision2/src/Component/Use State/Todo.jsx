import React, { useState } from 'react'

export default function Todo() {
    const[state,setState] = useState("")
    const[data,setData] = useState([])

    function addText(e){
        setState(e.target.value)
    }

    function addTodo(){
        setData([...data,state])
    }

    function delTodo(index){
        const newData=[...data]
        newData.splice(index,1)
        setData(newData)
    }

    function editTodo(){
      
    }
  return (
    <div>
      <h3>Todo</h3>
      <input type="text" placeholder='enter name' onChange={addText} />
      <button onClick={addTodo}>Click</button>
      {
        data.map((el)=>{
            return <li>{el}
            <button onClick={delTodo}>Delete</button>
            <button onClick={editTodo}>Edit</button>
            </li>
        })
      }
    </div>
  )
}
